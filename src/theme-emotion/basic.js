import { css } from 'emotion';

const app = css`
  background-color: lightblue;
  font-weight: bold;
  padding: 3em;
  text-align: center;

  @media screen and (min-width: 768px) {
    background-color: lightgreen;
  }
`;

const button = css`
  margin: 0.5em 0 0.5em 1em;
`;

const buttonSelected = css`
  ${button};
  
  background-color: lightskyblue;
`;

export default {
    app,
    button,
    buttonSelected,
};
