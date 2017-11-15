import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import WizardFive from './components/Wizard_Five/WizardFive';
import WizardFour from './components/Wizard_Four/WizardFour';
import WizardThree from './components/Wizard_Three/WizardThree';
import WizardTwo from './components/Wizard_Two/WizardTwo';
import WizardOne from './components/Wizard_One/WizardOne';


export default(
 <Switch>
    <Route exact path='/' component={ Login }/>
    <Route path='/Home' component={ Home }/>
    <Route path='/WizardOne' component={ WizardOne }/>
    <Route path='/WizardTwo' component={ WizardTwo }/>
    <Route path='/WizardThree' component={ WizardThree }/>
    <Route path='/WizardFour' component={ WizardFour }/>
    <Route path='/WizardFive' component={ WizardFive }/>   
 </Switch>    
)
 