import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () =>{
        this.setState({ count: this.state.count - 1});
    };

    render() {
        return (
            <div style={styles.counter}>
            <h2>Счетчик: {this.state.count}</h2>
            <button onClick={this.increment} style={styles.button}>Увеличить</button>
            <button onClick={this.decrement} style={styles.button}>Уменьшить</button>
            </div>
        )
    }
}

const styles = {
    counter: {
      padding: '20px',
      margin: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '5px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    button: {
      margin: '5px',
      padding: '10px 15px',
      fontSize: '16px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      color: 'white',
    },
  };
  

export default Counter;