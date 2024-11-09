# To-do-app

## Pasos para ejecutar el proyecto

### Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos previos:

- Docker
- Docker Compose
- Git

### Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Unnunnoctio/To-do-app.git
cd To-do-app
```

### Ejecución

1. Construye y ejecuta los contenedores:

```bash
docker-compose up --build
```

2. Accede a la aplicación en `http://localhost:5173`.

### Comandos Útiles

```bash
# Ver el estado de los contenedores
docker-compose ps

# Detener los contenedores y volúmenes
docker-compose down
```