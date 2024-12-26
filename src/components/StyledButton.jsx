import styled from "styled-components";

const StyledButton = styled.a`
  padding: 0.75em 1em;
  background-color: ${({ primary }) => (primary ? "#07c" : "#333")};
  color: white;
  display: inline-flex;
  text-decoration: none;
  border-radius: 0.25em;

  &hover {
    background-color: ${({ primary }) => (primary ? "#09c" : "#111")};
  }
`;

export default StyledButton;
