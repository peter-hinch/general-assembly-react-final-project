import styled from 'styled-components';

const StyledRatingCategory = styled.div`
  box-sizing: border-box;
  width: calc(50% - 0.5rem);
`;

const StyledRatingMiniForm = styled.div`
  position: relative;
  flex-shrink: 0;
  padding: 1.35rem 0.75rem 0.75rem 2.75rem;
  min-height: 6rem;
  background: var(--color-tertiary-90);
  border-radius: 0.25rem;
`;

const StyledRatingMiniFormValue = styled.h6`
  position: absolute;
  top: 0.75rem;
  left: -0.5rem;
  margin: 0;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  width: 1rem;
  color: var(--color-white);
  background: var(--color-tertiary-40);
  border-radius: 0.25rem 0.25rem 1.5rem 0.25rem;
`;

const StyledRatingMiniFormLabel = styled.label`
  display: block;
  color: var(--color-tertiary-10);
`;

const StyledRatingMiniFormRange = styled.input`
  margin: 0.5rem 0 1rem 0;
  width: 100%;

  /* Styling reset */
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;

  /* Remove default focus */
  &:focus {
    outline: none;
  }

  /* Chrome, Safari, Opera and Edge Chromium styles */
  /* Slider track */
  &::-webkit-slider-runnable-track {
    background-color: #b7dfd0;
    border-radius: 0.5rem;
    height: 0.5rem;
  }

  /* Slider thumb */
  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -8px; /* Centers thumb on the track */
    background-color: #008c6b;
    border-radius: 0.25rem 0.25rem 0.75rem 0.25rem;
    height: 1.5rem;
    width: 1rem;
  }

  /* Firefox styles */
  /* Slider track */
  &::-moz-range-track {
    background-color: #b7dfd0;
    border-radius: 0.5rem;
    height: 0.5rem;
  }

  /* Slider thumb */
  &::-moz-range-thumb {
    background-color: #008c6b;
    border: none; /* Removes extra border that FF applies */
    border-radius: 0.25rem 0.25rem 0.75rem 0.25rem;
    height: 1.5rem;
    width: 1rem;
  }
`;

const StyledRatingMiniFormTextarea = styled.textarea`
  margin-top: 0.25rem;
  width: calc(100% - 0.25rem);
  resize: none;
  color: var(--color-neutral-10);
  border: none;
  border-radius: 0.25rem;
`;

export {
  StyledRatingCategory,
  StyledRatingMiniForm,
  StyledRatingMiniFormValue,
  StyledRatingMiniFormLabel,
  StyledRatingMiniFormRange,
  StyledRatingMiniFormTextarea
};
