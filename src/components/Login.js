import React from 'react';
import TextField from './TextField.js';
import Button from './Button.js';
import './Login.css'
export class Login extends React.Component{
   
    render(){
        return (
        <div id="login">
            <p id="header">Login Page</p>
            <table id="table">
                <TextField name="Username" type="text" size="30"/>
                <TextField name="Password" type="password" size="30"/>
                
            </table>
            <Button text="Login"/>
        </div>
        );
    }
}