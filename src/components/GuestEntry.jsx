import React from 'react';
import { Button, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

function GuestEntry({ name, onEdit, onDelete }) {
  return (
    <div key={name} className="guest-entry width-100" style={{ marginBottom: '10px' }}>
      <p style={{ marginLeft: '15px' }}>{name}</p>
      <div style={{ marginRight: '15px' }}>
        <Tooltip title="Szerkesztés">
          <Button
            type="primary"
            htmlType="button"
            ghost
            icon={<EditOutlined />}
            shape="circle"
            onClick={onEdit}
            style={{ marginRight: '10px' }}
          ></Button>
        </Tooltip>
        <Tooltip title="Törlés">
          <Button
            type="primary"
            htmlType="button"
            color="danger"
            ghost
            icon={<DeleteOutlined style={{ color: 'red' }} />}
            shape="circle"
            onClick={onDelete}
          ></Button>
        </Tooltip>
      </div>
    </div>
  );
}

export default GuestEntry;
