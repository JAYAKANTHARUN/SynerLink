from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('mongodb+srv://irfanrasheedkc:gTo5RnpsY7mpL2BZ@cluster0.mznznpy.mongodb.net/?retryWrites=true&w=majority')
db = client['synerlink']

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    # Store the details to MongoDB
    db.users.insert_one(data)
    return 'User details stored successfully'

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = db.users.find_one({'username': data['username']})
    if not user or user['password'] != data['password']:
        return jsonify({'error': 'Invalid username or password'}), 401
    return jsonify({'message': 'Logged in successfully'}), 200

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