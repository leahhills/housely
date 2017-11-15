import React, { Component } from 'react';
import Header from '../Header/Header';
import MainRouter from '../../Mainrouter';

class LandingPage extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            filter: {
                rent: 0
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange( prop, val ) {
        this.setState({ [prop]: val });
    }

    render() {
        return (
            <div>
                <div className='add-property-container'>
                    <button className=''>Add new property</button>
                </div>
                <div className='filter-container'>
                    List properties with "desired rent" great0r than: $ {this.state.filter.rent}
                    <input className="filter-input" value={filter.rent} type="number" onChange={(e) => this.handleChange('filter.rent', e.target.value)} />
                </div>
            </div>
        );
    }
}

export default LandingPage;



