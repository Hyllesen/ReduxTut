import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import { Actions } from 'react-native-router-flux';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 60 }}>
            <Scene key="auth">
                <Scene 
                key="login" 
                component={LoginForm} title="Please login" 
                />
            </Scene>

            <Scene key="main">
                <Scene 
                rightTitle="Add"
                onRight={() => Actions.employeeCreate()}
                key="employeeList" 
                component={EmployeeList} title="Employees" 
                initial
                />
            </Scene>
            <Scene key="employeeCreate" title="Create employee" component={EmployeeCreate} />
            <Scene key="employeeEdit" title="Edit Employee" component={EmployeeEdit} />
        </Router>
    );
};

export default RouterComponent;