import React from 'react';
import { Modal } from 'antd';
import '../assets/styles/ModalComp.css';

interface ModalComponentProps {
  visible: boolean;
  onCancel: () => void;
  children: React.ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ visible, onCancel, children }) => {
  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
      className="custom-modal"
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
