const fs = require('fs');
const { randomBytes } = require('crypto');

class UserManager {
    constructor() {
        this.filePath = './usuarios.json';
    }

    generateId() {
        return randomBytes(3).toString('hex');
    }

    create(data) {
        const fileData = fs.readFileSync(this.filePath, 'utf8');
        const usersArray = JSON.parse(fileData);
        const newId = this.generateId();

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

    destroy(id) {
        const fileData = fs.readFileSync(this.filePath, 'utf8');
        let usersArray = JSON.parse(fileData);

        const index = usersArray.findIndex(user => user.id === id);
        if (index !== -1) {
            usersArray.splice(index, 1);
            fs.writeFileSync(this.filePath, JSON.stringify(usersArray, null, 2));
            console.log('Usuario eliminado correctamente del archivo JSON.');
            return true;
        }
        return false;
    }
}

module.exports = UserManager;
