import React from 'react';

const Screen = (props) => {
    var val = props.calculate();
    return(
      <div className="Screen">
        <p>{props.str}</p>
        <p>{val}</p>
      </div>
    );
    
  
}

export default Screen;