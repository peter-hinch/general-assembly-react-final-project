import { createGlobalStyle } from 'styled-components';
import imgAboriginalFlag from './../assets/aboriginal-flag.svg';

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

  header,
  main,
  footer {
    flex-shrink: 0;
  }

  header .container {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 0.75rem;
    width: 57rem;
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

  header {
    box-sizing: border-box;
    position: sticky;
    z-index: 1;
    top: 0;
    padding: 1rem 1.75rem;
    min-height: var(--header-min-height);
    background: var(--color-tertiary-40);
    box-shadow: var(--shadow-on-secondary);
  }

  header nav .nav-links {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  header nav .nav-links a {
    color: var(--color-white);
  }

  header nav .nav-home,
  header nav .nav-search,
  header nav .nav-link {
    display: inline-block;
    padding-right: 1rem;
  }

  header nav .nav-search input[type="text"] {
    position: relative;
    bottom: 0.25rem;
    width: 10rem;
    height: 1.75rem;
    padding: 0 0.75rem;
    border: 0;
    border-radius: 1.5rem;
  }

  header nav .nav-home h1 {
    margin: 0;
    padding: 0;
    font-size: 1.75rem;
    line-height: 1.75rem;
  }

  main {
    min-height: calc(100vh - var(--header-min-height) - 2rem);
    flex-grow: 1;
    margin-bottom: -2.5rem;
  }

  main .rating-bar {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: -0.75rem -0.75rem 0.75rem;
    padding: 0.125rem 0.75rem;
    color: var(--color-white);
    background: var(--color-tertiary-40);
    border-radius: 0.75rem;
  }

  main .rating-bar .rating-lead h4 {
    display: inline;
    margin: 0 1.5rem 0 0;
  }

  main .rating-bar .rating-lead .star-rating {
    display: inline;
  }

  main .rating-bar a.rating-link {
    color: var(--white);
  }  

  main .rating-bar a.rating-link:hover {
    text-decoration: underline;
  } 

  main .details-pane {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0.75rem -0.75rem 1.75rem;
    padding: 0.75rem;
    color: var(--color-neutral-variant-30);
    background: var(--color-neutral-variant-90);
    border-radius: 0.75rem;
  }

  main .details-pane .contact-info {
    margin: 0.5rem 0 1rem;
    width: 100%;
  }

  main .details-pane .contact-info span {
    margin-right: 2rem;
  }

  main .details-pane .additional-info {
    display: flex;
    flex-direction: row;
    width: 100%;
    background: var(--color-neutral-variant-80);
    border-radius: 0.25rem;
  }

  main .details-pane .additional-info .place-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }

  main .details-pane .additional-info .place-images img {
    display: block;
    width: 100%;
    border-radius: 0.25rem 0 1.5rem 0;
  }

  main .details-pane .additional-info .place-images small a {
    color: var(--color-neutral-variant-30);
  }

  main .details-pane .additional-info .place-images small a:hover {
    text-decoration: underline;
  }

  main .details-pane .additional-info .opening-hours {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    width: 50%;
  }

  main .details-pane .additional-info .opening-hours ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  main .details-pane .google-attribution {
    display: flex;
    justify-content: space-between;
    margin: 0.75rem -0.75rem -0.75rem;
    padding: 0.5rem 0.75rem;
    width: calc(100% + 1.5rem);
    color: var(--color-neutral-variant-90);
    background: var(--color-neutral-variant-30);
    border-radius: 0 0 0.75rem 0.75rem;
  }

  main .details-pane .google-attribution a {
    color: var(--color-white);
  }

  main .details-pane .google-attribution a:hover {
    text-decoration: underline;
  }

  main .details-pane .google-attribution img {
    width: 8.9375rem;
    height: 1.125rem;
  }

  main #rating-details,
  main #rating-your-say {
    margin-top: 1rem;
    scroll-margin-top: calc(var(--header-min-height) + 1rem);
  }

  main ul.user-score-list {
    display: flex;   
    overflow-x: auto;
    list-style-type: none;
    padding: 0;
  }

  main li.user-score {
    position: relative;
    box-sizing: border-box;
    flex-shrink: 0;
    margin: 0.5rem 1rem 0.5rem 0.5rem;
    padding: 1.15rem 0.75rem 0.75rem 2.75rem;
    width: 20rem;
    height: 6.25rem;
    background: var(--color-tertiary-90);
    border-radius: 0.25rem;
  }

  main li.user-score h6 {
    position: absolute;
    top: 0.75rem;
    left: -0.5rem;
    margin: 0;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    width: 1rem;
    color: var(--color-white);
    background: var(--color-tertiary-40);
    border-radius: 0.25rem 0.25rem 1.5rem 0.25rem;
  }
  
  main li.user-score p {
    margin: 0;
    height: 4.5rem;
    white-space: normal;
    overflow: hidden;
    color: var(--color-tertiary-10);
  }

  main form.add-ratings {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  main .add-rating-category {
    box-sizing: border-box;
    width: calc(50% - 0.5rem);
  }

  main .add-rating-mini-form {
    position: relative;
    flex-shrink: 0;
    padding: 1.35rem 0.75rem 0.75rem 2.75rem;
    min-height: 6rem;
    background: var(--color-tertiary-90);
    border-radius: 0.25rem;
  }

  main .add-rating-mini-form .rating-value {
    position: absolute;
    top: 0.75rem;
    left: -0.5rem;
    margin: 0;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    width: 1rem;
    color: var(--color-white);
    background: var(--color-tertiary-40);
    border-radius: 0.25rem 0.25rem 1.5rem 0.25rem;
  }

  main .add-rating-mini-form label {
    display: block;
    color: var(--color-tertiary-10);
  }

  main .add-rating-mini-form input[type="range"] {
    margin: 0.5rem 0 1rem 0;
    width: 100%;
  }

  /* Begin custom range input styling */
  /* Reference: https://range-input-css.netlify.app/ */

  /* Baseline, reset styles */
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
  }

  /* Removes default focus */
  input[type="range"]:focus {
    outline: none;
  }

  /* Chrome, Safari, Opera and Edge Chromium styles */
  /* Slider track */
  input[type="range"]::-webkit-slider-runnable-track {
    background-color: #b7dfd0;
    border-radius: 0.5rem;
    height: 0.5rem;
  }

  /* Slider thumb */
  input[type="range"]::-webkit-slider-thumb {
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
  input[type="range"]::-moz-range-track {
    background-color: #b7dfd0;
    border-radius: 0.5rem;
    height: 0.5rem;
  }

  /* Slider thumb */
  input[type="range"]::-moz-range-thumb {
    background-color: #008c6b;
    border: none; /* Removes extra border that FF applies */
    border-radius: 0.25rem 0.25rem 0.75rem 0.25rem;
    height: 1.5rem;
    width: 1rem;
  }

  /* End custom range input styling */

  main .add-rating-mini-form textarea {
    margin-top: 0.25rem;
    width: calc(100% - 0.25rem);
    resize: none;
    color: var(--color-neutral-10);
    border: none;
    border-radius: 0.25rem;
  }

  main form.add-ratings .ratings-buttons {
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;
    width: 100%;
  }

  main form.add-ratings button {
    margin: 1rem 0 1rem 1rem;
    padding: 0.75rem 1.5rem;
    border: 0;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  main form.add-ratings button.add-rating-reset {
    color: var(--color-neutral-variant-95);
    background: var(--color-neutral-variant-50);
  }

  main form.add-ratings button.add-rating-submit {
    color: var(--color-white);
    background: var(--color-primary-40);
  }

  /* Global Styles for map markers rendered as a content string. */

  #map .map-marker h5 {
    margin: 0;
  }
`;

export default GlobalStyle;
