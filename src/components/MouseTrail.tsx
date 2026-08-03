import { useEffect, useRef } from 'react';

export function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouseX = -100;
    let mouseY = -100;
    // Current position of the circle (for smooth following)
    let circleX = -100;
    let circleY = -100;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // If it's the very first move, snap the circle to the mouse immediately
      if (circleX === -100) {
        circleX = mouseX;
        circleY = mouseY;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      if (circleX !== -100) {
        // Smooth mathematical interpolation (lerp) so the circle elegantly glides to the cursor
        circleX += (mouseX - circleX) * 0.25;
        circleY += (mouseY - circleY) * 0.25;

        // Core of the small light circle
        ctx.beginPath();
        ctx.arc(circleX, circleY, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 87, 255, 0.6)`; // Brand Blue
        ctx.fill();
        
        // Very soft outer glow
        ctx.beginPath();
        ctx.arc(circleX, circleY, 15, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 87, 255, 0.15)`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
    />
  );
}
