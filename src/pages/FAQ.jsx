import React from 'react';
import '../App.css'
import MenuPanelComponent from '../components/MenuPanelComponent';

function FAQ() {

  const faqData = [
    { question: 'What is this?', answer: 'This is a chrome extension that monitors your activity and can restrict you from using certain websites.' },
    { question: 'Question 2', answer: 'Answer 2' },
    { question: 'Question 3', answer: 'Answer 3' },
    { question: 'Question 4', answer: 'Answer 4' },
    { question: 'Question 5', answer: 'Answer 5' },
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
        FAQ
      </div>
      <div className="faq-content">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            {item.question}
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
      <div className="menu-panel">
        <MenuPanelComponent
          showButton1={true}
          showButton2={true}
          showButton3={true}
          showButton4={true}
          showButton5={false}
        />
      </div>
    </div>
  );
}

export default FAQ;
