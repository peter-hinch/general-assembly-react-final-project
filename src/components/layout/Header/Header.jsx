import * as s from './Header.styles';
import PlaceSearch from '../PlaceSearch/PlaceSearch';

const Header = ({ currentPlace, handleCurrentPlace }) => {
  return (
    <s.StyledHeader>
      <s.StyledHeaderContainer>
        <nav>
          <s.StyledNavLinksUl>
            <s.StyledNavLinksLi className="nav-home">
              <s.StyledNavNavLink to="/">
                <s.StyledNavLinksH1>RemoteSpot</s.StyledNavLinksH1>
              </s.StyledNavNavLink>
            </s.StyledNavLinksLi>
            <s.StyledNavLinksLi className="nav-search">
              <PlaceSearch
                currentPlace={currentPlace}
                handleCurrentPlace={handleCurrentPlace}
              />
            </s.StyledNavLinksLi>
            <s.StyledNavLinksLi className="nav-link">
              <s.StyledNavNavLink to="/map">Map</s.StyledNavNavLink>
            </s.StyledNavLinksLi>
          </s.StyledNavLinksUl>
        </nav>
      </s.StyledHeaderContainer>
    </s.StyledHeader>
  );
};

export default Header;
