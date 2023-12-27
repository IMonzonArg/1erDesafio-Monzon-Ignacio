const express = require('express');
const app = express();

const UserManager = require('./UserManager');
const ProductManager = require('./ProductManager');

const userManager = new UserManager('./data/fs/files/usuarios.json');
const productManager = new ProductManager('./data/fs/files/productos.json');

app.use(express.json());

app.get('/api/products', (req, res) => {
    const products = productManager.read();
    if (products.length > 0) {
        res.json({ success: true, response: products });
    } else {
        res.status(404).json({ success: false, message: 'Productos no encontrados.' });
    }
});

app.get('/api/users', (req, res) => {
    const users = userManager.read();
    if (users.length > 0) {
        res.json({ success: true, response: users });
    } else {
        res.status(404).json({ success: false, message: 'Usuarios no encontrados.' });
    }
});

app.get('/api/products/:pid', (req, res) => {
    const productId = req.params.pid;
    const product = productManager.readOne(productId);
    if (product) {
        res.json({ success: true, response: product });
    } else {
        res.status(404).json({ success: false, message: 'Producto no encontrado.' });
    }
});

app.get('/api/users/:uid', (req, res) => {
    const userId = req.params.uid;
    const user = userManager.readOne(userId);
    if (user) {
        res.json({ success: true, response: user });
    } else {
        res.status(404).json({ success: false, message: 'Usuario no encontrado.' });
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
