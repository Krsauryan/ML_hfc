from flask import Flask, request, jsonify
import pickle5 as pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['POST'])
def hello():
    body_data = request.json
    array = body_data['data']
    
    with open('model.pkl', 'rb') as file:
        clf = pickle.load(file)
        prediction = clf.predict(array)
        status = "healthy" if prediction == 1 else "not healthy"
        print(f"PREDICTION: {status}")
        
        return jsonify({"success": True, "status": status})

if __name__ == '__main__':
    app.run(debug=True)
