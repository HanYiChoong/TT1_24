import axios from 'axios'

const registerUser = (email, password) => {
    return axios
        .post("users/register", {
            email: email,
            password: password
        })
        .then(response => {
            console.log("Registered")
            localStorage.setItem('usertoken', response.data.token)
            return response
        })
}

const loginUser = (email, password) => {
    return axios
        .post("users/login", {
            email: email,
            password: password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data.token)
            return response.data.token
        })
        .catch(err => {
            console.log(err)
        })
}

export { loginUser, registerUser }