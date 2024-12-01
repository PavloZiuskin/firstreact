import {Component} from 'react';
import './Counter.css';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            multiplier: 1,
        }
    }
    handleIncrement = () => {
        this.setState(
            {counter: this.state.counter + this.state.multiplier},
        )
    }
    handleDecrement = () => {
        this.setState(
            {counter: this.state.counter - this.state.multiplier},
        )
    }
    handelChangeMultiplier=(newValue)=>{
        this.setState({
            multiplier: newValue,
        })
    }
    handelReset=()=>{
        this.setState({
            counter: 0,
            multiplier: 1,
        })

    }

    render() {
        return (
            <div className="counter">
                <h1 className="counter-title">Лічильник</h1>
                <div className="counter-text">
                    <span className="counter-span">Значення що додається чи віднімається: {this.state.multiplier}</span>
                    <span className="counter-span">{this.state.counter}</span>
                </div>

                <div className="counter-buttons">
                    <button className="counter-button button-increment"
                            onClick={this.handleIncrement}
                    >Додати
                    </button>
                    <button className="counter-button button-decrement"
                            onClick={this.handleDecrement}
                    >Відняти
                    </button>
                    <button className="counter-button button-reset"
                            onClick={this.handelReset}>Скинути значення
                    </button>
                </div>

                <div className="counter-buttons">
                    <button className="counter-button button-multiplier"
                            onClick={() => {
                                this.handelChangeMultiplier(1)
                            }}
                    >1
                    </button>
                    <button className="counter-button button-multiplier"
                            onClick={() => {
                                this.handelChangeMultiplier(5)
                            }}
                    >5
                    </button>
                    <button className="counter-button button-multiplier"
                            onClick={() => {
                                this.handelChangeMultiplier(10)
                            }}
                    >10
                    </button>
                </div>

            </div>
        )
    }
}

export default Counter;