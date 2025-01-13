from flask import Flask, send_from_directory, send_file
import os

app = Flask(__name__)

@app.route('/')
def root():
    return send_file('index.html')

@app.route('/<path:path>')
def serve_static(path):
    try:
        return send_file(path)
    except:
        return "File not found", 404

if __name__ == '__main__':
    app.run(debug=True, port=8000, host='127.0.0.1')
