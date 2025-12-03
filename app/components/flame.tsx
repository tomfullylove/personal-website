import { useRef, useEffect } from "react";

export function Flame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(0, 16);
    ctx.scale(1, -1);

    const fps = 7;
    const interval = 1000 / fps;
    let prev = Date.now();
    let animationFrameId: number;

    const y = [2, 1, 0, 0, 0, 0, 1, 2];
    const max = [7, 9, 11, 13, 13, 11, 9, 7];
    const min = [4, 7, 8, 10, 10, 8, 7, 4];

    const flame = () => {
      const now = Date.now();
      const dif = now - prev;

      if (dif > interval) {
        prev = now;

        ctx.clearRect(0, 0, 360, 360);

        ctx.strokeStyle = "#d14234";
        let i = 0;
        for (let x = 4; x < 12; x++) {
          const a = Math.random() * (max[i] - min[i] + 1) + min[i];
          ctx.beginPath();
          ctx.moveTo(x + 0.5, y[i]);
          ctx.lineTo(x + 0.5, a);
          ctx.stroke();
          i++;
        }

        ctx.strokeStyle = "#f2a55f";
        let j = 1;
        for (let x = 5; x < 11; x++) {
          const a =
            Math.random() * (max[j] - 5 - (min[j] - 5) + 1) + (min[j] - 5);

          ctx.beginPath();
          ctx.moveTo(x + 0.5, y[j] + 1);
          ctx.lineTo(x + 0.5, a);
          ctx.stroke();
          j++;
        }

        ctx.strokeStyle = "#e8dec5";
        let k = 3;
        for (let x = 7; x < 9; x++) {
          const a =
            Math.random() * (max[k] - 9 - (min[k] - 9) + 1) + (min[k] - 9);

          ctx.beginPath();
          ctx.moveTo(x + 0.5, y[k]);
          ctx.lineTo(x + 0.5, a);
          ctx.stroke();
          k++;
        }
      }

      animationFrameId = requestAnimationFrame(flame);
    };

    flame();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={16}
      height={16}
      className="w-[360px] h-[360px] [image-rendering:pixelated] absolute"
    />
  );
}
