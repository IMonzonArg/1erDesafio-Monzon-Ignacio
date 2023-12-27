const { randomBytes } = require('crypto');

class ProductManager {
    constructor() {
        this.productsArray = [];
    }

    generateId() {
        return randomBytes(3).toString('hex');
    }

    create(data) {
        const newId = this.generateId();

        const newProduct = {
            id: newId,
            title: data.title,
            stock: data.stock,
            photo: data.photo,
            price: data.price,
        };

        this.productsArray.push(newProduct);
        return newProduct;
    }

    read() {
        return this.productsArray;
    }

    readOne(id) {
        return this.productsArray.find(product => product.id === id);
    }

    destroy(id) {
        const index = this.productsArray.findIndex(product => product.id === id);
        if (index !== -1) {
            this.productsArray.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = ProductManager;
