import styled from "styled-components";
import { Component, createRef } from "react";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #bf4f74;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef(null);
  }

  render() {
    return (
      <Input
        ref={this.inputRef}
        placeholder="Hover to focus!"
        onMouseEnter={() => this.inputRef.current.focus()}
      />
    );
  }
}

export { Form };
