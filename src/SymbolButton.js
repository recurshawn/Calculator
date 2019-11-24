import React from 'react';

const SymbolButton = (props)=> {
    var value = props.value;
    return(
      <div className={props.className}>
        <button onClick = {() => props.click(value)} > {value}</button>
      </div>
    );
    
  
}

export default SymbolButton;