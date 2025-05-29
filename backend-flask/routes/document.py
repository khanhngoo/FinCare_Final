from flask import Blueprint, request, jsonify
import easyocr
import cv2
import numpy as np
from pdf2image import convert_from_path

document_bp = Blueprint('document', __name__)

reader = easyocr.Reader(['vi'])

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
            result = reader.readtext(img_small, detail = 1)
            
            page_texts = [line[1] for line in result]  

            texts.extend(page_texts)
        
        
        return jsonify({"message": "OCR completed", "texts": texts})
    
    return {"error": "Unsupported file type"}, 400

