import {Component} from 'react';
import {Button} from 'react-bootstrap';

class ButtonCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: false
        }
    }
    IncrementItem = () => {
        this.setState({clicks: this.state.clicks + 1});
        console.log(this.state)
    }

    DecrementItem = () => {
        this.setState({clicks: this.state.clicks - 1});
        console.log(this.state)
    }
    ToggleClick = () => {
        this.setState({show: !this.state.show});
        console.log(this.state)
    }
    render() {
        return (
            <>
                <Button onClick={this.IncrementItem} variant="primary">Increment By 1</Button>
                <Button onClick={this.DecrementItem} variant="secondary">Decrement by 1</Button>
                <Button onClick={this.ToggleClick} variant="success">
                    {this.state.show ? 'Hide Number' : 'Show Number'}
                </Button>
                {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
            </>
        )
    }
}

export default ButtonCount;