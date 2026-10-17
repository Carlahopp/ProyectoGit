const UserController = require("./user-controller");
const User = require("./user");

let userController;
beforeEach(() => {
    userController = new UserController();
  });
  
test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });
test('add() debería validar que el usuario inicialmente no está en la lista antes de agregarlo', () => {
    let user = new User(5678, "Carla", "carla@generation.org");
    
    // Usuario nuevo
    expect(userController.getUsers()).not.toContain(user);

    userController.add(user);
    expect(userController.getUsers()).toContain(user);
});

// 2. Verificar remove() con un usuario nuevo
test('remove() no debería alterar la lista al intentar borrar un usuario inexistente', () => {
    let userExistente = new User(1234, "Santiago", "santiago@generation.org");
    let userInexistente = new User(9999, "Pedro", "pedro@generation.org");
    
    userController.add(userExistente);
    
    // Intentamos remover al usuario que no está en la lista
    userController.remove(userInexistente);
    
    // Se mantiene el usuario existente y la longitud de la lista sigue siendo 1
    expect(userController.getUsers().length).toBe(1);
    expect(userController.getUsers()).toContain(userExistente);
});

// 3. Pruebas parafindByEmail()
test('findByEmail() debe encontrar un usuario existente por su correo electrónico', () => {
    let user = new User(4321, "Mateo", "mateo@generation.org");
    userController.add(user);
    
    expect(userController.findByEmail("mateo@generation.org")).toEqual(user);
});

test('findByEmail() debe retornar undefined si el correo electrónico no existe', () => {
    expect(userController.findByEmail("no_existe@generation.org")).toBeUndefined();
});

// 4. Pruebas para findById()
test('findById() debe encontrar un usuario existente por su ID', () => {
    let user = new User(4321, "Mateo", "mateo@generation.org");
    userController.add(user);
    
    expect(userController.findById(4321)).toEqual(user);
});

test('findById() debe retornar undefined si el ID no existe', () => {
    expect(userController.findById(9999)).toBeUndefined();
});
