/*
    TODO Create a Calc class to generate the buttons
    TODO Add on onClick to display the buttons to the screen

    ! Testing classes vs array / objects
*/

class Base extends React.Component {
  reset = () => {
    this.setState(() => ({
      display: ''
    }));
  };

  resetZero = () => {
    this.setState(() => ({
      display: '0'
    }));
  };

  numPress = num => {
    if (this.state.display === '0') {
      this.reset();
    }

    this.setState(prevState => ({
      display: prevState.display + num
    }));
  };

  addition = () => {
    this.setState(() => ({
      num1: this.state.display
    }));
    this.resetZero();
  };

  equals = () => {
    this.setState(() => ({
      num2: this.state.display,
      display: parseInt(this.state.num1) + parseInt(this.state.num2)
    }));
  };

  calc = [
    {
      symbol: 'C',
      style: 'grey'
    },
    {
      symbol: '+ / -',
      style: 'grey',
      onclick: ''
    },
    {
      symbol: '%',
      style: 'grey',
      onclick: ''
    },
    {
      symbol: '÷',
      style: 'orange',
      onclick: ''
    },
    {
      symbol: '7',
      style: 'black',
      onclick: () => {
        this.numPress('7');
      }
    },
    {
      symbol: '8',
      style: 'black',
      onclick: () => {
        this.numPress('8');
      }
    },
    {
      symbol: '9',
      style: 'black',
      onclick: () => {
        this.numPress(9);
      }
    },
    {
      symbol: 'X',
      style: 'orange',
      onclick: ''
    },
    {
      symbol: '4',
      style: 'black',
      onclick: () => {
        this.numPress(4);
      }
    },
    {
      symbol: '5',
      style: 'black',
      onclick: () => {
        this.numPress(5);
      }
    },
    {
      symbol: '6',
      style: 'black',
      onclick: () => {
        this.numPress(6);
      }
    },
    {
      symbol: '-',
      style: 'orange',
      onclick: ''
    },
    {
      symbol: '1',
      style: 'black',
      onclick: () => {
        this.numPress(1);
      }
    },
    {
      symbol: '2',
      style: 'black',
      onclick: () => {
        this.numPress(2);
      }
    },
    {
      symbol: '3',
      style: 'black',
      onclick: () => {
        this.numPress(3);
      }
    },
    {
      symbol: '+',
      style: 'orange',
      onclick: () => {
        this.addition();
      }
    },
    {
      symbol: '0',
      style: 'black zero',
      onclick: () => {
        this.numPress(0);
      }
    },
    {
      symbol: '.',
      style: 'black',
      onclick: ''
    },
    {
      symbol: '=',
      style: 'orange',
      onclick: () => {
        this.equals();
      }
    }
  ];
  state = {
    display: '0',
    num1: '0',
    num2: '0'
  };

  render() {
    return (
      <>
        <div class='display'>{this.state.display}</div>
        <div class='buttons'>
          {this.calc.map(calcArray => {
            return (
              <button className={calcArray.style} onClick={calcArray.onclick}>
                {calcArray.symbol}
              </button>
            );
          })}
        </div>
      </>
    );
  }
}

ReactDOM.render(<Base />, document.getElementById('root'));
