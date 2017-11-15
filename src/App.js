import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import WizardOne from './components/Wizard_One/WizardOne';
import WizardTwo from './components/Wizard_Two/WizardTwo';
import WizardThree from './components/Wizard_Three/WizardThree';
import WizardFour from './components/Wizard_Four/WizardFour.css';
import WizardFive from './components/Wizard_Five/WizardFive';
import MainRouter from './Mainrouter';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        {MainRouter}
      </div>
    );
  }
}

export default App;
