 # API de Node.js Express con Almacenamiento de Datos en Memoria

Esta API de Node.js Express utiliza almacenamiento de datos en memoria para gestionar usuarios y productos. Proporciona operaciones CRUD básicas (Crear, Leer, Actualizar, Eliminar) tanto para usuarios como para productos.

## Prerrequisitos

Para ejecutar esta API, necesitarás:

- Node.js (versión 16 o superior)
- npm (versión 7 o superior)

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una ventana de terminal y navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias requeridas.

## Ejecutar la API

Para ejecutar la API, simplemente corre `npm start` en la ventana de terminal. Esto iniciará el servidor API en el puerto 8080.

## Endpoints de la API

La API proporciona los siguientes endpoints:

- `/api/products`: Obtiene todos los productos.
- `/api/users`: Obtiene todos los usuarios.
- `/api/products/:pid`: Obtiene un solo producto por su ID.
- `/api/users/:uid`: Obtiene un solo usuario por su ID.

## Explicación del Código

### 1. Importación de Módulos Necesarios

```javascript
const express = require('express');
const app = express();
```

En este paso, importamos el módulo Express y creamos una aplicación Express. Express es un framework para crear aplicaciones web en Node.js.

### 2. Creación de Gestores de Datos en Memoria

```javascript
const UserManager = require('./data/memory/user.memory'); 
const ProductManager = require('./data/memory/product.memory'); 

const userManager = new UserManager();
const productManager = new ProductManager();
```

En este paso, creamos dos gestores de datos en memoria, uno para usuarios y otro para productos. Estos gestores manejarán las operaciones CRUD para sus respectivos tipos de datos.

### 3. Definición de Endpoints de la API

```javascript
app.get('/api/products', (req, res) => {
  const products = productManager.read();
  if (products.length > 0) {
    res.json({ success: true, response: products });
  } else {
    res.status(404).json({ success: false, message: 'not found!' });
  }
});

app.get('/api/users', (req, res) => {
  const users = userManager.read();
  if (users.length > 0) {
    res.json({ success: true, response: users });
  } else {
    res.status(404).json({ success: false, message: 'not found!' });
  }
});

app.get('/api/products/:pid', (req, res) => {
  const productId = req.params.pid;
  const product = productManager.readOne(productId);
  if (product) {
    res.json({ success: true, response: product });
  } else {
    res.status(404).json({ success: false, message: 'not found!' });
  }
});

app.get('/api/users/:uid', (req, res) => {
  const userId = req.params.uid;
  const user = userManager.readOne(userId);
  if (user) {
    res.json({ success: true, response: user });
  } else {
    res.status(404).json({ success: false, message: 'not found!' });
  }
});

const PORT = 8080; 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});