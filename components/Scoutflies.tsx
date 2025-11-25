import React, { useEffect, useRef } from 'react';

const Scoutflies: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Scoutfly Palette: Vivid Greens, Limes, and subtle Golds
    const colors = [
        'rgba(74, 222, 128, 1)',   // Bright Green
        'rgba(163, 230, 53, 1)',   // Lime
        'rgba(34, 197, 94, 1)',    // Green
        'rgba(250, 204, 21, 0.9)'  // Gold/Yellow hint
    ];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      angle: number; 
      angleSpeed: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = h + Math.random() * 200; // Start below screen
        this.vx = 0;
        this.vy = 0;
        this.size = Math.random() * 2 + 1; // 1px to 3px
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.life = 0;
        this.maxLife = Math.random() * 300 + 200;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = (Math.random() - 0.5) * 0.02;
      }

      update(w: number, h: number, mx: number, my: number) {
        this.life++;

        // 1. Natural Rising Motion (Simulating convection/flight)
        this.angle += this.angleSpeed;
        // Perlin-like noise simulation
        const noiseX = Math.sin(this.life * 0.02 + this.x * 0.005); 
        const noiseY = Math.cos(this.life * 0.02 + this.y * 0.005);
        
        // Base drift upward with organic wobble
        this.vx += noiseX * 0.02;
        this.vy += -0.05 + (noiseY * 0.02); 

        // 2. Mouse Interaction (The "Scout" behavior)
        const dx = mx - this.x;
        const dy = my - this.y;
        const distSq = dx * dx + dy * dy;
        const interactionRadiusSq = 350 * 350; // 350px interaction radius

        if (distSq < interactionRadiusSq) {
           const dist = Math.sqrt(distSq);
           const force = (350 - dist) / 350; // 0 to 1 based on proximity
           
           const angleToMouse = Math.atan2(dy, dx);
           
           // Gentle Attraction (Seek)
           const attractForce = 0.3 * force;
           const ax = Math.cos(angleToMouse) * attractForce;
           const ay = Math.sin(angleToMouse) * attractForce;

           // Swirling Motion (Perpendicular force/Tangent)
           const swirlForce = 0.6 * force; // Stronger swirl
           const sx = -Math.sin(angleToMouse) * swirlForce;
           const sy = Math.cos(angleToMouse) * swirlForce;

           this.vx += ax + sx;
           this.vy += ay + sy;
        }

        // Friction to prevent chaos
        this.vx *= 0.96;
        this.vy *= 0.96;

        // Apply Velocity
        this.x += this.vx;
        this.y += this.vy;

        // Reset Logic
        // If it goes way above screen, or dies naturally
        const farFromMouse = distSq > interactionRadiusSq;
        
        // If particle is dead OR (off-screen top AND not interacting)
        if (this.life > this.maxLife || (this.y < -50 && farFromMouse)) {
          this.reset(w, h);
        }
      }

      reset(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = h + Math.random() * 100; // Reset below screen
        this.vx = 0;
        this.vy = (Math.random() * -1) - 0.5; // Initial upward burst
        this.life = 0;
        this.maxLife = Math.random() * 300 + 200;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        
        // Fade in and out
        const opacity = Math.min(1, Math.min(this.life / 40, (this.maxLife - this.life) / 60));
        context.globalAlpha = opacity;
        
        // Intense glow for that "magical insect" look
        context.shadowBlur = this.size * 5;
        context.shadowColor = '#4ade80'; 

        context.fill();
        context.shadowBlur = 0;
        context.globalAlpha = 1.0;
      }
    }

    const init = () => {
      particles = [];
      // Calculate particle density based on screen area to ensure performance on mobile vs desktop
      const area = window.innerWidth * window.innerHeight;
      const particleCount = Math.min(150, Math.max(50, Math.floor(area / 8000)));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update(canvas.width, canvas.height, mouseRef.current.x, mouseRef.current.y);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
        if(e.touches.length > 0) {
            mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 mix-blend-screen opacity-90"
      style={{ filter: 'blur(0.5px)' }} // Slight blur for softness
    />
  );
};

export default Scoutflies;