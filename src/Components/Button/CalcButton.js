import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImportedButton from '../btn/Button';
import ImportedDisplay from '../display/Display';

class CalcButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: "",
            num2: "",
            sum: null,
            operation: "",
            numSet: false,
            show: false
        }
    }
    SetNum = (newValue) => {
        if (this.state.numSet !== true) {
            this.setState({ num1: this.state.num1 += newValue })
        } else {
            this.setState({ num2: this.state.num2 += newValue })
        }
    }
    setOperation = (newOperation) => {
        this.setState({ numSet: true })
        this.setState({ operation: newOperation })
    }
    QuickMath = () => {
        switch (this.state.operation) {
            case "+":
                this.setState({ sum: parseInt(this.state.num1) + parseInt(this.state.num2) })
                break;
            case "-":
                this.setState({ sum: parseInt(this.state.num1) - parseInt(this.state.num2) })
                break;
            case "/":
                this.setState({ sum: parseInt(this.state.num1) / parseInt(this.state.num2) })
                break;
            case "*":
                this.setState({ sum: parseInt(this.state.num1) * parseInt(this.state.num2) })
                break;
            case "C":
                this.setState({
                    num1: "",
                    num2: "",
                    sum: null,
                    operation: "",
                    numSet: false
                })
                break;
            default:
                break;

        }
    }
    render() {
        return (
            <>
                <Container className =" mt-5">
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ImportedDisplay message={this.state.num1} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ImportedDisplay message={this.state.operation} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ImportedDisplay message={this.state.num2} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ImportedDisplay message={this.state.sum} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ImportedButton onClick={this.SetNum} increment={1} />
                            <ImportedButton onClick={this.SetNum} increment={2} />
                            <ImportedButton onClick={this.SetNum} increment={3} />
                            <ImportedButton onClick={this.setOperation} increment={"+"} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ImportedButton onClick={this.SetNum} increment={4} />
                            <ImportedButton onClick={this.SetNum} increment={5} />
                            <ImportedButton onClick={this.SetNum} increment={6} />
                            <ImportedButton onClick={this.setOperation} increment={"-"} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ImportedButton onClick={this.SetNum} increment={7} />
                            <ImportedButton onClick={this.SetNum} increment={8} />
                            <ImportedButton onClick={this.SetNum} increment={9} />
                            <ImportedButton onClick={this.setOperation} increment={"/"} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ImportedButton onClick={this.QuickMath} increment={"="} />
                            <ImportedButton onClick={this.SetNum} increment={0} />
                            <ImportedButton onClick={this.QuickMath} increment={"C"} />
                            <ImportedButton onClick={this.setOperation} increment={"*"} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default CalcButton;