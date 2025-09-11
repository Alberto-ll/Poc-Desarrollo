# POC WebSocket - Chat en Tiempo Real

Esta POC demuestra un sistema de chat en tiempo real usando WebSockets, con presentación incluida.

## Estructura del Proyecto

```
POC_Presentacion/
├── backend/          # Servidor Express + WebSocket (Puerto 3001)
├── frontend/         # Cliente React Chat (Puerto 3000)  
├── presentation/     # Presentación Spectacle (Puerto 3002)
├── package.json      # Scripts para manejar todo el proyecto
└── README.md
```

## Configuración Inicial

```bash
# Instalar concurrently en el root
npm install

# Instalar dependencias de todos los proyectos
npm run setup
```

## Desarrollo

```bash
# Levantar las 3 aplicaciones simultáneamente
npm run dev
```

Este comando iniciará:
- **Backend**: http://localhost:3001 (Express + WebSocket)
- **Frontend**: http://localhost:3000 (React Chat)
- **Presentación**: http://localhost:3002 (Spectacle)

## Comandos Individuales

```bash
# Solo backend
npm run dev:backend

# Solo frontend  
npm run dev:frontend

# Solo presentación
npm run dev:presentation
```

## Puertos por Defecto

- **Backend**: 3001
- **Frontend**: 3000
- **Presentación**: 3002

## Próximos Pasos

1. Configurar el servidor Express con WebSocket en `/backend`
2. Crear la aplicación React del chat en `/frontend`
3. Desarrollar la presentación Spectacle en `/presentation`


---

