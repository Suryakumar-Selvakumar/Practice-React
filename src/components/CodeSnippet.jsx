import styled from "styled-components";
import { Wrapper as AsideWrapper } from "./Aside";

export function CodeSnippet({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.pre`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 0;

  ${AsideWrapper} & {
    font-size: 0.875rem;
    background-color: green;
  }
`;
