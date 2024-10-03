import React from 'react';
import { InformationFader } from './information';
import { css } from '@emotion/react';
import { Upcoming } from './upcoming';

const footerStyle = css`
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 900;
  font-family: 'M PLUS 1 Variable';
  font-size: 25px;
  line-height: 35px;
  background-color: #202020;
  color: #d9d9d9;
  overflow: hidden;
`;

const leftStyle = css`
  margin-left: 20px;
`;

const rightStyle = css`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const Footer: React.FC = () => {
  return (
    <div css={footerStyle}>
      <span css={leftStyle}>
        <InformationFader />
      </span>
      <span css={rightStyle}>
        <Upcoming></Upcoming>
      </span>
    </div>
  );
};
