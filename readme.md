# Gestión de Usuarios y Productos

Programa de gestion de usuarios y productos.

## Descripción

Este proyecto consta de dos clases: UserManager y ProductManager, diseñadas para administrar conjuntos de usuarios y productos respectivamente. Cada una de estas clases contiene métodos específicos para realizar operaciones relacionadas con la gestión de usuarios y productos.

## Uso

1. Ejecuta node app.js para iniciar el programa.
2. Sigue las instrucciones proporcionadas en la consola para agregar, mostrar o buscar productos y usuarios.

## Funcionalidades

### UserManager:
* createUser(data): Agrega un usuario al conjunto de usuarios, generando automáticamente un ID auto-incrementable. Los campos obligatorios son name, photo, y email.
* readUsers(): Devuelve el arreglo completo de usuarios.
* readUserById(id): Devuelve un usuario específico buscado por su ID.

### ProductManager:
* createProduct(data): Agrega un producto al conjunto de productos, generando automáticamente un ID auto-incrementable. Los campos obligatorios son title, photo, price, y stock.
* readProducts(): Devuelve el arreglo completo de productos.
* readProductById(id): Devuelve un producto específico buscado por su ID.





