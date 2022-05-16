import styled from 'styled-components';
import imgHero from './../../assets/brooke-cagle-LCcFI_26diA-unsplash.jpg';

export const StyledHeroImage = styled.div`
  margin: -1.5rem -1.5rem 0;
  padding: 2.25rem 1.5rem 1.5rem;
  aspect-ratio: 1.5 / 1;
  background: no-repeat url(${imgHero});
  background-size: 100%;
  border-radius: 1.5rem 1.5rem 0 0;
`;

export const StyledHeroHeaders = styled.div`
  color: white;
`;

export const StyledImageAttribution = styled.a`
  font-size: 80%;
  color: var(--color-neutral-variant-30);

  &:hover {
    text-decoration: underline;
  }
`;
