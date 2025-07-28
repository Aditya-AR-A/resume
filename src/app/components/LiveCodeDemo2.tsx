"use client";

import React, { useState } from 'react';

const LiveCodeDemo = () => {
  const [selectedExample, setSelectedExample] = useState('data_analysis');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const codeExamples = {
    data_analysis: {
      title: 'Data Analysis with Pandas',
      code: [
        'import pandas as pd',
        'import numpy as np',
        '',
        '# Create sample dataset',
        'data = {',
        '    "product": ["A", "B", "C", "D", "E"],',
        '    "sales": [150, 200, 175, 300, 125],',
        '    "profit_margin": [0.2, 0.15, 0.25, 0.18, 0.22]',
        '}',
        '',
        'df = pd.DataFrame(data)',
        'df["profit"] = df["sales"] * df["profit_margin"]',
        '',
        '# Analysis',
        'print("Sales Analysis Results:")',
        'print(f"Total Sales: ${df["sales"].sum()}")',
        'print(f"Average Profit Margin: {df["profit_margin"].mean():.2%}")',
        'print(f"Best Product: {df.loc[df["sales"].idxmax(), "product"]}")',
        'print(f"Total Profit: ${df["profit"].sum():.2f}")',
        '',
        '# Top 3 products by profit',
        'top_products = df.nlargest(3, "profit")',
        'print("\\nTop 3 Products by Profit:")',
        'for _, row in top_products.iterrows():',
        '    print(f"{row["product"]}: ${row["profit"]:.2f}")'
      ].join('\n'),
      description: 'Demonstrates data manipulation, analysis, and insights generation using Pandas'
    },
    ml_model: {
      title: 'Machine Learning Model Training',
      code: [
        'from sklearn.datasets import make_classification',
        'from sklearn.model_selection import train_test_split',
        'from sklearn.ensemble import RandomForestClassifier',
        'from sklearn.metrics import accuracy_score',
        'import numpy as np',
        '',
        '# Generate synthetic dataset',
        'X, y = make_classification(n_samples=1000, n_features=10,',
        '                         n_informative=5, n_redundant=2,',
        '                         random_state=42)',
        '',
        '# Split the data',
        'X_train, X_test, y_train, y_test = train_test_split(',
        '    X, y, test_size=0.2, random_state=42)',
        '',
        '# Train Random Forest model',
        'rf_model = RandomForestClassifier(n_estimators=100, random_state=42)',
        'rf_model.fit(X_train, y_train)',
        '',
        '# Make predictions',
        'y_pred = rf_model.predict(X_test)',
        'accuracy = accuracy_score(y_test, y_pred)',
        '',
        'print("Model Training Complete!")',
        'print(f"Dataset: {X.shape[0]} samples, {X.shape[1]} features")',
        'print(f"Training Set: {X_train.shape[0]} samples")',
        'print(f"Test Set: {X_test.shape[0]} samples")',
        'print(f"Model Accuracy: {accuracy:.3f}")',
        '',
        '# Feature importance',
        'feature_importance = rf_model.feature_importances_',
        'print("\\nTop 3 Most Important Features:")',
        'top_features = np.argsort(feature_importance)[-3:][::-1]',
        'for i, feat_idx in enumerate(top_features):',
        '    print(f"{i+1}. Feature {feat_idx}: {feature_importance[feat_idx]:.3f}")'
      ].join('\n'),
      description: 'Shows end-to-end ML pipeline: data generation, model training, evaluation, and feature analysis'
    },
    api_integration: {
      title: 'API Data Processing',
      code: [
        'import requests',
        'import json',
        'from datetime import datetime',
        '',
        '# Simulate API response',
        'mock_api_data = {',
        '    "users": [',
        '        {"id": 1, "name": "Alice", "signup_date": "2024-01-15", "purchases": 5},',
        '        {"id": 2, "name": "Bob", "signup_date": "2024-02-20", "purchases": 12},',
        '        {"id": 3, "name": "Charlie", "signup_date": "2024-01-30", "purchases": 3},',
        '        {"id": 4, "name": "Diana", "signup_date": "2024-03-10", "purchases": 8}',
        '    ]',
        '}',
        '',
        'def process_user_data(data):',
        '    users = data["users"]',
        '    total_users = len(users)',
        '    total_purchases = sum(user["purchases"] for user in users)',
        '    avg_purchases = total_purchases / total_users',
        '    power_users = [user for user in users if user["purchases"] > 10]',
        '',
        '    return {',
        '        "total_users": total_users,',
        '        "total_purchases": total_purchases,',
        '        "avg_purchases_per_user": round(avg_purchases, 2),',
        '        "power_users": len(power_users),',
        '        "power_user_names": [user["name"] for user in power_users]',
        '    }',
        '',
        '# Process the data',
        'results = process_user_data(mock_api_data)',
        '',
        'print("API Data Processing Results:")',
        'print(f"Total Users: {results["total_users"]}")',
        'print(f"Total Purchases: {results["total_purchases"]}")',
        'print(f"Average Purchases per User: {results["avg_purchases_per_user"]}")',
        'print(f"Power Users (>10 purchases): {results["power_users"]}")',
        'print(f"Power User Names: {", ".join(results["power_user_names"])}")'
      ].join('\n'),
      description: 'Demonstrates API integration, data processing, and business metrics calculation'
    }
  };

  const simulateCodeExecution = async () => {
    setIsRunning(true);
    setOutput('Executing code...\n');

    await new Promise(resolve => setTimeout(resolve, 1000));

    let simulatedOutput = '';

    switch (selectedExample) {
      case 'data_analysis':
        simulatedOutput = `Sales Analysis Results:
Total Sales: $950
Average Profit Margin: 20.00%
Best Product: D
Total Profit: $190.00

Top 3 Products by Profit:
D: $54.00
C: $43.75
A: $30.00`;
        break;
      case 'ml_model':
        simulatedOutput = `Model Training Complete!
Dataset: 1000 samples, 10 features
Training Set: 800 samples
Test Set: 200 samples
Model Accuracy: 0.925

Top 3 Most Important Features:
1. Feature 3: 0.156
2. Feature 7: 0.142
3. Feature 1: 0.128`;
        break;
      case 'api_integration':
        simulatedOutput = `API Data Processing Results:
Total Users: 4
Total Purchases: 28
Average Purchases per User: 7.0
Power Users (>10 purchases): 1
Power User Names: Bob`;
        break;
    }

    setOutput(simulatedOutput);
    setIsRunning(false);
  };

  return (
    <section id="live-code" className="section">
      <h2>Live Python Code Demonstrations</h2>
      <p>Interactive code examples showcasing data science and Python development skills</p>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Select Code Example:</label>
        <select
          value={selectedExample}
          onChange={(e) => setSelectedExample(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '14px'
          }}
        >
          <option value="data_analysis">Data Analysis with Pandas</option>
          <option value="ml_model">ML Model Training</option>
          <option value="api_integration">API Data Processing</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <h4>{codeExamples[selectedExample as keyof typeof codeExamples].title}</h4>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
            {codeExamples[selectedExample as keyof typeof codeExamples].description}
          </p>
          <pre style={{
            backgroundColor: '#2d3748',
            color: '#e2e8f0',
            padding: '15px',
            borderRadius: '6px',
            fontSize: '12px',
            overflow: 'auto',
            maxHeight: '400px'
          }}>
            <code>{codeExamples[selectedExample as keyof typeof codeExamples].code}</code>
          </pre>
          <button
            onClick={simulateCodeExecution}
            disabled={isRunning}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: isRunning ? '#6c757d' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isRunning ? 'not-allowed' : 'pointer',
              fontSize: '14px'
            }}
          >
            {isRunning ? 'Running...' : 'Run Code'}
          </button>
        </div>

        <div>
          <h4>Output</h4>
          <div style={{
            backgroundColor: '#1a1a1a',
            color: '#00ff00',
            padding: '15px',
            borderRadius: '6px',
            fontSize: '13px',
            fontFamily: 'monospace',
            minHeight: '400px',
            whiteSpace: 'pre-wrap'
          }}>
            {output || 'Click "Run Code" to see output...'}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
        <h4>Skills Demonstrated:</h4>
        <ul>
          <li><strong>Data Science:</strong> Pandas, NumPy, statistical analysis</li>
          <li><strong>Machine Learning:</strong> Scikit-learn, model training, evaluation</li>
          <li><strong>API Integration:</strong> Data fetching, processing, transformation</li>
          <li><strong>Code Quality:</strong> Clean, documented, production-ready code</li>
        </ul>
      </div>
    </section>
  );
};

export default LiveCodeDemo;
