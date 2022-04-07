import styled from 'styled-components';

const StyledUserScoresUl = styled.ul`
  display: flex;
  overflow-x: auto;
  list-style-type: none;
  padding: 0;
`;

const StyledUserScoresLi = styled.li`
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  margin: 0.5rem 1rem 0.5rem 0.5rem;
  padding: 1.15rem 0.75rem 0.75rem 2.75rem;
  width: 20rem;
  height: 6.25rem;
  background: var(--color-tertiary-90);
  border-radius: 0.25rem;
`;

const StyledUserScoresH6 = styled.h6`
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

const StyledUserScoresP = styled.p`
  margin: 0;
  height: 4.5rem;
  white-space: normal;
  overflow: hidden;
  color: var(--color-tertiary-10);
`;

export {
  StyledUserScoresUl,
  StyledUserScoresLi,
  StyledUserScoresH6,
  StyledUserScoresP
};
