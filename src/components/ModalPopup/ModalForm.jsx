// ModalForm.js
import React, { useState } from 'react';

const ModalForm = ({ isOpen, onClose }) => {

  const [companyType, setCompanyType] = useState('');
  const [industry, setIndustry] = useState('');
  const [tone, setTone] = useState('');
  const [wordLimit, setWordLimit] = useState('');
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');

  const handleCompanyType = (e) => {
    setCompanyType(e.target.value);
  };

  const handleIndustry = (e) => {
    setIndustry(e.target.value);
  };

  const handleOptionChange3 = (e) => {
    setTone(e.target.value);
  };

  const handleOptionChange4 = (e) => {
    setWordLimit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("companyType", companyType);
    console.log("industry", industry);
    console.log("tone", tone);
    console.log("wordLimit", wordLimit);
    console.log("text", text);
    let data = {
      "url": text,
      "tone": tone,
      "word_limit": wordLimit
    }
    fetch("http://localhost:8000/api/v1/generate/email", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log('API response:', result);
        console.log('Output:', result['output'])        
        setOutput(result['output'])
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors
      });
    //onClose();
  };

  return isOpen ? (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-content">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            <label>
              Enter the text of your email here:
              <textarea rows="6" name="area" value={text} onChange={(e) => setText(e.target.value)} className="light-grey-input" />
            </label>
            <label>
              Company Type:
              <select
                value={companyType}
                onChange={handleCompanyType}
                className="light-grey-input"
              >
                <option value="B2C">B2C</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </label>           
            <label>
              Tone:
              <select
                value={tone}
                onChange={handleOptionChange3}
                className="light-grey-input"
              >
                <option value="Casual">Casual</option>
                <option value="Cute">Cute</option>
                <option value="Enthusiastic">Enthusiastic</option>
                <option value="Funny">Funny</option>
                <option value="Informational">Informational</option>
                <option value="Pirate-like">Pirate-like</option>
                <option value="Professional">Professional</option>
                <option value="Rhyming">Rhyming</option>
                <option value="Salesy">Salesy</option>
                <option value="Shakespearean">Shakespearean</option>
                <option value="Yoda">Yoda</option>
                <option value="Beat Poet">Beat Poet</option>
              </select>
            </label>
            <label>
              Word Limit:
              <select
                value={wordLimit}
                onChange={handleOptionChange4}
                className="light-grey-input"
              >
                <option value="">No Limit</option>
                <option value="option1">5</option>
                <option value="option2">10</option>
                <option value="option3">15</option>
                <option value="option4">20</option>
              </select>
            </label>
            <div className="center-button-container">
              <button className="orange-button" type="submit">
                Give me subject lines
              </button>
            </div>
          </form>         
        </div>
        <div>{output? <div>
          Output here:
              <textarea rows="6" name="area" value={output} className="light-grey-output" />
        </div>:<></>}</div>
      </div>
    </div>
  ) : null;
};

export default ModalForm;
