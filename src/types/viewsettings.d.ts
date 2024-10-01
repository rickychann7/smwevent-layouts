export type ViewSettings = {
  player: number;
  width: number;
  height: number;
  initPos: {
    x: number;
    y: number;
  };
  margin: {
    x: number;
    y: number;
  };
  customPos?: {
    x: number;
    y: number;
  };
};
