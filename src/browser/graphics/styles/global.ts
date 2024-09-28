import { css } from '@emotion/react';
import '@fontsource-variable/m-plus-1';

const globalStyle = css`
  font-family: 'M PLUS 1 Variable';
`;

const widgetStyle = css`
  background-color: rgba(0, 0, 0);
  opacity: 0.2;
  color: #fff;
  border: 5px solid #fff;
`;

const temporaryBackground = css`
  background-color: lightgreen;
`;

export { globalStyle, widgetStyle, temporaryBackground };
