from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
client = MongoClient('mongodb+srv://irfanrasheedkc:gTo5RnpsY7mpL2BZ@cluster0.mznznpy.mongodb.net/?retryWrites=true&w=majority')
db = client['myproject1']

import joblib

# Load the model and vectorizer
loaded_model = joblib.load('job_prediction_model.joblib')
loaded_vectorizer = joblib.load('tfidf_vectorizer.joblib')

# Store the target names in a list (replace with the actual names)
target_names = ['Business Analyst', 'Cyber Security', 'Data Engineer', 'Data Science', 'DevOps', 'Machine Learning Engineer', 'Mobile App Developer', 'Network Engineer', 'Quality Assurance', 'Software Engineer'] 



@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    print(data)
    email = data.get('email')
    if db.users.find_one({'email': email}):
        return jsonify({'signup': 'False'}), 200  
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
    db.projects.insert_one(data)
    return 'Project details stored successfully'

@app.route('/fetch_projects', methods=['GET'])
def fetch_projects():
    projects = db.projects.find()
    project_list = []
    for project in projects:
            project_list.append(project)
    return jsonify(project_list)

@app.route('/predict_job', methods=['POST'])
def predict_job():
    data = request.get_json()
    new_skills_input = data.get('skills', '')
    new_skills = [new_skills_input]  # Put input in a list for vectorizer

    # Vectorize the new skills
    new_skills_vectorized = loaded_vectorizer.transform(new_skills)

    # Predict the job and probability
    predicted_job = loaded_model.predict(new_skills_vectorized)
    predicted_prob = loaded_model.predict_proba(new_skills_vectorized)

    # Prepare the response
    response = {
        "Predicted Job": target_names[predicted_job[0]],
        "Prediction Confidence Score": str(predicted_prob[0][predicted_job[0]])
    }

    # Return the prediction as JSON
    return jsonify(response)
    
if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')