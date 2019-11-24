import React from 'react';

const Screen = (props) => {
    var val = props.calculate();
    
    return(
      <div className="Screen">
        <span className="math">{props.str}</span>
        <br/>
        = {val}
      </div>
    );
    
  
}

export default Screen;