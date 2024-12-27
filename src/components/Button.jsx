import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
`;

Button.defaultProps = {
  theme: {
    fg: "#BF4F74",
    bg: "white",
  },
};
