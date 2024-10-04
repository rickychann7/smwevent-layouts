import { useEffect, useRef } from 'react';
import bgImg from '../../../../tmp/bg.png';

interface ViewPortProps {
  slotNumber: number;
  firstSlotPosition: { x: number; y: number };
  slotSize: { width: number; height: number };
  margin: { x: number; y: number };
  customPos?: { x: number | undefined; y: number | undefined };
  focus?: boolean;
}

export const ViewCanvas: React.FC<ViewPortProps> = ({
  slotNumber,
  firstSlotPosition,
  slotSize,
  margin,
  customPos,
  focus,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bg = new Image();
    bg.src = bgImg;

    bg.onload = () => {
      let currentPos = {
        x: customPos?.x ?? firstSlotPosition.x,
        y: firstSlotPosition.y,
      };

      ctx.drawImage(bg, 0, 0, 1920, 1080);
      ctx.globalCompositeOperation = 'xor';
      ctx.fillStyle = 'black';

      if (focus) {
        ctx.fillRect(15, 25, 973, 553);

        for (let i = 0; i < slotNumber - 1; i++) {
          ctx.fillRect(currentPos.x, currentPos.y, slotSize.width, slotSize.height);

          currentPos.x += slotSize.width + margin.x;

          if (currentPos.x + slotSize.width > 1920) {
            if (i > 2) {
              currentPos.x = 1015;
              currentPos.y = 695;
            } else {
              currentPos.x = firstSlotPosition.x;
              currentPos.y += slotSize.height + margin.y;
            }
          }
        }
      } else {
        for (let i = 0; i < slotNumber; i++) {
          ctx.fillRect(currentPos.x, currentPos.y, slotSize.width, slotSize.height);

          currentPos.x += slotSize.width + margin.x;

          if (currentPos.x + slotSize.width > 1920) {
            currentPos.x = firstSlotPosition.x;
            currentPos.y += slotSize.height + margin.y;
          }
        }
      }

      ctx.globalCompositeOperation = 'source-over';
    };
  }, [slotNumber, firstSlotPosition, slotSize, margin, customPos]);

  return (
    <div>
      <canvas ref={canvasRef} width={1920} height={1080} />
    </div>
  );
};
