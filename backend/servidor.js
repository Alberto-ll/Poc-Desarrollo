const websocket = require('ws');
const server = new websocket.Server({ port: 3001, host: '0.0.0.0' });


server.on('connection', (socket) => {
    // Obtener la IP y el último segmento
    const ip = socket._socket.remoteAddress;
    const lastSegment = ip.split('.').pop();
    socket.userIpSegment = lastSegment;

    console.log('usuario conectado desde IP:', ip);

    // Recibir mensaje
    socket.on('message', (data) => {
        console.log('mensaje recibido:', data.toString());
        server.clients.forEach((client) => {
            // Enviar el mensaje a todos los clientes excepto al que lo envió
            if (
                client !== socket &&
                client.readyState === websocket.OPEN
            ) {
                // Envia mensaje a cliente
                client.send(`Usuario .${socket.userIpSegment}: ${data}`);
            }
        });
    });
});

console.log('🚀 Servidor WebSocket ejecutándose en puerto 3001');
