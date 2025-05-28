from flask import Flask
from flask_cors import CORS
from routes.document import document_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(document_bp, url_prefix = '/api')

if __name__ == '__main__':
    app.run(port=8080, debug=True)