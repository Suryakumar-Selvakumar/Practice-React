import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "text",
  $size: props.$size || "1em",
}))`
  border: 2px solid #bf4f74;
  margin: ${(props) => props.$size};
  padding: ${(props) => props.$size};
`;

const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  border: 2px solid aqua;
`;

export { Input, PasswordInput };
