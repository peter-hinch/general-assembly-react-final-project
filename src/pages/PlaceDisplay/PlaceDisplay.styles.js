import styled from 'styled-components';

const StyledRatingBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: -0.75rem -0.75rem 0.75rem;
  padding: 0.125rem 0.75rem;
  scroll-margin-top: calc(var(--header-min-height) + 1rem);
  color: var(--color-white);
  background: var(--color-tertiary-40);
  border-radius: 0.75rem;
  margin-top: ${(props) => (props.top === true ? '1rem;' : '-0.75rem')};
`;

const StyledRatingBarH4 = styled.h4`
  display: inline;
  margin: 0 1.5rem 0 0;
`;

const StyledRatingBarLink = styled.a`
  color: var(--white);

  &:hover {
    text-decoration: underline;
  }
`;

export { StyledRatingBar, StyledRatingBarH4, StyledRatingBarLink };
