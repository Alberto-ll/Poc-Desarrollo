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
  Appear
} from 'spectacle';

// Import images
import imagen1 from './assets/imagen.png';
import imagen2 from './assets/imagen1.png';
import imagen3 from './assets/imagen2.png';
import imagen4 from './assets/imagen3.png';
import imagen5 from './assets/imagen4.png';

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
      style={{ 
        position: 'relative',
        backgroundColor: '#1864ab',
        overflow: 'hidden'
      }}
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
      theme={theme}
      transitionEffect="slide"
      transitionDuration={600}
    >
      {/* Portada */}
      <SlideWithBackground backgroundImage={imagen4} overlayOpacity={0.8} contentPadding="5%">
        <Heading fontSize="h1" color="primary" textAlign="center" margin="0 0 30px 0">
          ¿Qué son los WebSockets?
        </Heading>
        <Text fontSize="h3" color="tertiary" textAlign="center" margin="30px 0">
          Es un protocolo de comunicación que permite la transmisión bidireccional de datos entre un cliente y un servidor en tiempo real.
        </Text>
      </SlideWithBackground>

      {/* Antes de los WebSockets */}
      <SlideWithBackground backgroundImage={imagen4} overlayOpacity={0.75}>
        <Heading fontSize="h2" color="primary" textAlign="center" margin="0 0 40px 0">
          Antes de los WebSockets
        </Heading>
        <Appear>
          <Text fontSize="h3" color="tertiary" textAlign="center" margin="30px 0">
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
        <Heading fontSize="h2" color="primary" textAlign="center" margin="0 0 40px 0">
          Con WebSockets
        </Heading>
        <Appear>
          <Text fontSize="h3" color="tertiary" textAlign="center" margin="30px 0">
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
        <Heading fontSize="h2" color="primary" textAlign="center" margin="0 0 40px 0">
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
        <Heading fontSize="h1" color="primary" textAlign="center" margin="0 0 30px 0">
          ¿Qué es WebRTC?
        </Heading>
        <Text fontSize="h3" color="tertiary" textAlign="center" margin="30px 0">
          Es una tecnología y conjunto de protocolos que permite la comunicación en tiempo real directamente entre navegadores o aplicaciones, sin necesidad de un servidor intermedio para la transmisión de datos.
        </Text>
      </SlideWithBackground>

      {/* Desafíos de WebRTC */}
      <SlideWithBackground backgroundImage={imagen5} overlayOpacity={0.75} contentPadding="5% 8%">
        <Heading fontSize="h2" color="primary" textAlign="center" margin="0 0 40px 0">
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
        <Heading fontSize="h2" color="primary" textAlign="center" margin="0 0 40px 0">
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

      {/* Demo */}
      <SlideWithBackground backgroundImage={imagen4} overlayOpacity={0.8} contentPadding="5%">
        <Heading fontSize="h2" color="primary" textAlign="center" margin="0 0 40px 0">
          Prueba Práctica
        </Heading>
        <Text fontSize="h3" color="tertiary" textAlign="center" margin="30px 0">
          Experimenta con WebSockets en tiempo real
        </Text>
        <Box 
          backgroundColor="rgba(255,255,255,0.15)" 
          padding="20px" 
          borderRadius="16px" 
          width="90%" 
          margin="30px auto"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          <Text fontSize="h4" color="primary" margin="0 0 15px 0" fontFamily="monospace">
            🌐 https://websocket-demo-app.vercel.app
          </Text>
          <Box
            as="button"
            backgroundColor="#4dabf7"
            color="#1a1a1a"
            padding="12px 30px"
            borderRadius="12px"
            border="none"
            fontSize="h4"
            fontWeight="bold"
            cursor="pointer"
            onClick={() => window.open('https://websocket-demo-app.vercel.app', '_blank')}
            style={{
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              ':hover': {
                backgroundColor: '#339af0',
                transform: 'translateY(-2px)'
              }
            }}
          >
            🚀 Probar Aplicación
          </Box>
        </Box>
      </SlideWithBackground>

      {/* Cierre */}
      <SlideWithBackground backgroundImage={imagen4} overlayOpacity={0.85} contentPadding="5%">
        <Heading fontSize="h1" color="primary" textAlign="center" margin="0 0 30px 0">
          ¡Gracias!
        </Heading>
        <Text fontSize="h2" color="tertiary" textAlign="center" margin="30px 0">
          WebSockets & WebRTC
        </Text>
        <Text fontSize="h3" color="tertiary" textAlign="center" margin="40px 0 30px 0">
          Comunicación en tiempo real para el futuro de la web
        </Text>
        <Text fontSize="h4" color="secondary" textAlign="center" margin="40px 0 0 0">
          💡 ¿Preguntas?
        </Text>
      </SlideWithBackground>
    </Deck>
  );
};

export default App;