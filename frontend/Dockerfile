# Usa una imagen base de Node.js
FROM node:22.11.0-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias de Node.js
RUN npm install

# Construye la aplicación de Vite para producción
RUN npm run build

# Instala un servidor HTTP simple para servir la aplicación
RUN npm install -g serve

# Expone el puerto en el que el servidor HTTP va a funcionar
EXPOSE 5173

# Comando para iniciar el servidor de la app
CMD ["serve", "-s", "dist", "-l", "5173"]
