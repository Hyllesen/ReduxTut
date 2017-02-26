import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 60 }}>
            <Scene key="login" component={LoginForm} title="Please login" />
            <Scene key="EmployeeList" component={EmployeeList} title="Employees" />
        </Router>
    );
};

export default RouterComponent;