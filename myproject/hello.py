import requests
import json
from flask import Flask, jsonify, make_response
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/')
def hello_world():
    data = requests.get("https://jobs.github.com/positions.json?description=ruby&page=1")
    
    return make_response(jsonify(data.json()), 200)