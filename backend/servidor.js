const websocket = require('ws');
const server = new websocket.Server({ port: 3000, host: '0.0.0.0' });

// Asignar un ID único a cada conexión
let nextId = 1;

server.on('connection', (socket) => {
    // Obtener la IP y el último segmento
    const ip = socket._socket.remoteAddress;
    const lastSegment = ip.split('.').pop();
    socket.userIpSegment = lastSegment;

    console.log('usuario conectado desde IP:', ip);

    socket.on('message', (data) => {
        console.log('mensaje recibido:', data.toString());
        server.clients.forEach((client) => {
            // Enviar el mensaje a todos los clientes excepto al que lo envió
            if (
                client !== socket &&
                client.readyState === websocket.OPEN
            ) {
                client.send(`Usuario .${socket.userIpSegment}: ${data}`);
            }
        });
    });
});
