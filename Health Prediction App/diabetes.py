import warnings
warnings.filterwarnings('ignore')

# Import necessary libraries
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.pipeline import Pipeline
from imblearn.over_sampling import SMOTE
from imblearn.under_sampling import RandomUnderSampler
from imblearn.pipeline import Pipeline as imbPipeline
import joblib

# Set the decimal format
pd.options.display.float_format = "{:.2f}".format

# Load the dataset
df = pd.read_csv("diabetes_prediction_dataset.csv")

# Handle duplicates
print("Number of duplicate rows:", df.duplicated().sum())
df = df.drop_duplicates()

# Remove rows with 'Other' gender
df = df[df['gender'] != 'Other']

# Recategorize smoking history
def recategorize_smoking(smoking_status):
    if smoking_status in ['never', 'No Info']:
        return 'non-smoker'
    elif smoking_status == 'current':
        return 'current'
    elif smoking_status in ['ever', 'former', 'not current']:
        return 'past_smoker'

df['smoking_history'] = df['smoking_history'].apply(recategorize_smoking)

# Perform one-hot encoding
def perform_one_hot_encoding(df, column_name):
    dummies = pd.get_dummies(df[column_name], prefix=column_name)
    return pd.concat([df.drop(column_name, axis=1), dummies], axis=1)

df = perform_one_hot_encoding(df, 'gender')
df = perform_one_hot_encoding(df, 'smoking_history')

# Define preprocessor
preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), ['age', 'bmi', 'HbA1c_level', 'blood_glucose_level', 'hypertension', 'heart_disease']),
        ('cat', OneHotEncoder(), ['gender_Female', 'gender_Male', 'smoking_history_current', 'smoking_history_non-smoker', 'smoking_history_past_smoker'])
    ])

# Split data into features and target variable
X = df.drop('diabetes', axis=1)
y = df['diabetes']

# Define SMOTE and RandomUnderSampler
over = SMOTE(sampling_strategy=0.5, random_state=42)
under = RandomUnderSampler(sampling_strategy=0.8, random_state=42)

# Create a pipeline
clf = imbPipeline(steps=[
    ('preprocessor', preprocessor),
    ('over', over),
    ('under', under),
    ('classifier', RandomForestClassifier(random_state=42))
])

# Define the hyperparameter grid
param_grid = {
    'classifier__n_estimators': [50, 100, 200],
    'classifier__max_depth': [None, 10, 20],
    'classifier__min_samples_split': [2, 5, 10],
    'classifier__min_samples_leaf': [1, 2, 4]
}

# Create GridSearchCV object
grid_search = GridSearchCV(clf, param_grid, cv=5, scoring='accuracy', n_jobs=-1)

# Split data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
grid_search.fit(X_train, y_train)

# Save the best model to a pickle file
best_model = grid_search.best_estimator_
print("Best model:", best_model)  # Debug: Check if the model exists
joblib.dump(best_model, 'diabetes_prediction_model.pkl')
print("Model saved as 'diabetes_prediction_model.pkl'")

# Verify the file was created and is not empty
import os
print("File size:", os.path.getsize('diabetes_prediction_model.pkl'), "bytes")

# Function to take user input and make a prediction
def predict_diabetes():
    # Load the saved model
    loaded_model = joblib.load('diabetes_prediction_model.pkl')

    # Take input from the user
    print("Enter the following details to predict diabetes:")
    age = float(input("Age: "))
    bmi = float(input("BMI: "))
    hba1c_level = float(input("HbA1c Level: "))
    blood_glucose_level = float(input("Blood Glucose Level: "))
    hypertension = int(input("Hypertension (1 for Yes, 0 for No): "))
    heart_disease = int(input("Heart Disease (1 for Yes, 0 for No): "))
    gender = input("Gender (Male/Female): ").strip().lower()
    smoking_history = input("Smoking History (current/non-smoker/past_smoker): ").strip().lower()

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
    prediction = loaded_model.predict(input_df)

    # Display the result
    if prediction[0] == 1:
        print("Prediction: The person is likely to have diabetes.")
    else:
        print("Prediction: The person is not likely to have diabetes.")

# Call the function to take input and display output
predict_diabetes()