import React, { useState } from "react";
import "./FAQSection.css";

const FAQSection = () => {
  // FAQ items data with questions and answers
  const faqItems = [
    {
      id: 1,
      question: "What is insurance service?",
      answer: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas dynamically innovate resource."
    },
    {
      id: 2,
      question: "What is the experience of our team members?",
      answer: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas dynamically innovate resource."
    },
    {
      id: 3,
      question: "How many services do we provide?",
      answer: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas dynamically innovate resource."
    },
    {
      id: 4,
      question: "How many services do we offer?",
      answer: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas dynamically innovate resource."
    },
    {
      id: 5,
      question: "What does insurance entail?",
      answer: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas dynamically innovate resource."
    },
    {
      id: 6,
      question: "What is the experience of our team members?",
      answer: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas dynamically innovate resource."
    },
    {
      id: 7,
      question: "Why are we the best company?",
      answer: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas dynamically innovate resource."
    },
    {
      id: 8,
      question: "Why are we the best company?",
      answer: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas dynamically innovate resource."
    }
  ];

  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState({
    1: true,  // First item is expanded by default
    5: true   // Second item is expanded by default
  });

  // Toggle expanded state for an item
  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="faq-section">
       <span className="shape one"></span>
       <span className="shape two"></span>
      <div className="container">
        <div className="faq-header">
          <h2 className="section-title">YOUR ANSWER</h2>
          <p className="section-description">
            Frequently asked questions & searching answer.
          </p>
        </div>

        <div className="faq-columns">
          <div className="faq-column">
            {faqItems.slice(0, 4).map((item) => (
              <div className="faq-item" key={item.id}>
                <div 
                  className="faq-question" 
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="question-icon">
                    <span className="question-mark">?</span>
                  </div>
                  <h3>{item.question}</h3>
                  <span className={`toggle-icon ${expandedItems[item.id] ? 'minus' : 'plus'}`}>
                    {expandedItems[item.id] ? '−' : '+'}
                  </span>
                </div>
                {expandedItems[item.id] && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="faq-column">
            {faqItems.slice(4, 8).map((item) => (
              <div className="faq-item" key={item.id}>
                <div 
                  className="faq-question" 
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="question-icon">
                    <span className="question-mark">?</span>
                  </div>
                  <h3>{item.question}</h3>
                  <span className={`toggle-icon ${expandedItems[item.id] ? 'minus' : 'plus'}`}>
                    {expandedItems[item.id] ? '−' : '+'}
                  </span>
                </div>
                {expandedItems[item.id] && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 