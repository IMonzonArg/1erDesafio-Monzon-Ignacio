const { randomBytes } = require('crypto');

class UserManager {
    constructor() {
        this.usersArray = [];
    }

    generateId() {
        return randomBytes(3).toString('hex');
    }

    create(data) {
        const newId = this.generateId();

        const newUser = {
            id: newId,
            name: data.name,
            photo: data.photo,
            email: data.email,
        };

        this.usersArray.push(newUser);
        return newUser;
    }

    read() {
        return this.usersArray;
    }

    readOne(id) {
        return this.usersArray.find(user => user.id === id);
    }

    destroy(id) {
        const index = this.usersArray.findIndex(user => user.id === id);
        if (index !== -1) {
            this.usersArray.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = UserManager;
