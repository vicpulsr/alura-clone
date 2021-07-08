import React from 'react';

function Button({ name, icon, color, onClick }) {
  
    return(
        <button className="button" style={{backgroundColor: color}} onClick={onClick}>
            {icon}
            {name}
        </button>
    );
}

export default Button;