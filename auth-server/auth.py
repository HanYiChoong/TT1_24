from flask import Flask, jsonify, request, json 
from flask_pymongo import PyMongo 
from bson.objectid import ObjectId 
from datetime import datetime 
from flask_bcrypt import Bcrypt 
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
from config import MONGO_DBNAME, MONGO_URI, JWT_SECRET_KEY

app = Flask(__name__)

app.config['MONGO_DBNAME'] = MONGO_DBNAME
app.config['MONGO_URI'] = MONGO_URI
app.config['JWT_SECRET_KEY'] = JWT_SECRET_KEY

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

@app.route('/', methods=["GET"])
def index():
    return 'Hello. This is the backend for the DBS marketplace.'

@app.route('/users/register', methods=["POST"])
def register():
    users = mongo.db.users 
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()

    user_object = users.insert_one({
        'email': email,
        'password': password,
        'created': created 
    })

    print('user_id')
    print(user_object.inserted_id)

    new_user = users.find_one({'_id': user_object.inserted_id})

    if new_user:        
        access_token = create_access_token(identity = {
            'email': new_user['email']
        })
        result = jsonify({'token':access_token})

    return result

@app.route('/users/login', methods=['POST'])
def login():
    users = mongo.db.users 
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""

    response = users.find_one({'email': email})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
                'email': response['email']
            })
            result = jsonify({'token':access_token})
        else:
            result = jsonify({"error":"Invalid username and password"})
    else:
        result = jsonify({"result":"No results found"})
    return result 

if __name__ == '__main__':
    app.run(debug=True)
