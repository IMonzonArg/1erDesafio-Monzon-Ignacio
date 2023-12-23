const fs = require('fs');

const productsArray = [
    { id: 1, title: 'Vino', photo: 'ruta/producto1.jpg', price: 10, stock: 50 },
    { id: 2, title: 'Cerveza', photo: 'ruta/producto2.jpg', price: 8, stock: 30 },
    { id: 3, title: 'Coca Cola', photo: 'ruta/producto3.jpg', price: 5, stock: 100 },
    { id: 4, title: 'Pepsi', photo: 'ruta/producto4.jpg', price: 5, stock: 20 },
    { id: 5, title: 'Fernet', photo: 'ruta/producto5.jpg', price: 15, stock: 70 }
];

// Escribir productos en archivo JSON
fs.writeFileSync('./productos.json', JSON.stringify(productsArray, null, 2));
console.log('Archivo productos.json creado correctamente.');

const usersArray = [
    { id: 1, name: 'Nicolas', photo: 'ruta/foto1.jpg', email: 'Nicolas@gmail.com' },
    { id: 2, name: 'Mateo', photo: 'ruta/foto2.jpg', email: 'Mateo@gmail.com' },
    { id: 3, name: 'Franco', photo: 'ruta/foto3.jpg', email: 'Franco@gmail.com' },
    { id: 4, name: 'Jose', photo: 'ruta/foto4.jpg', email: 'Jose@gmail.com' },
    { id: 5, name: 'Claudio', photo: 'ruta/foto5.jpg', email: 'Claudio@gmail.com' }
];

// Escribir usuarios en archivo JSON
fs.writeFileSync('./usuarios.json', JSON.stringify(usersArray, null, 2));
console.log('Archivo usuarios.json creado correctamente.');

class ProductManager {
    constructor() {
        this.filePath = './productos.json';
    }

    getNextProductId() {
        const fileData = fs.readFileSync(this.filePath, 'utf8');
        const productsArray = JSON.parse(fileData);
        return productsArray.length > 0 ? productsArray[productsArray.length - 1].id + 1 : 1;
    }

    create(data) {
        const fileData = fs.readFileSync(this.filePath, 'utf8');
        const productsArray = JSON.parse(fileData);
        const newId = this.getNextProductId();

        const newProduct = {
            id: newId,
            title: data.title,
            stock: data.stock,
            photo: data.photo,
            price: data.price,
        };

        productsArray.push(newProduct);

        fs.writeFileSync(this.filePath, JSON.stringify(productsArray, null, 2));
        console.log('Producto agregado correctamente al archivo JSON.');
    }

    read() {
        const fileData = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(fileData);
    }

    readOne(id) {
        const fileData = fs.readFileSync(this.filePath, 'utf8');
        const productsArray = JSON.parse(fileData);
        return productsArray.find(product => product.id === id);
    }
}

class UserManager {
    constructor() {
        this.filePath = './usuarios.json';
    }

    getNextUserId() {
        const fileData = fs.readFileSync(this.filePath, 'utf8');
        const usersArray = JSON.parse(fileData);
        return usersArray.length > 0 ? usersArray[usersArray.length - 1].id + 1 : 1;
    }

    create(data) {
        const fileData = fs.readFileSync(this.filePath, 'utf8');
        const usersArray = JSON.parse(fileData);
        const newId = this.getNextUserId();

        const newUser = {
            id: newId,
            name: data.name,
            photo: data.photo,
            email: data.email,
        };

        usersArray.push(newUser);

        fs.writeFileSync(this.filePath, JSON.stringify(usersArray, null, 2));
        console.log('Usuario agregado correctamente al archivo JSON.');
    }

    read() {
        const fileData = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(fileData);
    }

    readOne(id) {
        const fileData = fs.readFileSync(this.filePath, 'utf8');
        const usersArray = JSON.parse(fileData);
        return usersArray.find(user => user.id === id);
    }
}

console.log("Productos Iniciales:", productsArray);
console.log("Usuarios Iniciales:", usersArray);

const productManager = new ProductManager();
const userManager = new UserManager();

productManager.create({ title: 'Whiskey', photo: 'ruta/producto6.jpg', price: 20, stock: 25 });
userManager.create({ name: 'Laura', photo: 'ruta/foto6.jpg', email: 'Laura@gmail.com' });

console.log('Productos después de agregar uno nuevo:', productManager.read());
console.log('Usuarios después de agregar uno nuevo:', userManager.read());

const productIdToFind = 3;
console.log(`Producto con ID ${productIdToFind}:`, productManager.readOne(productIdToFind));

const userIdToFind = 2;
console.log(`Usuario con ID ${userIdToFind}:`, userManager.readOne(userIdToFind));
