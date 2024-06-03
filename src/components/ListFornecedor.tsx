import React from 'react'
import { Fornecedor } from '../interfaces/Fornecedor'
import { Button } from 'antd'

interface FornecedorListProps{
    fornecedores: Fornecedor[];
    onView: (fornecedor: Fornecedor) => void
    onEdit: (fornecedor: Fornecedor) => void
    onDelete: (fornecedor: Fornecedor) => void
}

const FornecedorList: React.FC<FornecedorListProps> = ({ fornecedores, onView, onEdit, onDelete}) => {
    

    return (
        <div className='list'>
            <h3>Fornecedores Cadastrados</h3>
      {fornecedores.map(fornecedor => (
        <div key={fornecedor.id} className="fornecedor-item">
          <span>{fornecedor.empresa}</span>
          <Button onClick={() => onView(fornecedor)}>Visualizar</Button>
          <Button onClick={() => onEdit(fornecedor)}>Editar</Button>
          <Button onClick={() => onDelete(fornecedor)}>Excluir</Button>
        </div>
      ))}
        </div>
    )
}

export default FornecedorList