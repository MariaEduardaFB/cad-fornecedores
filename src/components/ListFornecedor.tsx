import React from 'react'
import { Fornecedor } from '../interfaces/Fornecedor'

import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'; // Importar ícones


interface FornecedorListProps {
  fornecedores: Fornecedor[];
  onView: (fornecedor: Fornecedor) => void;
  onEdit: (fornecedor: Fornecedor) => void;
  onDelete: (fornecedor: Fornecedor) => void;
}

const FornecedorList: React.FC<FornecedorListProps> = ({ fornecedores, onView, onEdit, onDelete }) => {
  return (
    <div className='list'>
      <h3>Fornecedores Cadastrados</h3>

      {fornecedores.map(fornecedor => (
        <div key={fornecedor.id} className="fornecedor-item">
          <span>{fornecedor.empresa}</span>
          <div>
            <EyeOutlined onClick={() => onView(fornecedor)} style={{ marginRight: '50px', color: '#1890ff', cursor: 'pointer' }} />
            <EditOutlined onClick={() => onEdit(fornecedor)} style={{ marginRight: '50px', color: '#F2E917', cursor: 'pointer' }} />
            <DeleteOutlined onClick={() => onDelete(fornecedor)} style={{ color: '#f5222d', cursor: 'pointer' }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default FornecedorList
