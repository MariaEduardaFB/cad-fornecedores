import React from 'react'
import { Modal } from 'antd'

interface ModalComponentProps {
    visible: boolean;
    onCancel: () => void;
    children: React.ReactNode
}

const ModalComponent: React.FC<ModalComponentProps> = ({ visible, onCancel, children}) => {
    return (
        <Modal visible={visible} onCancel={onCancel} footer={null}>
            {children}
        </Modal>

    )
}

export default ModalComponent