let user = {
    name: 'Larissa'
};


//Alterando a propridade de um objeto
console.log(user);

user.name = 'Outro nome 1';
// console.log(user);
user['name'] = 'Outro nome 2';
// console.log(user);

const prop = 'name';
user[prop] = 'Outro nome 3'
// console.log(user);

// //Criando uma propridade de um objeto
user.lastName = 'Dória de Sousa'

// //Deletando uma propridade
delete user.name;
console.log(user);