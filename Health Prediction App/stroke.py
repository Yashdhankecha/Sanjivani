import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
warnings.filterwarnings("ignore")
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, precision_score, roc_auc_score, confusion_matrix, recall_score, roc_curve
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
import joblib

# Load the dataset
data = pd.read_csv("Stroke.csv")

# Prepare features and target
X = data.drop("stroke", axis="columns")
y = data.stroke

# One-hot encode categorical features
onehot_encoder = OneHotEncoder(sparse_output=False, handle_unknown="ignore")
X = onehot_encoder.fit_transform(X)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=42)

# Train the Logistic Regression model
logit = LogisticRegression(max_iter=1000)
logit.fit(X_train, y_train)

# Make predictions
y_pred = logit.predict(X_test)

# Evaluate the model
print("Confusion Matrix:")
print(confusion_matrix(y_test, y_pred))
print("Accuracy:", accuracy_score(y_test, y_pred))
print("Precision:", precision_score(y_test, y_pred))
print("Recall:", recall_score(y_test, y_pred))
print("ROC AUC Score:", roc_auc_score(y_test, y_pred))

# Save the model and OneHotEncoder to .pkl files
joblib.dump(logit, "stroke_model.pkl")
joblib.dump(onehot_encoder, "stroke_encoder.pkl")
print("Model and encoder saved to 'stroke_model.pkl' and 'stroke_encoder.pkl'")