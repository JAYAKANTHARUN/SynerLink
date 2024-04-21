from flask import Flask, request
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('mongodb+srv://irfanrasheedkc:gTo5RnpsY7mpL2BZ@cluster0.mznznpy.mongodb.net/?retryWrites=true&w=majority')
db = client['Synerlink']

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    # Store the details to MongoDB
    db.users.insert_one(data)
    return 'User details stored successfully'

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')