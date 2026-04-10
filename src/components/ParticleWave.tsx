import React, { useEffect, useRef } from 'react';

const ParticleWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 200;
    const orangeColor = '#FF8F03';

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      angle: number;
      speed: number;
      opacity: number;
      z: number; // Depth factor

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.z = Math.random(); // 0 is far, 1 is near
        this.size = (this.z * 2) + 0.2;
        this.density = (Math.random() * 30) + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = (Math.random() * 0.01 + 0.002) * (this.z + 0.5);
        this.opacity = (this.z * 0.4) + 0.1;
      }

      update(width: number, height: number, time: number) {
        this.angle += this.speed;
        
        // Complex wave motion
        const waveX = Math.sin(this.angle + time * 0.0005) * (40 * (1 - this.z));
        const waveY = Math.cos(this.angle * 0.5 + time * 0.0003) * (60 * this.z);
        
        // Drift
        this.baseX += 0.2 * (this.z + 0.1);
        
        this.x = this.baseX + waveX;
        this.y = this.baseY + waveY;

        // Wrap around
        if (this.baseX > width + 100) this.baseX = -100;
        if (this.baseX < -100) this.baseX = width + 100;
        if (this.baseY > height + 100) this.baseY = -100;
        if (this.baseY < -100) this.baseY = height + 100;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = orangeColor;
        context.globalAlpha = this.opacity;
        
        // Depth of field blur
        const blur = (1 - this.z) * 4;
        context.shadowBlur = 10 + blur;
        context.shadowColor = orangeColor;

        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    const init = () => {
      particles = [];
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const animate = (time: number) => {
      const { width, height } = canvas.getBoundingClientRect();
      
      // Cinematic trails
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, width, height);
      
      ctx.globalCompositeOperation = 'lighter';

      particles.forEach(particle => {
        particle.update(width, height, time);
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate(0);

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'black' }}
    />
  );
};

export default ParticleWave;
