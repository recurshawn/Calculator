import React from 'react';
import SymbolButton from './SymbolButton.js';
import Screen from './Screen.js';

class Calculator extends React.Component {

    state = {
        string: '',
        answer: 0,
    };

    calculation = () =>
    {
      if(this.state.string==='') return 0;
      if(this.state.string.slice(-1)!=='+' && this.state.string.slice(-1)!=='-' && this.state.string.slice(-1)!=='*' && this.state.string.slice(-1)!=='/' && this.state.string.slice(-1)!=='%' && this.state.string.slice(-1)!=='(' && this.state.string.slice(-1)!=='')  
      {     
         
        try{
            return (eval(this.state.string));
            
        } catch(e)
        {
            return(this.state.answer);
        }
      }
      console.log(this.state.answer);
      return(this.state.answer);
    }

    addToString = (symb) => {
 
        if((this.state.string.slice(-1)!=='+' && this.state.string.slice(-1)!=='-' && this.state.string.slice(-1)!=='*' && this.state.string.slice(-1)!=='/' && this.state.string.slice(-1)!=='%' && this.state.string.slice(-1)!=='(' && this.state.string.slice(-1)!=='') || (symb!=='+' && symb!=='-' && symb!=='*' && symb!=='/' && symb!=='%'))
        {
            // if(symb === '×') symb = '*';
            // if(symb === '÷') symb = '/';
            // if(symb === '−') symb = '-';
            let str = this.state.string;
            str = str + symb;
            this.setState({ string: str });
            const ans = this.calculation();
            this.setState({answer: ans});
            return ans;
        }
        
    }

    reset = () =>
    {
        this.setState({string: '', answer: 0});
    }

    backspaceString = () =>
    {
        var str = this.state.string;
        str = str.slice(0, -1);
        this.setState({string: str});
        this.setState({answer: this.calculation()});
    }

    createNewExpression = () =>
    {
        const ans = (this.calculation()).toString();
        this.setState({string: ans});
    }
    render() {
        return (
            <div>
                <div className="buttonBoard">
                <Screen str={this.state.string} calculate = {this.calculation} ans = {this.answer} />
                <div className="row">
                    <div className="col">
                    <SymbolButton className="power" click ={this.reset} value={'AC'} />
                    </div>
                    <div className="col">
                    <SymbolButton className="backspace" click = {this.backspaceString} value={'⌫'} />
                    </div>
                    <div className="col">
                        <SymbolButton className="operator" click={this.addToString} value={'%'} />
                    </div>
                    <div className="col">
                        <SymbolButton className="operator" click={this.addToString} value={'÷'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <SymbolButton click={this.addToString} value={7} />
                    </div>
                    <div className="col">
                        <SymbolButton click={this.addToString} value={8} />
                    </div>
                    <div className="col">
                        <SymbolButton click={this.addToString} value={9} />
                    </div>
                    <div className="col">
                        <SymbolButton className="operator" click={this.addToString} value={'×'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <SymbolButton click={this.addToString} value={4} />
                    </div>
                    <div className="col">
                        <SymbolButton click={this.addToString} value={5} />
                    </div>
                    <div className="col">
                        <SymbolButton click={this.addToString} value={6} />
                    </div>
                    <div className="col">
                        <SymbolButton className="operator" click={this.addToString} value={'−'} />

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <SymbolButton click={this.addToString} value={1} />
                    </div>
                    <div className="col">
                        <SymbolButton click={this.addToString} value={2} />
                    </div>
                    <div className="col">
                        <SymbolButton click={this.addToString} value={3} />
                    </div>
                    <div className="col">
                        <SymbolButton className="operator" click={this.addToString} value={'+'} />

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <SymbolButton className="operator" click={this.addToString} value={'('} />
                    </div>
                    <div className="col">
                    <SymbolButton click={this.addToString} value={'0'} />
                    </div>
                    <div className="col">
                        <SymbolButton click={this.addToString} value={'.'} />
                    </div>
                    <div className="col">
                        <SymbolButton className="operator" click={this.addToString} value={')'} />
                    </div>
                </div>
                <SymbolButton className="equals" click={this.createNewExpression} value = {'='} />
                </div>
            </div>
        );
    }


}

export default Calculator;