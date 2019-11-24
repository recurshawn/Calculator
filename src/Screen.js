import React from 'react';

const Screen = (props) => {
    var val = 0;
    try{
         val = props.calculate();
     } catch(e)
     {
        val = this.props.ans;
     }
    return(
      <div className="Screen">
        <span className="math">{props.str}</span>
        <br/>
        = {val}
      </div>
    );
    
  
}

export default Screen;