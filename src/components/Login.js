import React from 'react';
import TextField from './TextField.js';
import Button from './Button.js';
import './Login.css'
export class Login extends React.Component{
    
    handleClick(){
        let a=document.getElementById('Username');
        let b=document.getElementById('Password');
        if(a.value==='' ){
            alert("Empty username!!");
        }
        if(b.value==='' ){
            alert("Empty password!!");
        }
    }
    handleCancel(){
        let a=document.getElementById('Username');
        let b=document.getElementById('Password');
        a.value='';
        b.value='';
    }
    render(){
        return (
        <div id="login">
            <p id="header">Login Page</p>
            <table id="table">
                <TextField name="Username" type="text" size="30"/>
                <TextField name="Password" type="password" size="30"/>
            </table>
            <Button text="Login" onClick={this.handleClick} />
            <Button text="Cancel" onClick={this.handleCancel} />
        </div>
        );
    }
}