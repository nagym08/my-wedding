import React from 'react';
import { Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

function GuestEntry({ name, onEdit, onDelete }) {
  return (
    <div key={name} className="guest-entry width-100" style={{ marginBottom: '10px' }}>
      <p style={{ marginLeft: '15px' }}>{name}</p>
      <div style={{ marginRight: '15px' }}>
        <Button
          type="primary"
          htmlType="button"
          ghost
          icon={<EditOutlined />}
          shape="circle"
          onClick={onEdit}
          style={{ marginRight: '10px' }}
        ></Button>
        <Button
          type="primary"
          htmlType="button"
          color="danger"
          ghost
          icon={<DeleteOutlined style={{ color: 'red' }} />}
          shape="circle"
          onClick={onDelete}
        ></Button>
      </div>
    </div>
  );
}

export default GuestEntry;
