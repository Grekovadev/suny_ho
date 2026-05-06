
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';


export const BackArrow = () => {
  return (
    <Link
      to="/home"
      style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        textDecoration: 'none',
        color: '#333',
        fontSize: '24px',
        fontWeight: '500'
      }}
    >
      <ArrowLeftOutlined style={{ fontSize: '20px' }} />
      Назад
    </Link>
  );
};