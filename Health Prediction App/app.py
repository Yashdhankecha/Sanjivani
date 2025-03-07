from flask import Flask, request, render_template
import joblib
import pandas as pd
import numpy as np

app = Flask(__name__)

# Load all models, scalers, and encoders
heart_attack_model = joblib.load('models/risk_model.pkl')  # Heart attack model
heart_attack_scaler = joblib.load('models/risk_scaler.pkl')  # Heart attack scaler
heart_attack_features = joblib.load('models/feature_names.pkl')  # Heart attack feature names

diabetes_model = joblib.load('models/diabetes_prediction_model.pkl')  # Diabetes model

stroke_model = joblib.load('models/stroke_model.pkl')  # Stroke model
stroke_encoder = joblib.load('models/stroke_encoder.pkl')  # Stroke encoder

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/heart_attack', methods=['GET', 'POST'])
def heart_attack():
    if request.method == 'POST':
        # Get user input from the form
        input_data = {
            'Age': float(request.form['Age']),
            'Gender_Male': 1 if request.form['Gender'] == 'Male' else 0,
            'Height(cm)': float(request.form['Height(cm)']),
            'Weight(kg)': float(request.form['Weight(kg)']),
            'Cholesterol(mg/dL)': float(request.form['Cholesterol(mg/dL)']),
            'Glucose(mg/dL)': float(request.form['Glucose(mg/dL)']),
            'Smoker_Yes': 1 if request.form['Smoker'] == 'Yes' else 0,
            'Exercise(hours/week)': float(request.form['Exercise(hours/week)']),
            'BP1': float(request.form['BP1']),
            'BP2': float(request.form['BP2'])
        }

        # Convert input data into a DataFrame with the correct feature order
        input_df = pd.DataFrame([input_data], columns=heart_attack_features)

        # Standardize the input data
        input_scaled = heart_attack_scaler.transform(input_df)

        # Make a prediction
        prediction = heart_attack_model.predict(input_scaled)
        risk_level = "High Risk" if prediction[0] == 1 else "Low Risk"

        return render_template('heart_attack_form.html', prediction_text=f'Prediction: The person is at {risk_level} for a heart attack.')

    return render_template('heart_attack_form.html')

@app.route('/diabetes', methods=['GET', 'POST'])
def diabetes():
    if request.method == 'POST':
        # Get user input from the form
        age = float(request.form['age'])
        bmi = float(request.form['bmi'])
        hba1c_level = float(request.form['hba1c_level'])
        blood_glucose_level = float(request.form['blood_glucose_level'])
        hypertension = int(request.form['hypertension'])
        heart_disease = int(request.form['heart_disease'])
        gender = request.form['gender'].strip().lower()
        smoking_history = request.form['smoking_history'].strip().lower()

        # Create a dictionary for the input data
        input_data = {
            'age': [age],
            'bmi': [bmi],
            'HbA1c_level': [hba1c_level],
            'blood_glucose_level': [blood_glucose_level],
            'hypertension': [hypertension],
            'heart_disease': [heart_disease],
            'gender_Female': [1 if gender == 'female' else 0],
            'gender_Male': [1 if gender == 'male' else 0],
            'smoking_history_current': [1 if smoking_history == 'current' else 0],
            'smoking_history_non-smoker': [1 if smoking_history == 'non-smoker' else 0],
            'smoking_history_past_smoker': [1 if smoking_history == 'past_smoker' else 0]
        }

        # Convert input data into a DataFrame
        input_df = pd.DataFrame(input_data)

        # Make a prediction
        prediction = diabetes_model.predict(input_df)

        # Prepare the result message
        result = "likely to have diabetes." if prediction[0] == 1 else "not likely to have diabetes."

        return render_template('diabetes_form.html', prediction_text=f'Prediction: The person is {result}')

    return render_template('diabetes_form.html')

@app.route('/stroke', methods=['GET', 'POST'])
def stroke():
    if request.method == 'POST':
        # Get user input from the form
        input_data = {
            'gender': request.form['gender'],
            'age': float(request.form['age']),
            'hypertension': int(request.form['hypertension']),
            'heart_disease': int(request.form['heart_disease']),
            'ever_married': request.form['ever_married'],
            'work_type': request.form['work_type'],
            'Residence_type': request.form['Residence_type'],
            'avg_glucose_level': float(request.form['avg_glucose_level']),
            'bmi': float(request.form['bmi']),
            'smoking_status': request.form['smoking_status']
        }

        # Convert input data into a DataFrame
        input_df = pd.DataFrame([input_data])

        # One-hot encode the input data
        encoded_input = stroke_encoder.transform(input_df)

        # Make a prediction
        prediction = stroke_model.predict(encoded_input)

        # Prepare the result message
        result = "likely to have a stroke." if prediction[0] == 1 else "not likely to have a stroke."

        return render_template('stroke_form.html', prediction_text=f'Prediction: The person is {result}')

    return render_template('stroke_form.html')

if __name__ == '__main__':
    app.run(debug=True)