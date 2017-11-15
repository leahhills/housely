import axios from 'axios';

class PropertyService {
    constructor() {
        this.baseURL = 'http://localhost:3000';
    }

    getProperties() {
        return axios.get(`${this.baseURL}/api/properties`);
    }

    deleteProperty(propertyId) {
        return axios.delete(`${this.baseURL}/api/properties/${propertyId}`);
    }

    getPropertiesByRent(desiredRent) {
        return axios.get(`${this.baseURL}/api/properties/filter`, {
            params: {
                desiredRent: desiredRent
            }
        });
    }

    addProperty(property) {
        return axios.post(`${this.baseURL}/api/properties`, property);
    }
}

export default PropertyService;
