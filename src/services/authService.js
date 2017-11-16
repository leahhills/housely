import axios from 'axios';

export default class AuthService {
    constructor() {
        this.baseURL = 'http://localhost:3000';        
    }

    login(username, password) {
        return axios.post(`/api/auth/login`, { username: username, password: password }); 
    }

    register(username, password) {
        return axios.post(`/api/auth/register`, { username: username, password: password });
    }

    logout() {
        return axios.post(`/api/auth/logout`);
    }
}