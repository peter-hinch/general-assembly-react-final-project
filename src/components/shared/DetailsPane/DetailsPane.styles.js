import styled from 'styled-components';

const StyledDetailsPane = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0.75rem -0.75rem 1.75rem;
  padding: 0.75rem;
  color: var(--color-neutral-variant-30);
  background: var(--color-neutral-variant-90);
  border-radius: 0.75rem;
`;

const StyledContactInfo = styled.div`
  margin: 0.5rem 0 1rem;
  width: 100%;
`;

const StyledSpan = styled.span`
  margin-right: 2rem;
`;

const StyledAdditionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: var(--color-neutral-variant-80);
  border-radius: 0.25rem;
`;

const StyledPlaceImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const StyledPlaceImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 0.25rem 0 1.5rem 0;
`;

const StyledPlaceImageLink = styled.a`
  color: var(--color-neutral-variant-30);

  &:hover {
    text-decoration: underline;
  }
`;

const StyledOpeningHours = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 50%;
`;

const StyledOpeningHoursUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledGoogleAttribution = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.75rem -0.75rem -0.75rem;
  padding: 0.5rem 0.75rem;
  width: calc(100% + 1.5rem);
  color: var(--color-neutral-variant-90);
  background: var(--color-neutral-variant-30);
  border-radius: 0 0 0.75rem 0.75rem;
`;

const StyledGoogleAttributionLink = styled.a`
  color: var(--color-white);

  &:hover {
    text-decoration: underline;
  }
`;

const StyledGoogleAttributionImage = styled.img`
  width: 8.9375rem;
  height: 1.125rem;
`;

const Styled = styled.div``;

export {
  StyledDetailsPane,
  StyledContactInfo,
  StyledSpan,
  StyledAdditionalInfo,
  StyledPlaceImages,
  StyledPlaceImage,
  StyledPlaceImageLink,
  StyledOpeningHours,
  StyledOpeningHoursUl,
  StyledGoogleAttribution,
  StyledGoogleAttributionLink,
  StyledGoogleAttributionImage
};
