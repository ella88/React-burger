import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return ( 
        <div className = "App" >
            <h1 > Hi, welcome to REACT!Let 's begin! </h1>  
            <p>This is a paragraph.</p>
            <Person name = "alice" age="25"></Person>
            <Person name = "Max" age="28">My Hobby is gaming!</Person>
            <Person name = "Dan" age="32"></Person>
        </div>
        );
        //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React Div.'))
    }
}

export default App;