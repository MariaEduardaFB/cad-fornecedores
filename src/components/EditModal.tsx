import React from "react"
import ModalComponent from './ModalComp'
import FornecedorForm from "./FormFornecedor"
import { Fornecedor } from '../interfaces/Fornecedor'

interface EditFornecedorModalProps {
    visible: boolean
    fornecedor: Fornecedor
    onSave: (fornecedor: Omit<Fornecedor, 'id'>) => void
    onCancel: () => void
    children: React.ReactNode;
}

const EditFornecedorModal: React.FC<EditFornecedorModalProps> = ({ visible, fornecedor, onSave, onCancel }) => {
    return (
        <ModalComponent
            visible={visible}
            onCancel={onCancel}
        >

            <h3>Editar Fornecedor</h3>
            <FornecedorForm initialValues={fornecedor} onSave={onSave} onCancel={onCancel}></FornecedorForm>

        </ModalComponent>
    )
}

export default EditFornecedorModal