const register = function(username){
    console.log(`User : ${username} has been registered`)
}

const login = function(username, password){
    console.log(`User ${username} is logged in`)
}

//if key and value are same then we can have them as same

module.exports = 
    {register,
    login
    }