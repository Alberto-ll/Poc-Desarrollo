// QRCodeComponent.jsx
import React from 'react';
import { Box, Text } from 'spectacle';

// Componente para generar QR
const QRCodeComponent = ({ url, size = 250 }) => {
  // Generar URL del código QR usando un servicio externo (qrcode.js alternativo)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`;
  
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" margin="20px 0">
      <img 
        src={qrCodeUrl} 
        alt={`QR Code para ${url}`}
        style={{ 
          width: `${size}px`, 
          height: `${size}px`,
          border: '8px solid white',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
        }} 
      />
      <Text 
        fontSize="1.4rem" 
        color="tertiary" 
        margin="15px 0 0 0"
        textAlign="center"
        style={{ 
          backgroundColor: 'rgba(255,255,255,0.1)', 
          padding: '8px 12px',
          borderRadius: '6px'
        }}
      >
        Escanee para acceder
      </Text>
    </Box>
  );
};

export default QRCodeComponent;