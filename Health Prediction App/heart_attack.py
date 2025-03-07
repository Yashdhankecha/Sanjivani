from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import joblib
import pandas as pd

# Load and preprocess your dataset
df = pd.read_csv("Heartattack.csv")
df = df.drop(columns=["ID", "Name"])
df = pd.get_dummies(df, columns=["Gender", "Smoker"], drop_first=True)
df['BP1'] = df['Blood Pressure(mmHg)'].str.split("/", expand=True)[0].astype("int64")
df['BP2'] = df['Blood Pressure(mmHg)'].str.split("/", expand=True)[1].astype("int64")
df = df.drop("Blood Pressure(mmHg)", axis=1)

# Prepare features and target
y = df['Heart Attack']
x = df.drop("Heart Attack", axis=1)

# Save the feature names
feature_names = x.columns.tolist()

# Standardize the features
ss = StandardScaler()
X = ss.fit_transform(x)

# Split the data
x_train, x_test, y_train, y_test = train_test_split(X, y, train_size=0.70, random_state=42)

# Train a scikit-learn model
model = RandomForestClassifier()
model.fit(x_train, y_train)

# Save the model, scaler, and feature names
joblib.dump(model, 'risk_model.pkl')
joblib.dump(ss, 'risk_scaler.pkl')
joblib.dump(feature_names, 'feature_names.pkl')  # Save feature names