import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { css } from '@emotion/react';

const fadeContainerStyle = css`
  font-family: 'M PLUS 1 Variable';
  position: absolute;
  bottom: 2px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const fadeStyles = css`
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 1.5s;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 1.5s;
  }
`;

export const InformationFader = () => {
  const infoArray = ['FIRST TEST ARRAY CONTENT', 'SECOND TEST ARRAY CONTENT', 'THIRD TEST ARRAY CONTENT'];
  const [infoIndex, setInfoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setInfoIndex((prevIndex) => (prevIndex + 1) % infoArray.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition key={infoIndex} timeout={500} classNames="fade">
        <div css={[fadeContainerStyle, fadeStyles]}>{infoArray[infoIndex]}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};
