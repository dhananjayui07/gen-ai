// App.js
import React, { useState } from 'react';
import ModalForm from './ModalForm';
import "./ModalForm.module.scss";

const ModalPage: React.FC = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className="App">
      {/* <button onClick={openModal}>Open Modal</button> */}
      <ModalForm />
    </div>
  );
}

export default ModalPage;