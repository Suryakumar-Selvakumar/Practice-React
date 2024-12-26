import styled from "styled-components";

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

export const StyledLink = styled(Link)`
  color: #bf4f74;
  font-weight: bold;
`;
