import styled from "styled-components";

function Aside({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export const Wrapper = styled.aside`
  background-color: aqua;
  font-size: 1rem;
`;

export default Aside;
