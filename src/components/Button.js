import React from 'react'

export class Button extends React.Component{
    render(){
        return(
            <div id="button" onClick={this.props.onClick}>
                {this.props.text}
            </div>
        );
    }
}
export default Button;