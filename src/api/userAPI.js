// Get user
export const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
}

// Check user credentials
export const checkLogin = (loginData) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        const foundUser = users.find(user => user.email === loginData.email)
        if(!foundUser || foundUser.username !== loginData.password) {return false};
        return {
            id: foundUser.id,
            name: foundUser.name,
            username: foundUser.username,
            email: foundUser.email
        }
    })
}
