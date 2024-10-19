
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css'; 

const questions = [
    {
        question: "Do you have a family history of breast cancer?",
        options: ["Yes", "No"],
    },
    {
        question: "Have you had your first period before age 12?",
        options: ["Yes", "No"],
    },
    {
        question: "Have you had children after age 30?",
        options: ["Yes", "No"],
    },
    {
        question: "Have you ever had a biopsy for breast issues?",
        options: ["Yes", "No"],
    },
    {
        question: "Do you smoke or have you ever smoked?",
        options: ["Yes", "No"],
    },
    {
        question: "Have you been exposed to radiation in your chest area?",
        options: ["Yes", "No"],
    },
    {
        question: "Are you overweight or obese?",
        options: ["Yes", "No"],
    },
];

const Quiz = () => {
    const [answers, setAnswers] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e, index) => {
        const newAnswers = [...answers];
        newAnswers[index] = e.target.value;
        setAnswers(newAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/result', { state: { answers } });
    };
    
    return (
        <div className="quiz-container">
            <h1 className="quiz-title">Breast Cancer Risk Assessment Quiz</h1>
            <form onSubmit={handleSubmit}>
                {questions.map((q, index) => (
                    <div key={index} className="quiz-question-box">
                        <h3 className="quiz-question">{q.question}</h3>
                        {q.options.map((option, i) => (
                            <label key={i} className="quiz-option">
                                <input
                                    type="radio"
                                    name={`question${index}`}
                                    value={option}
                                    onChange={(e) => handleChange(e, index)}
                                    required
                                />
                                <span className="quiz-option-label">{option}</span>
                            </label>
                        ))}
                    </div>
                ))}
                <div className="submit-container">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Quiz;
