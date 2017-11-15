import axios from 'axios';

class PropertyService {
    constructor() {
        this.baseURL = 'http://localhost:3000';        
    }

    getProperties() {
        return axios.get(`${this.baseURL}/api/properties`);
    }
}

export default PropertyService;
