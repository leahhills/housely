import React, { Component } from 'react';
import Header from '../Header/Header';
import PropertyService from '../../services/propertyService';
import './Home.css';
import '../../App.css';

class Home extends Component {

    constructor(props) {
        super(props);

        this.propertyService = new PropertyService();

        this.state = {
            filterRent: 0,
            properties: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.getProperties = this.getProperties.bind(this);
        this.getPropertiesByRent = this.getPropertiesByRent.bind(this);
        this.addProperty = this.addProperty.bind(this);

        this.getProperties();
    }

    addProperty() {
        this.props.history.push('/WizardOne');
    }

    handleChange(prop, val) {
        this.setState({ [prop]: val });
    }

    getProperties() {
        this.propertyService.getProperties()
            .then(response => {
                if (response && response.data) {
                    this.state.filterRent = 0
                    this.setState({ properties: response.data });
                }
                console.log(this.state.properties);
            })
            .catch(err => console.log('Error getting properties', err));
    }

    getPropertiesByRent() {
        this.propertyService.getPropertiesByRent(this.state.filterRent)
        .then(response => {
            if(response && response.data)
                this.setState({ properties: response.data });
            console.log(this.state.properties);
        })
        .catch(err => console.log(`Error getting property by rent ${this.state.filterRent}`));
    }

    deleteProperty(propertyId) {
        console.log('i am about to delete propertyID', propertyId);
        this.propertyService.deleteProperty(propertyId)
        .then(response => {
            console.log('SUccessfuly deleted property');
            this.getProperties();
        })
        .catch(err => console.log(`Error deleting property with id ${propertyId}`, err));
    }

    render() {
        const propertyList = this.state.properties.map(property => {
            return (
                <div className='property-container' key={property.propertyid}>
                    <div className='property-left-container'>
                        <h3>{property.propertyname}</h3> 
                        {property.propertydesc}
                    </div>
                    <div className='property-right-container'>
                        <strong>Loan: </strong>{property.loan} <br/>
                        <strong>Mortgage: </strong>{property.mortgage} <br/>
                        <strong>Desired Rent: </strong>{property.desiredrent} <br/>
                        <strong>Address: </strong>{property.address} <br/>
                        <strong>City: </strong>{property.city} <br/>
                    </div>
                    <div>
                        <button className='btn' onClick={this.deleteProperty.bind(this, property.propertyid)}>X</button>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <Header />
                <div className='center-container'>
                    <div className='add-property-container'>
                        <button className='btn btn-add-property' onClick={this.addProperty}>Add new property</button>
                    </div>
                    <div className='filter-container'>
                        <span className='filter-text'>
                            List properties with 'desired rent' great0r than: $
                        </span>
                        <input className='filter-input' maxLength='16' className='filter-input' value={this.state.filterRent} type='number' onChange={(e) => this.handleChange('filterRent', e.target.value)} />
                        <button className='btn btn-filter' onClick={this.getPropertiesByRent}>Filter</button>
                        <button className='btn btn-reset' onClick={this.getProperties}>Reset</button>
                    </div>
                    <div>
                        {propertyList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
