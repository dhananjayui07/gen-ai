import React, { useState } from 'react';
import './sticky.css'; // Replace with the path to your CSS file

const StickyDesign = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleForm = () => {
        setFormVisible(!formVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the form from submitting in the default way
        // You can handle the form submission logic here
        console.log('Form submitted with input value: ' + inputValue);
    };

    return (
        <div>
            <div
                className="sticky-button"
                onClick={toggleForm}
            >
                Chat
            </div>

            {formVisible && (
                <div className="sticky-form">
                    <div className="yellow-form">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="inputField">Enter something:</label>
                            <input
                                type="text"
                                id="inputField"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type here"
                            />
                           <button type="submit" className="medium-button">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StickyDesign;
