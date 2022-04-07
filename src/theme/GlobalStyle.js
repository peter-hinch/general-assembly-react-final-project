import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Define CSS variables for theme colours */
  :root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-primary-10: #002757;
    --color-primary-20: #004275;
    --color-primary-30: #005f95;
    --color-primary-40: #007db7;
    --color-primary-50: #359dd9;
    --color-primary-60: #6eb0e1;
    --color-primary-70: #96c3e9;
    --color-primary-80: #bbd7f0;
    --color-primary-90: #dde8f8;
    --color-primary-95: #eef5fc;
    --color-primary-99: #fcfdfe;
    --color-secondary-10: #002141;
    --color-secondary-20: #003558;
    --color-secondary-30: #004b70;
    --color-secondary-40: #106389;
    --color-secondary-50: #367ba3;
    --color-secondary-60: #6594b5;
    --color-secondary-70: #8daec7;
    --color-secondary-80: #b3c8da;
    --color-secondary-90: #d9e3ec;
    --color-secondary-95: #ecf1f5;
    --color-secondary-99: #fbfcfd;
    --color-tertiary-10: #002d14;
    --color-tertiary-20: #004b2f;
    --color-tertiary-30: #006b4c;
    --color-tertiary-40: #008c6b;
    --color-tertiary-50: #39af8c;
    --color-tertiary-60: #6abfa2;
    --color-tertiary-70: #91d0b9;
    --color-tertiary-80: #87dfd0;
    --color-tertiary-90: #dbefe7;
    --color-tertiary-95: #edf7f3;
    --color-tertiary-99: #fbfdfd;
    --color-neutral-10: #131313;
    --color-neutral-20: #1e1e1e;
    --color-neutral-30: #2a2a2a;
    --color-neutral-40: #363636;
    --color-neutral-50: #434343;
    --color-neutral-60: #656565;
    --color-neutral-70: #898989;
    --color-neutral-80: #afafaf;
    --color-neutral-90: #d6d6d6;
    --color-neutral-95: #eaeaea;
    --color-neutral-99: #fbfbfb;
    --color-neutral-variant-10: #0c1c27;
    --color-neutral-variant-20: #21303c;
    --color-neutral-variant-30: #364653;
    --color-neutral-variant-40: #4d5c6a;
    --color-neutral-variant-50: #647482;
    --color-neutral-variant-60: #818e9a;
    --color-neutral-variant-70: #a0a9b2;
    --color-neutral-variant-80: #bfc5cb;
    --color-neutral-variant-90: #dee2e5;
    --color-neutral-variant-95: #eef0f2;
    --color-neutral-variant-99: #fcfcfc;
    --color-error-10: #620000;
    --color-error-20: #800000;
    --color-error-30: #9f0011;
    --color-error-40: #bf1726;
    --color-error-50: #e03d3d;
    --color-error-60: #ed6a60;
    --color-error-70: #f79186;
    --color-error-80: #feb6ad;
    --color-error-90: #ffdbd5;
    --color-error-95: #ffedea;
    --color-error-99: #fffbfb;
    --header-min-height: 4rem;
    --shadow-on-secondary: 0px 4px 4px #b3c8da, 0px 4px 16px #b3c8da;
    --inset-on-secondary: inset 0px 4px 4px #8daec7, inset 0px 4px 16px #8daec7;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: var(--neutral-10);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--color-secondary-90);
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0.75rem 0 1rem;
  }

  h1,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }

  h1 {
    font-size: 2.25em;
    line-height: 3.375rem;
  }

  h2 {
    font-size: 2em;
    line-height: 3rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.75em;
    line-height: 2.625rem;
  }

  h4 {
    font-size: 1.5em;
    line-height: 2.25rem;
  }

  h5 {
    font-size: 1.125em;
    line-height: 1.687rem;
  }

  h6 {
    font-size: 0.875em;
    line-height: 1.316rem;
  }

  p {
    font-size: 1em;
    line-height: 1.5rem;
  }

  a {
    text-decoration: none;
  }

  main {
    flex-shrink: 0;
    min-height: calc(100vh - var(--header-min-height) - 2rem);
    flex-grow: 1;
    margin-bottom: -2.5rem;
  }

  main.container {
    box-sizing: border-box;
    align-self: center;
    margin: 1rem;
    padding: 1.5rem;
    width: 57rem;
    border-radius: 1.5rem;
    background: var(--color-neutral-99);
    box-shadow: var(--shadow-on-secondary);
  }

  /* Global Styles for map markers in Map component which are rendered from a */
  /* content string. */

  #map .map-marker h5 {
    margin: 0;
  }
`;

export default GlobalStyle;
