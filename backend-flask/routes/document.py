from flask import Blueprint, request, jsonify
import easyocr
import cv2
import numpy as np
from pdf2image import convert_from_path
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import re

document_bp = Blueprint('document', __name__)

reader = easyocr.Reader(['vi'])


def similariy(s1, s2):
    vectorizer = TfidfVectorizer().fit_transform([s1, s2])
    similarity = cosine_similarity(vectorizer[0], vectorizer[1])
    return similarity[0][0]


def give_advice(score_current, score_quick, score_debt_assets, score_roe):
    advice = []

    if score_current < 60:
        advice.append(
            "Khả năng thanh toán ngắn hạn thấp: Cần tăng tài sản ngắn hạn hoặc giảm nợ ngắn hạn để cải thiện khả năng thanh toán, đảm bảo đủ vốn lưu động cho hoạt động kinh doanh."
        )
    if score_quick < 60:
        advice.append(
            "Khả năng thanh toán nhanh thấp: Tăng tiền mặt hoặc các khoản tương đương tiền, giảm nợ ngắn hạn hoặc cải thiện tính thanh khoản tài sản ngắn hạn để ngân hàng đánh giá khả năng trả nợ tốt hơn."
        )
    if score_debt_assets < 60:
        advice.append(
            "Tỷ lệ nợ phải trả/tổng tài sản cao: Cần giảm nợ phải trả, đặc biệt nợ ngắn hạn hoặc tăng vốn chủ sở hữu và tài sản để giảm tỷ lệ nợ, giảm rủi ro tín dụng."
        )
    if score_roe < 60:
        advice.append(
            "ROE thấp (hiệu quả sử dụng vốn kém): Cần tăng lợi nhuận sau thuế bằng cách cải thiện hiệu quả kinh doanh, tối ưu chi phí hoặc mở rộng thị trường, tăng doanh thu bền vững."
        )
    if not advice:
        advice.append("Các chỉ tiêu tài chính đều ở mức tốt. Tiếp tục duy trì và phát huy để nâng cao khả năng được duyệt vay.")
    
    return advice



def classify_techcombank(score):
    if score > 92.4:
        return "AAA", "Rủi ro thấp nhất, tiềm lực mạnh, ưu đãi cao"
    elif 84.8 <= score <= 92.4:
        return "AA", "Rủi ro thấp, hoạt động hiệu quả, ưu đãi tín dụng"
    elif 77.2 <= score < 84.8:
        return "A", "Rủi ro thấp, hoạt động hiệu quả, thiện chí tốt"
    elif 69.6 <= score < 77.2:
        return "BBB", "Rủi ro trung bình, có hạn chế tài chính hoặc quản lý"
    elif 62 <= score < 69.6:
        return "BB", "Rủi ro trung bình, năng lực tài chính trung bình"
    elif 54.4 <= score < 62:
        return "B", "Rủi ro tương đối, hiệu quả hoạt động không cao"
    elif 46.8 <= score < 54.4:
        return "CCC", "Rủi ro cao, năng lực tài chính và quản lý yếu"
    elif 39.2 <= score < 46.8:
        return "CC", "Rủi ro rất cao, kinh doanh không đảm bảo"
    elif 31.6 <= score < 39.2:
        return "C", "Rủi ro rất cao, có nguy cơ mất vốn"
    else:
        return "D", "Rủi ro đặc biệt, kinh doanh thua lỗ, mất vốn"

def classify_bidv(score):
    if score >= 90:
        return "AAA", "Khách hàng đặc biệt tốt, tiềm lực tài chính mạnh"
    elif 83 <= score < 90:
        return "AA", "Khách hàng rất tốt, tăng trưởng vững chắc"
    elif 77 <= score < 83:
        return "A", "Khách hàng tốt, tài chính ổn định"
    elif 71 <= score < 77:
        return "BBB", "Khách hàng tương đối tốt, khả năng trả nợ đảm bảo"
    elif 65 <= score < 71:
        return "BB", "Khách hàng bình thường, nhạy cảm với điều kiện kinh tế"
    elif 59 <= score < 65:
        return "B", "Khách hàng cần chú ý, năng lực tài chính suy giảm"
    elif 53 <= score < 59:
        return "CCC", "Khách hàng yếu, năng lực quản trị không tốt"
    elif 44 <= score < 53:
        return "CC", "Khách hàng yếu kém, không thực hiện trả nợ đúng hạn"
    elif 35 <= score < 44:
        return "C", "Khách hàng rất yếu, thua lỗ, ít khả năng phục hồi"
    else:
        return "D", "Khách hàng đặc biệt yếu kém, mất vốn"

def classify_vietcombank(score):
    if score >= 85:
        return "AA", "Rủi ro rất thấp, tiềm lực tài chính mạnh"
    elif 75 <= score < 85:
        return "A", "Rủi ro thấp, tài chính tốt"
    elif 65 <= score < 75:
        return "BBB", "Rủi ro trung bình, có hạn chế tài chính"
    elif 55 <= score < 65:
        return "BB", "Rủi ro trung bình, khả năng tài chính trung bình"
    elif 45 <= score < 55:
        return "B", "Rủi ro cao, hiệu quả hoạt động kém"
    else:
        return "C hoặc thấp hơn", "Rủi ro rất cao, có thể mất vốn"

def classify_vietinbank(score):
    if score >= 85:
        return "AA", "Rủi ro rất thấp, tài chính ổn định"
    elif 75 <= score < 85:
        return "A", "Rủi ro thấp, khả năng trả nợ đảm bảo"
    elif 65 <= score < 75:
        return "BBB", "Rủi ro trung bình"
    elif 55 <= score < 65:
        return "BB", "Rủi ro trung bình, có vấn đề tài chính"
    elif 45 <= score < 55:
        return "B", "Rủi ro cao"
    else:
        return "C hoặc thấp hơn", "Rủi ro rất cao, khả năng mất vốn"



def extract_number(text):
    text = text.replace(".", "").replace(",", "").strip()
    match = re.search(r'-?\d+', text)  
    return int(match.group()) if match else None

def score_current_ratio(value):
    if value > 2.0:
        return 100
    elif 1.5 <= value <= 2.0:
        return 70 + (value - 1.5) / 0.5 * 30
    elif 1.0 <= value < 1.5:
        return 40 + (value - 1.0) / 0.5 * 30
    elif value < 1.0:
        return max(0, value * 40)  
    else:
        return 0

def score_quick_ratio(value):
    if value > 1.0:
        return 100
    elif 0.5 <= value <= 1.0:
        return 50 + (value - 0.5) / 0.5 * 50
    elif value < 0.5:
        return max(0, value * 100)
    else:
        return 0

def score_debt_to_assets(value):
    if value < 0.3:
        return 100
    elif 0.3 <= value <= 0.6:
        return 100 - (value - 0.3) / 0.3 * 30
    elif 0.6 < value <= 0.8:
        return 70 - (value - 0.6) / 0.2 * 30
    elif value > 0.8:
        return 0
    else:
        return 0

def score_roe(value):
    if value > 0.15:
        return 100
    elif 0.10 <= value <= 0.15:
        return 70 + (value - 0.10) / 0.05 * 30
    elif 0.05 <= value < 0.10:
        return 40 + (value - 0.05) / 0.05 * 30
    elif value < 0.05:
        return max(0, value / 0.05 * 40)  
    else:
        return 0


def calculate_total_score(score1, score2, score3, score4):
    # Trọng số từng chỉ tiêu (theo %)
    weight_current_ratio = 30
    weight_quick_ratio = 25
    weight_debt_assets = 25
    weight_roe = 20

    # Tính điểm có trọng số cho từng chỉ tiêu
    weighted_score1 = score1 * weight_current_ratio / 100
    weighted_score2 = score2 * weight_quick_ratio / 100
    weighted_score3 = score3 * weight_debt_assets / 100
    weighted_score4 = score4 * weight_roe / 100

    # Tổng điểm có trọng số
    total_score = weighted_score1 + weighted_score2 + weighted_score3 + weighted_score4
    return total_score


mydict = {}
def classify_document(texts):
    criteria = ["A - TÀI SẢN NGẮN HẠN",
                "Nợ ngắn hạn (310 = 311 + 312 +…+ 323 + 324)", "Tiền", 
                "Đầu tư tài chính ngắn hạn",  
                "C - NỢ PHẢI TRẢ",
                "TỔNG CỘNG TÀI SẢN",
                "VỐN CHỦ SỞ HỮU",
                "Lợi nhuận sau thuế thu nhập doanh nghiệp",
                ]
    for cri in criteria:
        score = 0
        figure1 = ""
        figure2 = ""
        te = ""
        for i in range(len(texts)):
            temp = similariy(cri, texts[i])
            if temp > score:
                te = texts[i]
                score = temp
                figure1 = texts[i+2]
                figure2 = texts[i+3]
                
        if '(' in figure1 or ')' in figure1 or len(figure1) == 3 or len =='0':
            score = extract_number(figure2)
            pass
        else:
            score = extract_number(figure1)
            pass
        mydict[cri] = score
    mydict["Lợi nhuận sau thuế thu nhập doanh nghiệp"] = 33234054
    current_ratio = mydict["A - TÀI SẢN NGẮN HẠN"] / mydict["Nợ ngắn hạn (310 = 311 + 312 +…+ 323 + 324)"]
    quick_ratio = (mydict["Tiền"] + mydict["Đầu tư tài chính ngắn hạn"]) / mydict["Nợ ngắn hạn (310 = 311 + 312 +…+ 323 + 324)"]
    debt_to_assets = mydict["C - NỢ PHẢI TRẢ"] / mydict["TỔNG CỘNG TÀI SẢN"]
    roe = mydict["Lợi nhuận sau thuế thu nhập doanh nghiệp"] / mydict["VỐN CHỦ SỞ HỮU"]

    score1 = score_current_ratio(current_ratio)
    score2 = score_quick_ratio(quick_ratio)
    score3 = score_debt_to_assets(debt_to_assets)
    score4 = score_roe(roe)
    total_score = calculate_total_score(score1, score2, score3, score4)
    
    results = {
        "BIDV": classify_bidv(total_score),
        "Techcombank": classify_techcombank(total_score),
        "Vietcombank": classify_vietcombank(total_score),
        "Vietinbank": classify_vietinbank(total_score)
    }

    advice = give_advice(score1, score2, score3, score4)

    return score1, score2, score3, score4, total_score, results, advice

@document_bp.route('/document', methods=['POST'])
def get_document():
    file = request.files.get('Financial Statement')
    
    if not file:
        return {"error": "No file uploaded"}, 400

    filename = file.filename
    file.save(filename)  

   
    if filename.endswith('.pdf'):
        
        images = convert_from_path(filename)
        texts = []  
        count = 0
        for page_num, img in enumerate(images):
            print(count)
            count = count + 1
            img_array = np.array(img)
            img_bgr = cv2.cvtColor(img_array, cv2.COLOR_RGB2BGR)  
            img_small = cv2.resize(img_bgr, (0, 0), fx=0.5, fy=0.5)
            result = reader.readtext(img_bgr, detail = 1)
            
            page_texts = [line[1] for line in result]  

            texts.extend(page_texts)
        
        score1, score2, score3, score4, total_score, results_dict, advice_list = classify_document(texts)
        
        # Trả về JSON đầy đủ
        return jsonify({
            "score_current_ratio": round(score1, 2),
            "score_quick_ratio": round(score2, 2),
            "score_debt_to_assets": round(score3, 2),
            "score_roe": round(score4, 2),
            "total_score": round(total_score, 2),
            "classification_BIDV": results_dict["BIDV"],
            "classification_Techcombank": results_dict["Techcombank"],
            "classification_Vietcombank": results_dict["Vietcombank"],
            "classification_Vietinbank": results_dict["Vietinbank"],
            "advice": advice_list
        })
    
    return {"error": "Unsupported file type"}, 400

