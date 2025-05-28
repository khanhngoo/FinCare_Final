from flask import Blueprint, request, jsonify

document_bp = Blueprint('document', __name__)

@document_bp.route('/document', methods=['POST'])
def get_document():
    files = request.files
    result = {}

    print("Received files")
