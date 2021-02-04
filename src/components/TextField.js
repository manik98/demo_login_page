import React from 'react'

export class TextField extends React.Component{
    render(){
        return(
            <tr>
                <td>
                    {this.props.name} 
                </td>
                <td>
                    :
                </td>
                <td>
                    <input type={this.props.type} size={this.props.size} class="input" id={this.props.name} ></input>
                </td>
            </tr>
        );
    }
}
export default TextField;