import React from 'react';

const SymbolButton = (props)=> {
    var value = props.value;
    return(
      <div>
        <button onClick = {() => props.click(value)} > {value}</button>
      </div>
    );
    
  
}

export default SymbolButton;