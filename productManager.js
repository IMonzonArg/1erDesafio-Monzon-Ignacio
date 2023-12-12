const productsArray = [
    { title: 'Vino', photo: 'ruta/producto1.jpg', price: 10, stock: 50 },
    { title: 'Cerveza', photo: 'ruta/producto2.jpg', price: 8, stock: 30 },
    { title: 'Coca Cola', photo: 'ruta/producto3.jpg', price: 5, stock: 100 },
    { title: 'Pepsi', photo: 'ruta/producto4.jpg', price: 5, stock: 20 },
    { title: 'Fernet', photo: 'ruta/producto5.jpg', price: 15, stock: 70 }
];

class ProductManager {
    static objects = [];

    constructor(object) {
        this.id = ProductManager.objects.length === 0 ? 1 : ProductManager.objects[ProductManager.objects.length - 1].id + 1;
        this.title = object.title;
        this.photo = object.photo;
        this.price = object.price;
        this.stock = object.stock;
        ProductManager.objects.push(this);
    }

    create(data) {
        const newId = ProductManager.objects.length === 0 ? 1 : ProductManager.objects[ProductManager.objects.length - 1].id + 1;

        const newObject = {
            id: newId,
            title: data.title,
            price: data.price,
            stock: data.stock,
            photo: data.photo,
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
    { name: 'Nicolas', photo: 'ruta/foto1.jpg', email: 'Nicolas@gmail.com' },
    { name: 'Mateo', photo: 'ruta/foto2.jpg', email: 'Mateo@gmail.com' },
    { name: 'Franco', photo: 'ruta/foto3.jpg', email: 'Franco@gmail.com' },
    { name: 'Jose', photo: 'ruta/foto4.jpg', email: 'Jose@gmail.com' },
    { name: 'Claudio', photo: 'ruta/foto5.jpg', email: 'Claudio@gmail.com' }
];

class UserManager {
    static users = [];

    constructor(user) {
        this.id = UserManager.users.length === 0 ? 1 : UserManager.users[UserManager.users.length - 1].id + 1;
        this.name = user.name;
        this.photo = user.photo;
        this.email = user.email;
        UserManager.users.push(this);
    }

    create(data) {
        const newId = UserManager.users.length === 0 ? 1 : UserManager.users[UserManager.users.length - 1].id + 1;

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

//cambios realizados