from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
client = MongoClient('mongodb+srv://irfanrasheedkc:gTo5RnpsY7mpL2BZ@cluster0.mznznpy.mongodb.net/?retryWrites=true&w=majority')
db = client['myproject1']

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    print(data)
    # Extract email from the data
    email = data.get('email')
    
    # Check if email already exists
    if db.users.find_one({'email': email}):
        # If email exists, return an error message
        return jsonify({'signup': 'False'}), 200  
    
    # If email does not exist, insert the new user
    db.users.insert_one(data)
    return jsonify({'signup': 'True'})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = db.users.find_one({'email': data['email']})
    if not user or user['password'] != data['password']:
        return jsonify({'login': 'False'}), 200
    return jsonify({'login': 'True'}), 200

@app.route('/create_project', methods=['POST'])
def create_project():
    data = request.get_json()
    # Store the project details to MongoDB
    db.projects.insert_one(data)
    return 'Project details stored successfully'

@app.route('/fetch_projects', methods=['GET'])
def fetch_projects():
    projects = db.projects.find()
    project_list = []
    for project in projects:
            project_list.append(project)
    return jsonify(project_list)

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')