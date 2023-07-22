from flask import Flask, render_template, jsonify,request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api ", methods=["GET","POST"])
def qa():
    if request.method =="POST":
        print(request.json)
        question = request.json.get("question")
        data = {"result": f"answer of{question}"}
        return jsonify(data)
    data = {"result":"thank you i am just a mechine learning model"}
    return jsonify(data)
app.run(debug=True)