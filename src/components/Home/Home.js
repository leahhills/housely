import React, { Component } from 'react';
import Header from '../Header/Header';
import './Home.css';
import '../../App.css';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterRent: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(prop, val) {
        this.setState({ [prop]: val });
    }

    render() {
        return (
            <div>
                <Header />
                <div className='center-container'>
                    <div className='add-property-container'>
                        <button className='btn btn-add-property'>Add new property</button>
                    </div>
                    <div className='filter-container'>
                        <span className='filter-text'>
                            List properties with 'desired rent' great0r than: $
                        </span>
                        <input className='filter-input' maxLength='16' className='filter-input' value={this.state.filterRent} type='number' onChange={(e) => this.handleChange('filterRent', e.target.value)} />
                        <button className='btn btn-filter'>Filter</button>
                        <button className='btn btn-reset'>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
