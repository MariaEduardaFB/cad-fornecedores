
import { UserAddOutlined } from '@ant-design/icons';
import React, {useState} from 'react';
import ModalComponent from './components/Modal';
import './App.css'
import { Button } from "antd";

function App() {
  const [visible, setVisible] = useState(false)

  const handleOpenModal = () => {
    setVisible(true)
  }
  const handleCloseModal = () => {
    setVisible(false)
  }

  return (
    <>
      <div className='container'>
        <h1>Cadastramento de Fornecedores</h1>
        <Button type='primary' icon ={<UserAddOutlined />} onClick={handleOpenModal}>Cadastro de Fornecedor</Button>
        <ModalComponent visible={visible} onCancel = {handleCloseModal}/>

        <div className='list'>
          <h3>Fornecedores Cadastrados</h3>
          <h4>Vizualizar</h4>
          <h4>Editar</h4>
          <h4>Excluir</h4>
        </div>

        </div>

    </>
  )
}

export default App
