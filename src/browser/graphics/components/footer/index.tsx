import { InformationFader } from './information';
import { css } from '@emotion/react';
import { Clock } from './clock';

const footerStyle = css`
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0px;
  left: 0;
  font-weight: 900;
  font-family: 'M PLUS 1 Variable';
  font-size: 34px;
  line-height: 45px;
  background-color: #202020;
  color: #d9d9d9;
  overflow: hidden;
`;

const leftStyle = css`
  margin-left: 20px;
  padding-bottom: 47px;
`;

const rightStyle = css`
  margin-right: 20px;
  font-size: 38px;
`;

export const Footer = () => {
  return (
    <div css={footerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div css={leftStyle}>
          <InformationFader />
        </div>
        <div css={rightStyle}>
          <Clock></Clock>
        </div>
      </div>
    </div>
  );
};
