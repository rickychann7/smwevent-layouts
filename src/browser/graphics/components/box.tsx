import { CSSProperties } from 'react';

export const Box = (props: { style: CSSProperties; text?: string }) => {
  return <div style={{ ...props.style }}>{props.text}</div>;
};
