import styled from 'styled-components';
import imgHero from './../../assets/brooke-cagle-LCcFI_26diA-unsplash.jpg';

export const StyledHeroImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: -1.5rem -1.5rem 0;
  padding: 1.5rem 1.5rem 0.5rem;
  aspect-ratio: 1.5 / 1;
  color: var(--color-white);
  background: no-repeat url(${imgHero});
  background-size: 100%;
  border-radius: 1.5rem 1.5rem 0 0;
`;

export const StyledImageAttribution = styled.a`
  font-size: 80%;
  color: var(--color-neutral-90);
  align-self: flex-end;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledInstructionsSection = styled.section`
  margin: 0 -1.5rem;
  padding: 1.5rem;
  color: var(--color-white);
  background: var(--color-tertiary-40);

  & a {
    color: var(--color-white);
  }
  & a:hover {
    text-decoration: underline;
  }
`;
