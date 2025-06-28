import axios from "axios"
const base_url="http://localhost:8080/users/"

const registerUser=async(user:any)=>{
    return axios.post(`${base_url}register`, user)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const loginUser=async(login:any)=>{
    return axios.post(`${base_url}login`, login)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const sendOtp= async(email:string)=>{
    return axios.post(`${base_url}sendOtp/${email}`)
    .then(result => result.data)
    .catch(error => {throw error;});
}

const verifyOtp= async(email:string, otp:any)=> {
    return axios.get(`${base_url}verifyOtp/${email}/${otp}`)
    .then(result => result.data)
    .catch(error => {throw error;});
}

const changePassword=async(email:string, password:string)=> {
    return axios.post(`${base_url}changePassword`, {email, password})
    .then(result => result.data)
    .catch(error => {throw error;});
}

export {registerUser, loginUser, sendOtp, verifyOtp, changePassword};