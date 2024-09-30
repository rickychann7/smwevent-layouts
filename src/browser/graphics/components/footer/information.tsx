/** @jsxImportSource @emotion/react */
import { useReplicant } from '@nodecg/react-hooks';
import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Announce } from '../../../../types/schemas';
import { css } from '@emotion/react';

const fadeContainerStyle = css`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const fadeStyles = css`
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in;
  }
`;

export const InformationFader = () => {
  const [announce] = useReplicant<Announce>('announce');
  const [infoIndex, setInfoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (announce) {
        setInfoIndex((prevIndex) => (prevIndex + 1) % announce.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (announce) {
    return (
      <TransitionGroup>
        <CSSTransition key={infoIndex} timeout={500} classNames="fade">
          <div css={[fadeContainerStyle, fadeStyles]}>{announce[infoIndex]}</div>
        </CSSTransition>
      </TransitionGroup>
    );
  } else {
    return <p>No Data</p>;
  }
};
