import React from 'react';
import {
  Deck,
  Slide,
  Heading,
  Text,
  Image,
  FlexBox,
  Box,
  UnorderedList,
  ListItem,
  Appear,
  CodePane
} from 'spectacle';

// Import images
import imagen1 from './assets/imagen.png';
import imagen2 from './assets/imagen1.png';
import imagen3 from './assets/imagen2.png';
import imagen4 from './assets/imagen3.png';
import imagen5 from './assets/imagen4.png';

// CONFIGURACIÓN GLOBAL - CAMBIA ESTOS VALORES SEGÚN TU RED
const APP_CONFIG = {
  serverIp: "192.168.100.9",  // Cambia por la IP de tu dispositivo
  serverPort: "3000",
  websocketPort: "3001"
};

const APP_URL = `http://${APP_CONFIG.serverIp}:${APP_CONFIG.serverPort}`;
const WS_URL = `ws://${APP_CONFIG.serverIp}:${APP_CONFIG.websocketPort}`;

// Componente QR Code
const QRCodeComponent = ({ url, size = 250 }: { url: string; size?: number }) => {
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
      <Text 
        fontSize="1.0rem" 
        color="secondary" 
        margin="10px 0 0 0"
        textAlign="center"
        fontFamily="monospace"
      >
      </Text>
    </Box>
  );
};

// Definición de tipos para el tema
interface Theme {
  fonts: {
    header: string;
    text: string;
  };
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
    dark: string;
  };
  fontSizes: {
    h1: string;
    h2: string;
    h3: string;
    text: string;
    small: string;
  };
  space: number[];
}

// Tema optimizado
const theme: Theme = {
  fonts: {
    header: '"Helvetica Neue", Arial, sans-serif',
    text: '"Helvetica Neue", Arial, sans-serif'
  },
  colors: {
    primary: '#ffffff',
    secondary: '#a5d8ff',
    tertiary: '#e7f5ff',
    accent: '#4dabf7',
    dark: '#1a1a1a'
  },
  fontSizes: {
    h1: '3.8rem',
    h2: '3.2rem',
    h3: '2.6rem',
    text: '2.2rem',
    small: '1.8rem'
  },
  space: [0, 10, 15, 20, 30, 40]
};

// Props para SlideWithBackground
interface SlideWithBackgroundProps {
  children: React.ReactNode;
  backgroundImage: string;
  overlayOpacity?: number;
  contentPadding?: string;
}

// Componente SlideWithBackground
const SlideWithBackground: React.FC<SlideWithBackgroundProps> = ({ 
  children, 
  backgroundImage, 
  overlayOpacity = 0.7,
  contentPadding = '20px 5%'
}) => {
  return (
    <Slide 
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundColor="#1864ab"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor={`rgba(0, 50, 100, ${overlayOpacity})`}
        style={{
          backdropFilter: 'blur(2px)'
        }}
      />
      <div style={{
        position: 'relative',
        height: '100%',
        padding: contentPadding,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
        overflow: 'auto'
      }}>
        {children}
      </div>
    </Slide>
  );
};

// Componente principal
const App: React.FC = () => {
  return (
    <Deck 
      theme={{
        colors: theme.colors,
        fonts: theme.fonts,
        fontSizes: theme.fontSizes,
        space: theme.space
      }}
    >
      {/* Portada */}
      <SlideWithBackground backgroundImage={imagen4} overlayOpacity={0.8} contentPadding="5%">
        <Heading fontSize={theme.fontSizes.h1} color="primary" textAlign="center" margin="0 0 30px 0">
          ¿Qué son los WebSockets?
        </Heading>
        <Text fontSize={theme.fontSizes.h3} color="tertiary" textAlign="center" margin="30px 0">
          Es un protocolo de comunicación que permite la transmisión bidireccional de datos entre un cliente y un servidor en tiempo real.
        </Text>
      </SlideWithBackground>

      {/* Antes de los WebSockets */}
      <SlideWithBackground backgroundImage={imagen4} overlayOpacity={0.75}>
        <Heading fontSize={theme.fontSizes.h2} color="primary" textAlign="center" margin="0 0 40px 0">
          Antes de los WebSockets
        </Heading>
        <Appear>
          <Text fontSize={theme.fontSizes.h3} color="tertiary" textAlign="center" margin="30px 0">
            Las aplicaciones realizaban múltiples peticiones HTTP
          </Text>
        </Appear>
        <Appear>
          <Box 
            width="90%" 
            height="350px"
            margin="30px auto 0"
            backgroundColor="rgba(255,255,255,0.1)"
            borderRadius="16px"
            padding="15px"
          >
            <Image 
              src={imagen1} 
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))'
              }}
            />
          </Box>
        </Appear>
      </SlideWithBackground>

      {/* Con WebSockets */}
      <SlideWithBackground backgroundImage={imagen4} overlayOpacity={0.75}>
        <Heading fontSize={theme.fontSizes.h2} color="primary" textAlign="center" margin="0 0 40px 0">
          Con WebSockets
        </Heading>
        <Appear>
          <Text fontSize={theme.fontSizes.h3} color="tertiary" textAlign="center" margin="30px 0">
            Se establece una conexión persistente que permite la comunicación en tiempo real.
            </Text>
        </Appear>
        <Appear>
          <Box 
            width="90%" 
            height="350px" 
            margin="30px auto 0"
            backgroundColor="rgba(255,255,255,0.1)"
            borderRadius="16px"
            padding="15px"
          >
            <Image 
              src={imagen2} 
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))'
              }}
            />
          </Box>
        </Appear>
      </SlideWithBackground>

      {/* ¿Para qué son utilizados? */}
      <SlideWithBackground backgroundImage={imagen4} overlayOpacity={0.75} contentPadding="5% 8%">
        <Heading fontSize={theme.fontSizes.h2} color="primary" textAlign="center" margin="0 0 40px 0">
          ¿Para qué son utilizados?
        </Heading>
        <UnorderedList 
          fontSize="2.4rem"
          color="tertiary" 
          textAlign="left" 
          width="100%" 
          margin="0"
          style={{ listStyleType: 'none', paddingLeft: '0' }}
        >
          <Appear>
            <ListItem margin="20px 0" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2.2rem', marginRight: '15px', minWidth: '40px' }}>💬</span>
              <div>
                <Text fontSize="2.4rem" margin="0 0 5px 0" color="#a5d8ff" fontWeight="bold">Chats en tiempo real</Text>
                <Text fontSize="2.0rem" margin="0" opacity={0.9}>WhatsApp, Slack, Discord</Text>
              </div>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="20px 0" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2.2rem', marginRight: '15px', minWidth: '40px' }}>🎮</span>
              <div>
                <Text fontSize="2.4rem" margin="0 0 5px 0" color="#a5d8ff" fontWeight="bold">Juegos multijugador</Text>
                <Text fontSize="2.0rem" margin="0" opacity={0.9}>Juegos en línea con interacción en tiempo real</Text>
              </div>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="20px 0" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2.2rem', marginRight: '15px', minWidth: '40px' }}>📈</span>
              <div>
                <Text fontSize="2.4rem" margin="0 0 5px 0" color="#a5d8ff" fontWeight="bold">Trading y finanzas</Text>
                <Text fontSize="2.0rem" margin="0" opacity={0.9}>Actualizaciones de mercado al instante</Text>
              </div>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="20px 0" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2.2rem', marginRight: '15px', minWidth: '40px' }}>📝</span>
              <div>
                <Text fontSize="2.4rem" margin="0 0 5px 0" color="#a5d8ff" fontWeight="bold">Colaboración en documentos</Text>
                <Text fontSize="2.0rem" margin="0" opacity={0.9}>Edición simultánea como en Google Docs</Text>
              </div>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="20px 0" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2.2rem', marginRight: '15px', minWidth: '40px' }}>🔔</span>
              <div>
                <Text fontSize="2.4rem" margin="0 0 5px 0" color="#a5d8ff" fontWeight="bold">Notificaciones push</Text>
                <Text fontSize="2.0rem" margin="0" opacity={0.9}>Alertas instantáneas sin refrescar</Text>
              </div>
            </ListItem>
          </Appear>
        </UnorderedList>
      </SlideWithBackground>

      {/* WebRTC */}
      <SlideWithBackground backgroundImage={imagen5} overlayOpacity={0.8} contentPadding="5%">
        <Heading fontSize={theme.fontSizes.h1} color="primary" textAlign="center" margin="0 0 30px 0">
          ¿Qué es WebRTC?
        </Heading>
        <Text fontSize={theme.fontSizes.h3} color="tertiary" textAlign="center" margin="30px 0">
          Es una tecnología y conjunto de protocolos que permite la comunicación en tiempo real directamente entre navegadores o aplicaciones, sin necesidad de an servidor intermedio para la transmisión de datos.
        </Text>
      </SlideWithBackground>

      {/* Desafíos de WebRTC */}
      <SlideWithBackground backgroundImage={imagen5} overlayOpacity={0.75} contentPadding="5% 8%">
        <Heading fontSize={theme.fontSizes.h2} color="primary" textAlign="center" margin="0 0 40px 0">
          Desafíos de WebRTC
        </Heading>
        <UnorderedList 
          fontSize="2.4rem" 
          color="tertiary" 
          textAlign="left" 
          width="100%" 
          margin="0"
          style={{ listStyleType: 'none', paddingLeft: '0' }}
        >
          <Appear>
            <ListItem margin="20px 0" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2.2rem', marginRight: '15px', minWidth: '40px' }}>🔗</span>
              <div>
                <Text fontSize="2.4rem" margin="0 0 5px 0" color="#a5d8ff" fontWeight="bold">Servidor de señalización</Text>
                <Text fontSize="2.0rem" margin="0" opacity={0.9}>Requiere de un servidor para establecer la conexión inicial entre los pares</Text>
              </div>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="20px 0" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2.2rem', marginRight: '15px', minWidth: '40px' }}>🔥</span>
              <div>
                <Text fontSize="2.4rem" margin="0 0 5px 0" color="#a5d8ff" fontWeight="bold">Problemas con Firewalls</Text>
                <Text fontSize="2.0rem" margin="0" opacity={0.9}>Complican la conexión directa entre los pares</Text>
              </div>
            </ListItem>
          </Appear>
        </UnorderedList>
        <Appear>
          <Box 
            width="90%" 
            height="280px"
            margin="30px auto 0"
            backgroundColor="rgba(255,255,255,0.1)"
            borderRadius="16px"
            padding="15px"
          >
            <Image 
              src={imagen3} 
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))'
              }}
            />
          </Box>
        </Appear>
      </SlideWithBackground>

      {/* ¿Para qué es utilizada WebRTC? */}
      <SlideWithBackground backgroundImage={imagen5} overlayOpacity={0.75} contentPadding="5% 8%">
        <Heading fontSize={theme.fontSizes.h2} color="primary" textAlign="center" margin="0 0 40px 0">
          ¿Para qué es utilizada WebRTC?
        </Heading>
        <UnorderedList 
          fontSize="2.4rem" 
          color="tertiary" 
          textAlign="left" 
          width="100%" 
          margin="0"
          style={{ listStyleType: 'none', paddingLeft: '0' }}
        >
          <Appear>
            <ListItem margin="20px 0" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2.2rem', marginRight: '15px', minWidth: '40px' }}>📹</span>
              <div>
                <Text fontSize="2.4rem" margin="0 0 5px 0" color="#a5d8ff" fontWeight="bold">Videollamadas en tiempo real</Text>
                <Text fontSize="2.0rem" margin="0" opacity={0.9}>Zoom, Google Meet, Jitsi</Text>
              </div>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="20px 0" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2.2rem', marginRight: '15px', minWidth: '40px' }}>🎵</span>
              <div>
                <Text fontSize="2.4rem" margin="0 0 5px 0" color="#a5d8ff" fontWeight="bold">Streaming de video y audio</Text>
                <Text fontSize="2.0rem" margin="0" opacity={0.9}>Plataformas de transmisión en vivo</Text>
              </div>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem margin="20px 0" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2.2rem', marginRight: '15px', minWidth: '40px' }}>🖥️</span>
              <div>
                <Text fontSize="2.4rem" margin="0 0 5px 0" color="#a5d8ff" fontWeight="bold">Compartir pantalla</Text>
                <Text fontSize="2.0rem" margin="0" opacity={0.9}>Presentaciones y colaboración remota</Text>
              </div>
            </ListItem>
          </Appear>
        </UnorderedList>
      </SlideWithBackground>

      {/* Demo con QR destacado */}
      <SlideWithBackground backgroundImage={imagen4} overlayOpacity={0.8} contentPadding="5%">
        <Heading fontSize={theme.fontSizes.h2} color="primary" textAlign="center" margin="0 0 40px 0">
          Prueba Práctica
        </Heading>
        
        <FlexBox justifyContent="center" alignItems="center">
          {/* Código QR */}
          <QRCodeComponent url={APP_URL} size={280} />
          
          <Box 
            backgroundColor="rgba(255,255,255,0.15)" 
            padding="25px" 
            borderRadius="16px" 
            margin="0 0 0 40px"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <Text fontSize={theme.fontSizes.h3} color="primary" margin="0 0 15px 0" textAlign="center">
              Acceso Rápido
            </Text>
            <Text fontSize={theme.fontSizes.h4} color="primary" margin="0 0 20px 0" fontFamily="monospace" textAlign="center">
              {APP_URL}
            </Text>
            <Box
              as="button"
              backgroundColor="#4dabf7"
              color="#1a1a1a"
              padding="15px 40px"
              borderRadius="12px"
              border="none"
              fontSize={theme.fontSizes.h4}
              fontWeight="bold"
              cursor="pointer"
              onClick={() => window.open(APP_URL, '_blank')}
              style={{
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                width: '100%'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#339af0';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#4dabf7';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              🚀 Abrir Aplicación
            </Box>
          </Box>
        </FlexBox>
        
        <Text fontSize={theme.fontSizes.h4} color="tertiary" textAlign="center" margin="40px 0 0 0">
          Escanea el código QR o haz clic en el botón para probar la aplicación
        </Text>
      </SlideWithBackground>

      {/* Nueva Slide: Código del Servidor WebSocket */}
      <SlideWithBackground backgroundImage={imagen4} overlayOpacity={0.75} contentPadding="3%">
        <Heading fontSize={theme.fontSizes.h2} color="primary" textAlign="center" margin="0 0 20px 0">
          Creando un Servidor WebSocket
        </Heading>
        
        <Box 
          backgroundColor="rgba(0, 0, 0, 0.6)" 
          padding="20px" 
          borderRadius="10px"
          margin="0 auto"
          width="95%"
          maxHeight="70vh"
          overflow="auto"
        >
          <CodePane language="javascript" fontSize="1.4rem">
{`// Importamos la librería ws
const websocket = require('ws');

// Creamos el servidor en el puerto ${APP_CONFIG.websocketPort}
const server = new websocket.Server({ 
  port: ${APP_CONFIG.websocketPort}, 
  host: '0.0.0.0' 
});

// Manejamos nuevas conexiones
server.on('connection', (socket) => {
  // Obtenemos la IP del cliente
  const ip = socket._socket.remoteAddress;
  
  // Extraemos el último segmento de la IP
  const lastSegment = ip.split('.').pop();
  socket.userIpSegment = lastSegment;

  console.log('Usuario conectado desde IP:', ip);

  // Escuchamos los mensajes entrantes
  socket.on('message', (data) => {
    console.log('Mensaje recibido:', data.toString());
    
    // Reenviamos el mensaje a todos los clientes
    server.clients.forEach((client) => {
      // Excepto al que envió el mensaje original
      if (client !== socket && 
          client.readyState === websocket.OPEN) {
        client.send(\`Usuario .\${socket.userIpSegment}: \${data}\`);
      }
    });
  });
});

console.log('🚀 Servidor WebSocket ejecutándose en ${WS_URL}');`}
          </CodePane>
        </Box>
        
        <Box margin="20px 0 0 0" padding="15px" backgroundColor="rgba(255,255,255,0.1)" borderRadius="8px">
          <Text fontSize={theme.fontSizes.h4} color="tertiary" textAlign="left">
            <span style={{color: '#4dabf7', fontWeight: 'bold'}}>Explicación:</span> Este código crea un servidor WebSocket que escucha conexiones, recibe mensajes y los retransmite a todos los clientes conectados.
          </Text>
        </Box>
      </SlideWithBackground>

      {/* Nueva Slide: Explicación del Código - Parte 1 */}
      <SlideWithBackground backgroundImage={imagen4} overlayOpacity={0.75} contentPadding="3%">
        <Heading fontSize={theme.fontSizes.h2} color="primary" textAlign="center" margin="0 0 20px 0">
          Inicialización del Servidor
        </Heading>
        
        <Box 
          backgroundColor="rgba(0, 0, 0, 0.6)" 
          padding="20px" 
          borderRadius="10px"
          margin="0 auto 20px"
          width="95%"
        >
          <CodePane language="javascript" fontSize="1.6rem">
{`const websocket = require('ws');
const server = new websocket.Server({ 
  port: ${APP_CONFIG.websocketPort}, 
  host: '0.0.0.0' 
});`}
          </CodePane>
        </Box>
        
        <Box padding="15px" backgroundColor="rgba(255,255,255,0.1)" borderRadius="8px">
          <Text fontSize={theme.fontSizes.h4} color="tertiary" textAlign="left">
            <span style={{color: '#4dabf7', fontWeight: 'bold'}}>Puntos clave:</span>
          </Text>
          <UnorderedList fontSize={theme.fontSizes.h4} color="tertiary">

              <ListItem>
                <Text fontSize={theme.fontSizes.h4} color="tertiary">
                  Importamos la librería <span style={{fontFamily: 'monospace'}}>ws</span> para WebSockets
                </Text>
              </ListItem>

              <ListItem>
                <Text fontSize={theme.fontSizes.h4} color="tertiary">
                  Creamos un servidor en el puerto {APP_CONFIG.websocketPort}
                </Text>
              </ListItem>

              <ListItem>
                <Text fontSize={theme.fontSizes.h4} color="tertiary">
                  <span style={{fontFamily: 'monospace'}}>host: '0.0.0.0'</span> permite conexiones desde cualquier red
                </Text>
              </ListItem>

          </UnorderedList>
        </Box>
      </SlideWithBackground>

      {/* Nueva Slide: Explicación del Código - Parte 2 */}
      <SlideWithBackground backgroundImage={imagen4} overlayOpacity={0.75} contentPadding="3%">
        <Heading fontSize={theme.fontSizes.h2} color="primary" textAlign="center" margin="0 0 20px 0">
          Manejo de Conexiones
        </Heading>
        
        <Box 
          backgroundColor="rgba(0, 0, 0, 0.6)" 
          padding="20px" 
          borderRadius="10px"
          margin="0 auto 20px"
          width="95%"
        >
          <CodePane language="javascript" fontSize="1.6rem">
{`server.on('connection', (socket) => {
  const ip = socket._socket.remoteAddress;
  const lastSegment = ip.split('.').pop();
  socket.userIpSegment = lastSegment;
  console.log('Usuario conectado desde IP:', ip);
});`}
          </CodePane>
        </Box>
        
        <Box padding="15px" backgroundColor="rgba(255,255,255,0.1)" borderRadius="8px">
          <Text fontSize={theme.fontSizes.h4} color="tertiary" textAlign="left">
            <span style={{color: '#4dabf7', fontWeight: 'bold'}}>Puntos clave:</span>
          </Text>
          <UnorderedList fontSize={theme.fontSizes.h4} color="tertiary">

              <ListItem>
                <Text fontSize={theme.fontSizes.h4} color="tertiary">
                  El evento <span style={{fontFamily: 'monospace'}}>connection</span> se dispara cuando un cliente se conecta
                </Text>
              </ListItem>

              <ListItem>
                <Text fontSize={theme.fontSizes.h4} color="tertiary">
                  Obtenemos la IP del cliente para identificarlo
                </Text>
              </ListItem>

              <ListItem>
                <Text fontSize={theme.fontSizes.h4} color="tertiary">
                  Guardamos el último segmento de la IP como identificador simple
                </Text>
              </ListItem>

          </UnorderedList>
        </Box>
      </SlideWithBackground>

      {/* Nueva Slide: Explicación del Código - Parte 3 */}
      <SlideWithBackground backgroundImage={imagen4} overlayOpacity={0.75} contentPadding="3%">
        <Heading fontSize={theme.fontSizes.h2} color="primary" textAlign="center" margin="0 0 20px 0">
          Manejo de Mensajes
        </Heading>
        
        <Box 
          backgroundColor="rgba(0, 0, 0, 0.6)" 
          padding="20px" 
          borderRadius="10px"
          margin="0 auto 20px"
          width="95%"
        >
          <CodePane language="javascript" fontSize="1.5rem">
{`socket.on('message', (data) => {
  console.log('Mensaje recibido:', data.toString());
  
  server.clients.forEach((client) => {
    if (client !== socket && 
        client.readyState === websocket.OPEN) {
      client.send(\`Usuario .\${socket.userIpSegment}: \${data}\`);
    }
  });
});`}
          </CodePane>
        </Box>
        
        <Box padding="15px" backgroundColor="rgba(255,255,255,0.1)" borderRadius="8px">
          <Text fontSize={theme.fontSizes.h4} color="tertiary" textAlign="left">
            <span style={{color: '#4dabf7', fontWeight: 'bold'}}>Puntos clave:</span>
          </Text>
          <UnorderedList fontSize={theme.fontSizes.h4} color="tertiary">

              <ListItem>
                <Text fontSize={theme.fontSizes.h4} color="tertiary">
                  El evento <span style={{fontFamily: 'monospace'}}>message</span> se dispara cuando llega un mensaje
                </Text>
              </ListItem>

              <ListItem>
                <Text fontSize={theme.fontSizes.h4} color="tertiary">
                  Iteramos sobre todos los clientes conectados
                </Text>
              </ListItem>

              <ListItem>
                <Text fontSize={theme.fontSizes.h4} color="tertiary">
                  Enviamos el mensaje a todos excepto al remitente original
                </Text>
              </ListItem>

              <ListItem>
                <Text fontSize={theme.fontSizes.h4} color="tertiary">
                  Añadimos el identificador del usuario al mensaje
                </Text>
              </ListItem>

          </UnorderedList>
        </Box>
      </SlideWithBackground>

      {/* Cierre */}
      <SlideWithBackground backgroundImage={imagen4} overlayOpacity={0.85} contentPadding="5%">
        <Heading fontSize={theme.fontSizes.h1} color="primary" textAlign="center" margin="0 0 30px 0">
          ¡Gracias!
        </Heading>
        <Text fontSize={theme.fontSizes.h2} color="tertiary" textAlign="center" margin="30px 0">
          WebSockets & WebRTC
        </Text>
        <Text fontSize={theme.fontSizes.h3} color="tertiary" textAlign="center" margin="40px 0 30px 0">
          Comunicación en tiempo real para el futuro de la web
        </Text>
        <Text fontSize={theme.fontSizes.h4} color="secondary" textAlign="center" margin="40px 0 0 0">
          💡 ¿Preguntas?
        </Text>
      </SlideWithBackground>
    </Deck>
  );
};

export default App;