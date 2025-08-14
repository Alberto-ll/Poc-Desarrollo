const express = require('express');
const os = require('os');
const path = require('path');
const fs = require('fs');

const app = express();

// Función para obtener la IP de la red LAN
function getNetworkIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const interface of interfaces[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (interface.family === 'IPv4' && !interface.internal) {
        return interface.address;
      }
    }
  }
  return 'localhost'; // fallback
}

// Middleware para servir index.html con la IP dinámica
app.get('/', (req, res) => {
  const networkIP = getNetworkIP();
  const indexPath = path.join(__dirname, 'public', 'index.html');
  
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error loading page');
      return;
    }
    
    // Reemplazar localhost con la IP de la red
    const modifiedHTML = data.replace(
      /ws:\/\/localhost:3001/g, 
      `ws://${networkIP}:3001`
    );
    
    res.send(modifiedHTML);
  });
});

// Servir otros archivos estáticos normalmente
app.use(express.static('public'));

const networkIP = getNetworkIP();

app.listen(3000, '0.0.0.0', () => {
  console.log('🌐 Frontend corriendo en:');
  console.log(`   Local:   http://localhost:3000`);
  console.log(`   Red LAN: http://${networkIP}:3000`);
  console.log(`🔌 WebSocket conectando a: ws://${networkIP}:3002`);
});

