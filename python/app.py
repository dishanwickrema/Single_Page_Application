from flask import Flask, render_template, redirect, session, url_for, request
from flask_pymongo import PyMongo
import json

app = Flask(__name__)

mongo = PyMongo(app, uri = "mongodb://localhost:27017/autoinsurance")

# conn = 'mongodb://localhost:27017'
# client = pymongo.MongoClient(conn)

@app.route("/")
def index():
    data = mongo.db.data.find_one()
    return render_template("index.html",theft=data)

@app.route("/download")
def download():
    with open('../resources/Auto_Theft_2014_to_2017.json') as f:
        data = json.load(f.features)
        mongo.db.theft.update({},data,upsert=True)

    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)