import styled from "styled-components";

export function Backdrop({ opacity, color, children }) {
  return (
    <Wrapper style={{ "--color": color, "--opacity": opacity }}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  opacity: var(--opacity, 0.75);
  background-color: var(--color, var(--color-gray-900));
`;
