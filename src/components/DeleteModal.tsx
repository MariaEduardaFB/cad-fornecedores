import React from 'react'
import ModalComponent from './ModalComp'
import { Button } from 'antd'

interface DeleteFornecedorModalProps {
    visible: boolean
    onDelete: () => void
    onCancel: () => void
}

const DeleteFornecedorModal: React.FC<DeleteFornecedorModalProps> = ({ visible, onDelete, onCancel }) => {
    return (
        <ModalComponent visible={visible} onCancel={onCancel}>
            <h3>Tem certeza que deseja excluir esse fornecedor?</h3>
            <Button type="primary" danger onClick={onDelete}>
                Excluir
            </Button>
            <Button onClick={onCancel} style={{ marginLeft: '8px' }}>
                Cancelar
            </Button>
        </ModalComponent>
    )
}

export default DeleteFornecedorModal