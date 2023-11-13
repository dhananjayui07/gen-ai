// App.js
import React, { useState } from 'react';
import ModalForm from './ModalForm.jsx';
import "./ModalForm.css";

function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default ModalPage;