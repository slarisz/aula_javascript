const user = {
    name: 'Larissa',
    lastName: 'Dória de Sousa'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, '\n', user);