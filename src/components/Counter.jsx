import { Component } from "react";
import styled from "styled-components";

const StyledCounter = styled.div`
  background-color: yellow;
`;

const Paragraph = styled.p`
  color: green;
`;

const Button = styled.button`
  background-color: blue;
`;

export default class Counter extends Component {
  state = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <StyledCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
      </StyledCounter>
    );
  }
}
