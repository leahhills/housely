import axios from 'axios';

class PropertyService {
    constructor() {
        this.baseURL = 'http://localhost:3000';
    }

    getProperties() {
        return axios.get(`/api/properties`);
    }

    deleteProperty(propertyId) {
        return axios.delete(`/api/properties/${propertyId}`);
    }

    getPropertiesByRent(desiredRent) {
        return axios.get(`/api/properties/filter`, {
            params: {
                desiredRent: desiredRent
            }
        });
    }

    addProperty(property) {
        return axios.post(`/api/properties`, property);
    }
}

export default PropertyService;
