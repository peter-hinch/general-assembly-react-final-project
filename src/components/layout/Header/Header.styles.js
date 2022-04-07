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

const StyledHeaderContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 0.75rem;
  width: 57rem;
`;

const StyledNavLinksUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledNavLinksLi = styled.li`
  display: inline-block;
  padding-right: 1rem;
`;

const StyledNavLinksH1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.75rem;
  line-height: 1.75rem;
`;

const StyledNavNavLink = styled(NavLink)`
  color: var(--color-white);
`;

export {
  StyledHeader,
  StyledHeaderContainer,
  StyledNavLinksUl,
  StyledNavLinksLi,
  StyledNavNavLink,
  StyledNavLinksH1
};
