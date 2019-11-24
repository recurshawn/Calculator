import React from 'react';
import SymbolButton from './SymbolButton.js';
import Screen from './Screen.js';

class Calculator extends React.Component {

    state = {
        string: '2+2*2/2',
        answer: 0
    };

    calculation = () =>
    {
      if(this.state.string.slice(-1)!=='+' && this.state.string.slice(-1)!=='-' && this.state.string.slice(-1)!=='*' && this.state.string.slice(-1)!=='/' && this.state.string.slice(-1)!=='%')  
      {     
        const ans = eval(this.state.string);
        return ans;
      }
      return(this.state.answer);
    }

    addToString = (symb) => {
        if((this.state.string.slice(-1)!=='+' && this.state.string.slice(-1)!=='-' && this.state.string.slice(-1)!=='*' && this.state.string.slice(-1)!=='/' && this.state.string.slice(-1)!=='%') || (symb!=='+' && symb!=='-' && symb!=='*' && symb!=='/' && symb!=='%'))
        {
            if(symb === '×') symb = '*';
            if(symb === '÷') symb = '/';
            if(symb === '−') symb = '-';
            let str = this.state.string;
            str = str + symb;
            this.setState({ string: str });
            const ans = eval(this.state.string);
            this.setState({answer: ans});
        }
    }

    render() {
        return (
            <div>
                <div className="buttonBoard">
                <Screen str={this.state.string} calculate = {this.calculation} />
                <div className="row">
                    <div className="col">
                    <SymbolButton className="power" value={'AC'} />
                    </div>
                    <div className="col">
                    <SymbolButton className="backspace" value={'⌫'} />
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
                </div>
            </div>
        );
    }


}

export default Calculator;