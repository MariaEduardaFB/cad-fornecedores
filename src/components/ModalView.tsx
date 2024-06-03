import React from "react";
import ModalComponent from './ModalComp'
import { Fornecedor } from "../interfaces/Fornecedor";
import { Button } from "antd";

interface ModalFornecedorViewProps {
    visible: boolean
    fornecedor: Fornecedor
    onCLose: () => void;
}

const ViewModalForn: React.FC<ModalFornecedorViewProps> = ({ visible, fornecedor, onCLose }) => {
    return (
        <ModalComponent visible={visible} onCancel={onCLose}>
        <h3>Visualizar Fornecedor</h3>
        <p><strong>Empresa:</strong> {fornecedor.empresa}</p>
        <p><strong>CNPJ:</strong> {fornecedor.cnpj}</p>
        <p><strong>Telefone:</strong> {fornecedor.telefone}</p>
        <p><strong>Email:</strong> {fornecedor.email}</p>
        <p><strong>CEP:</strong> {fornecedor.cep}</p>
        <p><strong>Cidade:</strong> {fornecedor.cidade}</p>
        <p><strong>Bairro:</strong> {fornecedor.bairro}</p>
        <p><strong>Logradouro:</strong> {fornecedor.logradouro}</p>
        <p><strong>Site:</strong> {fornecedor.site}</p>
        <p><strong>Área de Atuação:</strong> {fornecedor.area_de_atuacao}</p>
        <p><strong>Produto/Serviço Oferecido:</strong> {fornecedor.produto_servico_oferecido}</p>
        <Button onClick={onCLose}>Fechar</Button>
      </ModalComponent >
    )
}

export default ViewModalForn