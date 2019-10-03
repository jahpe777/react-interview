import React from 'react';
import './Button.css';

function Button (props) {

  return (
    <div className="Button">
        <button onClick={props.update}>Click to increment by 1</button>
    </div>
  );
}

export default Button;