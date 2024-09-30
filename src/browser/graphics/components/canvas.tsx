import { useEffect, useRef } from 'react';
import bgImg from '../../../../tmp/bg.png';

interface ViewPortProps {
  slotNumber: number;
  firstSlotPosition: { x: number; y: number };
  slotSize: { width: number; height: number };
  margin: { x: number; y: number };
  customPos?: { x: number; y: number };
  debug?: boolean;
}

export const ViewCanvas: React.FC<ViewPortProps> = ({ slotNumber, firstSlotPosition, slotSize, margin, customPos }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bg = new Image();
    bg.src = bgImg;

    bg.onload = () => {
      let currentPos = { x: firstSlotPosition.x, y: firstSlotPosition.y };

      ctx.drawImage(bg, 0, 0, 1920, 1080);
      ctx.globalCompositeOperation = 'xor';

      for (let i = 0; i < slotNumber; i++) {
        ctx.fillStyle = 'black';
        ctx.fillRect(currentPos.x, currentPos.y, slotSize.width, slotSize.height);

        currentPos.x += customPos?.x ?? slotSize.width + margin.x;

        if (currentPos.x + slotSize.width + margin.x > 1920) {
          currentPos.x = firstSlotPosition.x;
          currentPos.y += slotSize.height + margin.y;
        }
      }

      ctx.globalCompositeOperation = 'source-over';
    };
  });

  return (
    <div>
      <canvas ref={canvasRef} width={1920} height={1080} />
    </div>
  );
};
