import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import House from './component/House/House';
import Wizard from './component/Wizard/Wizard';
import Wizardtwo from './component/Wizard/Wizardtwo';
import Wizardthree from './component/Wizard/Wizardthree';



export default (
    <Switch>
        <Route exact path=" /" component={Dashboard } />
        <Route path="/houses: id " component={House } />
        <Route exact path="/wizard" component={Wizard } />
        <Route path="/wizard/wizardtwo" component={Wizardtwo } />
        <Route path="/wizard/wizardthree "component={Wizardthree }  />
    </Switch>
)