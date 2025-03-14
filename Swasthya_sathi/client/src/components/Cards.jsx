import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ title, description, link, icon }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px',
        margin: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
        cursor: 'pointer',
        ':hover': {
          transform: 'translateY(-5px)'
        }
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{icon}</div>
        <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>{title}</h3>
        <p style={{ color: '#666' }}>{description}</p>
      </div>
    </Link>
  );
};

export default Cards; 