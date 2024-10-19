
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Result.css'; 

const Result = () => {
    const location = useLocation();
    const { answers } = location.state || { answers: [] };

    const calculateRisk = () => {
        let score = 0;

        // les conditions pour qu'on s adapt avec le score since ai didnt work 
        if (answers[0] === "Yes") score += 2; 
        if (answers[1] === "Yes") score += 1; 
        if (answers[2] === "Yes") score += 1; 
        if (answers[3] === "Yes") score += 1; 
        if (answers[4] === "Yes") score += 1; 
        if (answers[5] === "Yes") score += 1; 
        if (answers[6] === "Yes") score += 1; 

        return score;
    };

    const riskScore = calculateRisk();

    return (
        <div className="result-container">
            <h1 className="result-title">Your Risk Assessment Result</h1>
            <p className={`risk-score ${riskScore > 2 ? 'high-risk' : 'low-risk'}`}>
                Your risk score is: {riskScore}
            </p>
            {riskScore > 2 ? (
                <p className="high-risk"> OW this is higher risk of breast cancer, Please consult a healthcare professional.</p>
            ) : (
                <p className="low-risk">YEY Your risk is low. However, regular check-ups are recommended.</p>
            )}
            <div className="button-container">
                <Link to="/" className="back-home-link">Back to Home</Link>
                <Link to="/contact-doctor" className="contact-doctor-link">Sign up</Link>
            </div>
        </div>
    );
};

export default Result;
