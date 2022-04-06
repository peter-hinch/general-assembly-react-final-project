import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  box-sizing: border-box;
  position: relative;
  align-self: center;
  margin: 1rem 0 4.5rem;
  padding: 1.5rem;
  width: calc(57rem - 1.5rem);
  background: var(--color-secondary-90);
  border-radius: 0.75rem 0.75rem 3rem 3rem;
  box-shadow: var(--shadow-on-secondary);

  &:before {
    position: absolute;
    z-index: -1;
    top: -0.75rem;
    left: -0.75rem;
    width: calc(100% + 1.5rem);
    height: calc(100% + 1.5rem);
    content: '';
    color: var(--color-secondary-10);
    background: var(--color-secondary-80);
    border-radius: 1.5rem 1.5rem 3.75rem 3.75rem;
    box-shadow: var(--inset-on-secondary);
  }
`;

const StyledNav = styled.nav`
  margin-bottom: 0.75rem;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  column-gap: 1.5rem;
  margin-top: 0;
  padding-left: 0;
  height: 3rem;
  list-style-type: none;
`;

const StyledNavLink = styled(NavLink)`
  color: var(--color-secondary-40);

  &:hover {
    text-decoration: underline;
    color: var(--color-secondary-30);
  }

  .active {
    color: var(--color-secondary-20);
  }
`;

export { StyledFooter, StyledNav, StyledUl, StyledNavLink };
