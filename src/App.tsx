import { useState } from 'react';
import { Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import FornecedorForm from './components/FormFornecedor';
import ModalComponent from './components/ModalComp';
import FornecedorList from './components/ListFornecedor';
import ViewFornecedorModal from './components/ModalView';
import EditFornecedorModal from './components/EditModal';
import DeleteFornecedorModal from './components/DeleteModal';
import { Fornecedor } from './interfaces/Fornecedor';
import './App.css';

function App() {
  const [visible, setVisible] = useState(false);
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [viewVisible, setViewVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [selectedFornecedor, setSelectedFornecedor] = useState<Fornecedor | null>(null);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const handleSaveFornecedor = (data: Omit<Fornecedor, 'id'>) => {
    setFornecedores([...fornecedores, { id: fornecedores.length + 1, ...data }]);
    setVisible(false);
  };

  const handleViewFornecedor = (fornecedor: Fornecedor) => {
    setSelectedFornecedor(fornecedor);
    setViewVisible(true);
  };

  const handleEditFornecedor = (fornecedor: Fornecedor) => {
    setSelectedFornecedor(fornecedor);
    setEditVisible(true);
  };

  const handleDeleteFornecedor = (fornecedor: Fornecedor) => {
    setSelectedFornecedor(fornecedor);
    setDeleteVisible(true);
  };

  const handleConfirmDelete = () => {
    if (selectedFornecedor) {
      setFornecedores(fornecedores.filter(f => f.id !== selectedFornecedor.id));
      setDeleteVisible(false);
    }
  };

  const handleSaveEdit = (data: Omit<Fornecedor, 'id'>) => {
    if (selectedFornecedor) {
      setFornecedores(
        fornecedores.map(f => (f.id === selectedFornecedor.id ? { ...selectedFornecedor, ...data } : f))
      );
      setEditVisible(false);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Cadastramento de Fornecedores</h1>
        <Button type="primary" 
          icon={<UserAddOutlined />} 
          onClick={handleOpenModal}
          style={{ backgroundColor: '#185612', borderColor: '#185612' }}>
          Cadastro de Fornecedor
        </Button>
        <ModalComponent visible={visible} onCancel={handleCloseModal}>
          <FornecedorForm onSave={handleSaveFornecedor} onCancel={handleCloseModal} />
        </ModalComponent>

        <div className="list-container">
          <FornecedorList
            fornecedores={fornecedores}
            onView={handleViewFornecedor}
            onEdit={handleEditFornecedor}
            onDelete={handleDeleteFornecedor}
          />
        </div>
      </div>

      {selectedFornecedor && (
        <>
          <ViewFornecedorModal
            visible={viewVisible}
            fornecedor={selectedFornecedor}
            onCLose={() => setViewVisible(false)}
          />

          <EditFornecedorModal
            visible={editVisible}
            fornecedor={selectedFornecedor}
            onSave={handleSaveEdit}
            onCancel={() => setEditVisible(false)} children={undefined}          />

          <DeleteFornecedorModal
            visible={deleteVisible}
            onDelete={handleConfirmDelete}
            onCancel={() => setDeleteVisible(false)}
          />
        </>
      )}
    </>
  );
}

export default App;
