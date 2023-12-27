const productsArray = [
    { id: 1, title: 'Vino', photo: 'ruta/producto1.jpg', price: 10, stock: 50 },
    { id: 2, title: 'Cerveza', photo: 'ruta/producto2.jpg', price: 8, stock: 30 },
    { id: 3, title: 'Coca Cola', photo: 'ruta/producto3.jpg', price: 5, stock: 100 },
    { id: 4, title: 'Pepsi', photo: 'ruta/producto4.jpg', price: 5, stock: 20 },
    { id: 5, title: 'Fernet', photo: 'ruta/producto5.jpg', price: 15, stock: 70 }
];

class ProductManager {
    constructor() {}

    getNextProductId() {
        return productsArray.length > 0
            ? productsArray[productsArray.length - 1].id + 1
            : 1;
    }

    create(data) {
        const newId = this.getNextProductId();

        const newObject = {
            id: newId,
            title: data.title,
            stock: data.stock,
            photo: data.photo,
            price: data.price,
        }; 

        productsArray.push(newObject);
    }

    read(){
        return productsArray;
    }

    readOne(id) {
        return productsArray.find(object => object.id === id);
    }
}

const usersArray = [
    { id: 1, name: 'Nicolas', photo: 'ruta/foto1.jpg', email: 'Nicolas@gmail.com' },
    { id: 2, name: 'Mateo', photo: 'ruta/foto2.jpg', email: 'Mateo@gmail.com' },
    { id: 3, name: 'Franco', photo: 'ruta/foto3.jpg', email: 'Franco@gmail.com' },
    { id: 4, name: 'Jose', photo: 'ruta/foto4.jpg', email: 'Jose@gmail.com' },
    { id: 5, name: 'Claudio', photo: 'ruta/foto5.jpg', email: 'Claudio@gmail.com' }
];


class UserManager {
    constructor() {}

    getNextUserId() {
        return usersArray.length > 0
            ? usersArray[usersArray.length - 1].id + 1
            : 1;
    }

    create(data) {
        const newId = this.getNextUserId();

        const newUser = {
            id: newId,
            name: data.name,
            photo: data.photo,
            email: data.email,
        }; 

        usersArray.push(newUser);
    }

    read(){
        return usersArray;
    }

    readOne(id) {
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
