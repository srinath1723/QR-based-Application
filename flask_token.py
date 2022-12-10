from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['JSON_SORT_KEYS'] = False

token = 'c46c99044b539f0c2760286ecd3edf58'


@app.route("/api/token/", methods=['GET'])
def flask_main():
    return jsonify({'token': token})


def verify_token(user_name, password, token_value):
    if user_name == "Srinath" and password == "Superuser@123" and token_value == token:
        return "True"
    else:
        return "False"


@app.route("/api/login/", methods=['POST'])
def user_login():
    input_json = request.json
    user_name = input_json.get('UserName')
    password = input_json.get('Password')
    token_value = input_json.get('Token')

    result_val = verify_token(user_name, password, token_value)

    return jsonify({'Result': result_val})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
