import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  flex-shrink: 0;
  box-sizing: border-box;
  position: sticky;
  z-index: 1;
  top: 0;
  padding: 1rem 1.75rem;
  min-height: var(--header-min-height);
  background: var(--color-tertiary-40);
  box-shadow: var(--shadow-on-secondary);
`;

const StyledNavLinksUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledNavNavLink = styled(NavLink)`
  color: var(--color-white);
`;

export { StyledHeader, StyledNavLinksUl, StyledNavNavLink };
