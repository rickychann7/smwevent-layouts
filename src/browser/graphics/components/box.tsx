import { CSSProperties } from 'react';

export const Box = (props: { style: CSSProperties }) => {
  return <div style={{ ...props.style }}>解説席</div>;
};
