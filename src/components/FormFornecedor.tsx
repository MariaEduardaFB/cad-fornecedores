import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { Fornecedor } from '../interfaces/Fornecedor';
import '../assets/styles/FormFornecedor.css'


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
      className="form"
    >
      <Form.Item
  name="empresa"
  label={<span className="field-label">Empresa</span>}
  className="form-item"
  rules={[{ required: true, message: 'Por favor, insira o nome da empresa!' }]}
>
  <Input className="custom-input" />
</Form.Item>
<Form.Item
  name="cnpj"
  label={<span className="field-label">CNPJ</span>}
  className="form-item"
  rules={[{ required: true, message: 'Por favor, insira o CNPJ!' }]}
>
  <Input className="custom-input" />
</Form.Item>
<Form.Item
  name="telefone"
  label={<span className="field-label">Telefone</span>}
  className="form-item"
  rules={[{ required: true, message: 'Por favor, insira o telefone!' }]}
>
  <Input className="custom-input" />
</Form.Item>
<Form.Item
  name="email"
  label={<span className="field-label">Email</span>}
  className="form-item"
  rules={[{ required: true, message: 'Por favor, insira o email!' }]}
>
  <Input className="custom-input" />
</Form.Item>
<Form.Item
  name="cep"
  label={<span className="field-label">CEP</span>}
  className="form-item"
  rules={[{ required: true, message: 'Por favor, insira o CEP!' }]}
>
  <Input className="custom-input" />
</Form.Item>
<Form.Item
  name="cidade"
  label={<span className="field-label">Cidade</span>}
  className="form-item"
  rules={[{ required: true, message: 'Por favor, insira a cidade!' }]}
>
  <Input className="custom-input" />
</Form.Item>
<Form.Item
  name="bairro"
  label={<span className="field-label">Bairro</span>}
  className="form-item"
  rules={[{ required: true, message: 'Por favor, insira o bairro!' }]}
>
  <Input className="custom-input" />
</Form.Item>
<Form.Item
  name="logradouro"
  label={<span className="field-label">Logradouro</span>}
  className="form-item"
  rules={[{ required: true, message: 'Por favor, insira o logradouro!' }]}
>
  <Input className="custom-input" />
</Form.Item>
<Form.Item
  name="site"
  label={<span className="field-label">Site</span>}
  className="form-item"
  rules={[{ required: true, message: 'Por favor, insira o site!' }]}
>
  <Input className="custom-input" />
</Form.Item>
<Form.Item
  name="area_de_atuacao"
  label={<span className="field-label">Área de Atuação</span>}
  className="form-item"
  rules={[{ required: true, message: 'Por favor, insira a área de atuação!' }]}
>
  <Input className="custom-input" />
</Form.Item>
<Form.Item
  name="produto_servico_oferecido"
  label={<span className="field-label">Produto/Serviço Oferecido</span>}
  className="form-item"
  rules={[{ required: true, message: 'Por favor, insira o produto/serviço oferecido!' }]}
>
  <Input className="custom-input" />
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
