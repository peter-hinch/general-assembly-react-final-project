import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import imgAboriginalFlag from './../../../assets/aboriginal-flag.svg';

const StyledFooter = styled.footer`
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
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

const StyledCopyrightInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  min-height: 3.75rem;
`;

const StyledAcknowledgeCountry = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 -1.5rem -1.5rem;
  padding: 1.5rem 3rem;
  min-height: 5rem;
  color: var(--color-neutral-variant-80);
  background: var(--color-neutral-variant-30);
  border-radius: 0 0 3rem 3rem;
`;

const StyledAboriginalFlag = styled.div`
  min-width: 2.5rem;
  min-height: 1.5rem;
  margin-right: 1rem;
  background: url(${imgAboriginalFlag});
`;

export {
  StyledFooter,
  StyledNav,
  StyledUl,
  StyledNavLink,
  StyledCopyrightInfo,
  StyledAcknowledgeCountry,
  StyledAboriginalFlag
};
