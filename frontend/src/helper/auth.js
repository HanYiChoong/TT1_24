import axios from 'axios'

const registerUser = (email, password) => {
    return axios
        .post("users/register", {
            email: email,
            password: password
        })
        .then(response => {
            console.log({response})
            if (!response.data.error) {
                localStorage.setItem('usertoken', response.data.token)
                console.log("Registered")
            }
            return response.data
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
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

export { loginUser, registerUser }