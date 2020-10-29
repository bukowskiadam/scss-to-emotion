import { css } from 'emotion';

import basic from './basic';

const app = css`
  ${basic.app};
  
  background-color: lightcoral;
`;

export default {
    ...basic,
    app,
};
