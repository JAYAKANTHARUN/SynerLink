from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
import joblib


app = Flask(__name__)
CORS(app)
client = MongoClient('mongodb+srv://irfanrasheedkc:gTo5RnpsY7mpL2BZ@cluster0.mznznpy.mongodb.net/?retryWrites=true&w=majority')
db = client['myproject1']
projects_collection = db['projects']

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

# @app.route('/create_project', methods=['POST'])
# def create_project():
#     data = request.get_json()
#     db.projects.insert_one(data)
#     return 'Project details stored successfully'

@app.route('/fetch_projects', methods=['GET'])
def fetch_projects():
    projects = db.projects.find()
    project_list = []
    for project in projects:
            project_list.append(project)
    return jsonify(project_list)

def predict_job(new_skills_input):
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


@app.route('/create_project', methods=['POST'])
def create_project():
    data = request.get_json()
    project_name = data.get('project_name', '')
    description = data.get('description', '')
    skills = data.get('skills', '')

    result=predict_job(skills)
    predicted_job_name=result['Predicted Job']

    # Save project information along with the predicted job post in the database
    project_data = {
        'project_name': project_name,
        'description': description,
        'skills': skills,
        'predicted_job': predicted_job_name
    }
    projects_collection.insert_one(project_data)

    # Return a success response
    return jsonify({'message': 'Project created successfully', 'predicted_job': predicted_job_name})

import fitz
import re
import base64
@app.route('/edit', methods=['POST'])
def upload_pdf():
    # Parse JSON data from request
    data = request.get_json()
    if not data or 'file64' not in data:
        return jsonify({'error': 'Missing pdf_base64 in request'}), 400

    base64_string = data['file64']
    # Remove the base64 prefix if present
    if ";base64," in base64_string:
        base64_string = base64_string.split(";base64,")[1]

    # Decode the base64 string
    pdf_bytes = base64.b64decode(base64_string)
    # Save the PDF bytes to a file
    pdf_file_path = 'temp_pdf_file.pdf'
    with open(pdf_file_path, 'wb') as pdf_file:
        pdf_file.write(pdf_bytes)
    # Extract text from the PDF file
    text = ''
    with fitz.open(pdf_file_path) as doc:
        for page in doc:
            text += page.get_text()
    print("Text is ")
    print(text)
    pattern = r"Skills(.*?)Certifications"

    # Perform the regex search
    match = re.search(pattern, text, re.DOTALL)

    skills_text=''
    # Check if a match was found and print it
    if match:
        # Extract and print the matched text, stripping leading/trailing whitespace
        skills_text = match.group(1).strip()
        print(skills_text)
    else:
        print("No match found.")
        return {"edit":"False"}

    x=predict_job(skills_text)
    return x
if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')