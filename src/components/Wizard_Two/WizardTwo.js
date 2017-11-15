import React, { Component } from 'react';
import Header from './../Header/Header';
import PropertyService from '../../services/propertyService';
import './../Wizard_One/WizardOne.css';

class WizardTwo extends Component {
    constructor(props) {
        super(props);

        this.propertyService = new PropertyService();

        this.state = {
            
            
            address: '',
            city: '',
            zip: 0,
            state: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.cancel = this.cancel.bind(this);
        this.addProperty = this.addProperty.bind(this);
    }

    handleChange(prop, val) {
        this.setState({ [prop]: val });
    }

    cancel() {
        this.props.history.push('/Home');
    }

    addProperty() {
        const property = {
             
             
            address: this.state.address, 
            city: this.state.city, 
            state: this.state.state, 
            zip: this.state.zip, 
            userID: 5
        }
        console.log(property);
        this.propertyService.addProperty(property)
        .then(result => {
            this.props.history.push('/Home');
        })
        .catch(err => console.log(`Error adding property ${err}`));
    }

    render() {
        return (
            <div>
                <Header />
                <div className='center-container'>
                    <div className='wizard-one-heading'>
                        <div>
                            
                        </div>
                        <button className='btn' onClick={this.cancel}>Cancel</button>
                    </div>
                    <div>
                        Step 2
                    </div>
                    <div className='wizard-one-body'>
                        
                        <h3>Address</h3>
                        <input maxLength='256' value={this.state.address} type='text' onChange={(e) => this.handleChange('address', e.target.value)} />

                        <h3>City</h3>
                        <input maxLength='256' value={this.state.city} type='text' onChange={(e) => this.handleChange('city', e.target.value)} />

                        <h3>State</h3>
                        <input maxLength='32' value={this.state.state} type='text' onChange={(e) => this.handleChange('state', e.target.value)} />

                        <h3>Zip</h3>
                        <input value={this.state.zip} type='number' onChange={(e) => this.handleChange('zip', e.target.value)} />
                    </div>
                    <div>
                        <button className='btn' onClick={this.addProperty}>Add Property</button>
                    </div>
                </div>
            </div>
        )

    }
}
export default WizardTwo;