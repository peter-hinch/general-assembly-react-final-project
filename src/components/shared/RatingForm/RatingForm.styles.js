import styled from 'styled-components';

const StyledRatingForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledRatingFormButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  width: 100%;
`;

const StyledRatingFormButton = styled.button`
  margin: 1rem 0 1rem 1rem;
  padding: 0.75rem 1.5rem;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  color: ${(props) =>
    props.type === 'primary'
      ? 'var(--color-white)'
      : 'var(--color-neutral-variant-95)'};
  background: ${(props) =>
    props.type === 'primary'
      ? 'var(--color-primary-40)'
      : 'var(--color-neutral-variant-50)'};
`;

export { StyledRatingForm, StyledRatingFormButtonsDiv, StyledRatingFormButton };
