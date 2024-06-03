import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { Fornecedor } from '../interfaces/Fornecedor';

interface FornecedorFormProps {
  initialValues?: Partial<Fornecedor>;
  onSave: (fornecedor: Omit<Fornecedor, 'id'>) => void;
  onCancel: () => void;
}

const FornecedorForm: React.FC<FornecedorFormProps> = ({ initialValues = {}, onSave, onCancel }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [initialValues, form]);

  const handleSave = () => {
    form
      .validateFields()
      .then(values => {
        onSave(values as Omit<Fornecedor, 'id'>);
        form.resetFields();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
    >
      <Form.Item name="empresa" label="Empresa" rules={[{ required: true, message: 'Por favor, insira o nome da empresa!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="cnpj" label="CNPJ" rules={[{ required: true, message: 'Por favor, insira o CNPJ!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="telefone" label="Telefone" rules={[{ required: true, message: 'Por favor, insira o telefone!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Por favor, insira o email!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="cep" label="CEP" rules={[{ required: true, message: 'Por favor, insira o CEP!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="cidade" label="Cidade" rules={[{ required: true, message: 'Por favor, insira a cidade!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="bairro" label="Bairro" rules={[{ required: true, message: 'Por favor, insira o bairro!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="logradouro" label="Logradouro" rules={[{ required: true, message: 'Por favor, insira o logradouro!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="site" label="Site" rules={[{ required: true, message: 'Por favor, insira o site!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="area_de_atuacao" label="Área de Atuação" rules={[{ required: true, message: 'Por favor, insira a área de atuação!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="produto_servico_oferecido" label="Produto/Serviço Oferecido" rules={[{ required: true, message: 'Por favor, insira o produto/serviço oferecido!' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleSave}>
          Salvar
        </Button>
        <Button onClick={onCancel} style={{ marginLeft: '8px' }}>
          Cancelar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FornecedorForm;
