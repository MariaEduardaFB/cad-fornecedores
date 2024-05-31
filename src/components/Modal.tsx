import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './Modal.css'

interface ModalProps {
  visible: boolean 
  onCancel: () => void 
}

const ModalComponent: React.FC<ModalProps> = ({ visible, onCancel }) => {
  
  return (
    <Modal className='modal-page'
      visible={visible}
      onCancel={onCancel}
      footer={null} 
    > 
    <div >
        
      <h4>Formulário de Cadastro de Fornecedores</h4>

      <div className='form-right-side'>
      <label form='nome'>Razão Social </label>
      <input type='text' id="nome" name='nome' required></input>
      <label form='nome'>Nome do Fornecedor </label>
      <input type='text' id="nome" name='nome' required></input>
      <label form='email'>Email 1</label>
      <input type="email" id='email' name='email' required></input>
      <label form='email'>Email 2</label>
      <input type="email" id='email' name='email' required></input>
      <label form='cep'>CEP</label>
      <input type='int' id='cep' name='cep' required></input>

      </div>
      </div>
    </Modal>
  )
}

export default ModalComponent
