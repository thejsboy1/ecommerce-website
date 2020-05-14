import React from 'react';  
function Button(props) {

    
    return (
    <button type={props.type} onClick={props.event}> {props.name}</button>
        
    );
}
export default Button;