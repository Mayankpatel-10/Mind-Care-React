// src/components/Assessment.js
import React, { useState } from 'react';

const Assessment = () => {
  const [activeTab, setActiveTab] = useState('anxiety');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const assessments = {
    anxiety: {
      title: 'Anxiety Assessment',
      questions: [
        {
          text: 'How often do you feel nervous, anxious, or on edge?',
          options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day']
        },
        {
          text: 'How often do you not being able to stop or control worrying?',
          options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day']
        },
        {
          text: 'How often do you worry too much about different things?',
          options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day']
        },
        {
          text: 'How often do you have trouble relaxing?',
          options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day']
        },
        {
          text: 'How often are you so restless that it is hard to sit still?',
          options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day']
        }
      ]
    },
    depression: {
      title: 'Depression Assessment',
      questions: [
        {
          text: 'How often do you feel little interest or pleasure in doing things?',
          options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day']
        },
        {
          text: 'How often do you feel down, depressed, or hopeless?',
          options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day']
        },
        {
          text: 'How often do you have trouble falling or staying asleep, or sleeping too much?',
          options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day']
        },
        {
          text: 'How often do you feel tired or have little energy?',
          options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day']
        },
        {
          text: 'How often is your appetite poor or do you overeat?',
          options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day']
        }
      ]
    },
    stress: {
      title: 'Stress Assessment',
      questions: [
        {
          text: 'How often do you feel that you are unable to control the important things in your life?',
          options: ['Never', 'Almost never', 'Sometimes', 'Fairly often', 'Very often']
        },
        {
          text: 'How often do you feel confident about your ability to handle your personal problems?',
          options: ['Never', 'Almost never', 'Sometimes', 'Fairly often', 'Very often']
        },
        {
          text: 'How often do you feel that things are going your way?',
          options: ['Never', 'Almost never', 'Sometimes', 'Fairly often', 'Very often']
        },
        {
          text: 'How often do you feel difficulties are piling up so high that you cannot overcome them?',
          options: ['Never', 'Almost never', 'Sometimes', 'Fairly often', 'Very often']
        },
        {
          text: 'How often do you feel that you cannot cope with all the things that you have to do?',
          options: ['Never', 'Almost never', 'Sometimes', 'Fairly often', 'Very often']
        }
      ]
    }
  };

  const handleAnswer = (questionIndex, answer) => {
    const newAnswers = {
      ...answers,
      [questionIndex]: answer
    };
    setAnswers(newAnswers);
    
    if (questionIndex < assessments[activeTab].questions.length - 1) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const scores = {
      anxiety: { min: 0, max: 20, score: 0 },
      depression: { min: 0, max: 20, score: 0 },
      stress: { min: 0, max: 25, score: 0 }
    };
    
    Object.values(answers).forEach((answer, index) => {
      if (activeTab === 'anxiety' || activeTab === 'depression') {
        scores[activeTab].score += ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'].indexOf(answer);
      } else {
        scores[activeTab].score += ['Never', 'Almost never', 'Sometimes', 'Fairly often', 'Very often'].indexOf(answer);
      }
    });
    
    return scores[activeTab];
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
    resetAssessment();
  };

  const currentAssessment = assessments[activeTab];

  return (
    <section className="card assessment-section">
      <h2>Mental Health Assessments</h2>
      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'anxiety' ? 'active' : ''}`} 
          onClick={() => changeTab('anxiety')}
        >
          Anxiety Assessment
        </button>
        <button 
          className={`tab-btn ${activeTab === 'depression' ? 'active' : ''}`} 
          onClick={() => changeTab('depression')}
        >
          Depression Assessment
        </button>
        <button 
          className={`tab-btn ${activeTab === 'stress' ? 'active' : ''}`} 
          onClick={() => changeTab('stress')}
        >
          Stress Assessment
        </button>
      </div>
      
      <div className="assessment-content">
        {!showResults ? (
          currentAssessment.questions.length > 0 && (
            <div className="question">
              <h3 className="question-text">{currentAssessment.questions[currentQuestion].text}</h3>
              <div className="options">
                {currentAssessment.questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="option">
                    <input
                      type="radio"
                      id={`option-${index}`}
                      name="assessment-option"
                      onChange={() => handleAnswer(currentQuestion, option)}
                    />
                    <label htmlFor={`option-${index}`}>{option}</label>
                  </div>
                ))}
              </div>
            </div>
          )
        ) : (
          <div className="results">
            <h3>Assessment Results</h3>
            <p>Based on your answers, your {currentAssessment.title.toLowerCase()} score is: {calculateScore().score}/{calculateScore().max}</p>
            <p>
              {calculateScore().score <= calculateScore().max * 0.3 
                ? 'Your results suggest minimal symptoms. Keep practicing healthy habits!'
                : calculateScore().score <= calculateScore().max * 0.6
                ? 'Your results suggest mild to moderate symptoms. Consider speaking with a mental health professional.'
                : 'Your results suggest significant symptoms. We recommend consulting with a mental health professional for support.'
              }
            </p>
            <button onClick={resetAssessment} className="login-btn">Take Again</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Assessment;