import axios from 'axios'
export default axios.create({
    // baseURL: 'http://192.168.23.192:8080/social-protection-api/api/'
    baseURL: "http://localhost:3000/auth/"
});