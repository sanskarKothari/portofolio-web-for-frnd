/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number; // 3D coordinate for perspective projection
  ox: number; // original relative positions
  oy: number;
  oz: number;
  vx: number;
  vy: number;
  vz: number;
  baseRadius: number;
  color: string;
}

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse coordinates
    const mouse = {
      x: width / 2,
      y: height / 2,
      tx: width / 2,
      ty: height / 2,
      active: false,
    };

    // Particles array
    const particles: Particle[] = [];
    const particleCount = Math.min(120, Math.floor((width * height) / 12000)); // Adaptive count
    const focalLength = 350; // Camera focal length for 3D projection

    // Create 3D particles in a sphere or cloud shape
    for (let i = 0; i < particleCount; i++) {
      // Uniform distribution on a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 200 + Math.random() * 400; // Cloud spread

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      // Colors matching her brand: deep blue, cyan, electric purple, neon magenta
      const colorRand = Math.random();
      let color = "rgba(188, 19, 254, 0.45)"; // neon purple
      if (colorRand < 0.3) {
        color = "rgba(0, 245, 255, 0.55)"; // neon cyan
      } else if (colorRand < 0.6) {
        color = "rgba(59, 130, 246, 0.45)"; // blue
      } else if (colorRand < 0.8) {
        color = "rgba(236, 72, 153, 0.45)"; // pink
      }

      particles.push({
        x,
        y,
        z,
        ox: x,
        oy: y,
        oz: z,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        baseRadius: 1.2 + Math.random() * 2.2,
        color,
      });
    }

    // Geometry parameters (Rotating 3D Wireframe Dodecahedron)
    const vertices = [
      { x: -1, y: -1, z: -1 }, { x: 1, y: -1, z: -1 }, { x: 1, y: 1, z: -1 }, { x: -1, y: 1, z: -1 },
      { x: -1, y: -1, z: 1 },  { x: 1, y: -1, z: 1 },  { x: 1, y: 1, z: 1 },  { x: -1, y: 1, z: 1 },
    ].map(v => ({ x: v.x * 120, y: v.y * 120, z: v.z * 120 }));

    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // Back face
      [4, 5], [5, 6], [6, 7], [7, 4], // Front face
      [0, 4], [1, 5], [2, 6], [3, 7]  // Connector edges
    ];

    let rotX = 0.003;
    let rotY = 0.005;
    let currentXAngle = 0;
    let currentYAngle = 0;

    // Handle viewport resize
    const resizeObserver = new ResizeObserver((entries) => {
      setTimeout(() => {
        if (!canvasRef.current) return;
        const entry = entries[0];
        if (!entry) return;
        const entryWidth = Math.floor(entry.contentRect.width);
        const entryHeight = Math.floor(entry.contentRect.height);
        
        if (canvas.width !== entryWidth || canvas.height !== entryHeight) {
          width = canvas.width = entryWidth;
          height = canvas.height = entryHeight;
        }
      }, 0);
    });
    resizeObserver.observe(canvas.parentElement || document.body);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Dark background fill
      ctx.fillStyle = "#020205";
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse lerping
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      // Mouse orbital angle influence
      const mx = mouse.active ? (mouse.x - width / 2) / width : 0;
      const my = mouse.active ? (mouse.y - height / 2) / height : 0;

      currentXAngle += rotX + my * 0.01;
      currentYAngle += rotY + mx * 0.01;

      const cosX = Math.cos(currentXAngle);
      const sinX = Math.sin(currentXAngle);
      const cosY = Math.cos(currentYAngle);
      const sinY = Math.sin(currentYAngle);

      // 1. Draw 3D wireframe cube in the background
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.strokeStyle = "rgba(0, 245, 255, 0.12)";
      ctx.lineWidth = 1.5;

      const projectedVertices = vertices.map((v) => {
        // Rotate local geometry
        // Rotate X
        let y1 = v.y * cosX - v.z * sinX;
        let z1 = v.z * cosX + v.y * sinX;
        // Rotate Y
        let x2 = v.x * cosY - z1 * sinY;
        let z2 = z1 * cosY + v.x * sinY;

        // Apply mouse position offsets
        const parallaxFactor = 0.08;
        const screenX = x2 + (mouse.x - width / 2) * parallaxFactor;
        const screenY = y1 + (mouse.y - height / 2) * parallaxFactor;

        // Simple perspective projection
        const scale = focalLength / (focalLength + z2);
        return {
          x: screenX * scale,
          y: screenY * scale,
          z: z2,
          visible: z2 > -focalLength,
        };
      });

      // Draw cube edges
      edges.forEach(([u, v]) => {
        const p1 = projectedVertices[u];
        const p2 = projectedVertices[v];
        if (p1.visible && p2.visible) {
          const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          gradient.addColorStop(0, "rgba(188, 19, 254, 0.15)"); // neon purple
          gradient.addColorStop(0.5, "rgba(0, 245, 255, 0.25)"); // neon cyan
          gradient.addColorStop(1, "rgba(236, 72, 153, 0.15)"); // pink
          ctx.strokeStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });

      // Draw cube corners (small nodes)
      projectedVertices.forEach((p) => {
        if (p.visible) {
          ctx.fillStyle = "rgba(0, 245, 255, 0.5)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.restore();

      // 2. Draw 3D interactive particle cloud
      // Pre-calculate rotation matrices for particles
      const cosP = Math.cos(currentYAngle * 0.2);
      const sinP = Math.sin(currentYAngle * 0.2);

      // Map particles and project
      const projectedParticles = particles.map((p) => {
        // Drift
        p.ox += p.vx;
        p.oy += p.vy;
        p.oz += p.vz;

        // Gentle boundary bounce (keep inside sphere)
        const distSq = p.ox * p.ox + p.oy * p.oy + p.oz * p.oz;
        if (distSq > 500 * 500) {
          p.vx *= -1;
          p.vy *= -1;
          p.vz *= -1;
        }

        // Apply slow rotation to the particle cloud
        let px = p.ox * cosP - p.oz * sinP;
        let pz = p.oz * cosP + p.ox * sinP;
        let py = p.oy;

        // Apply mouse magnetism/repulsion
        const screenXCenter = width / 2;
        const screenYCenter = height / 2;
        
        // Final position relative to camera coordinates
        const relativeX = px + (mouse.x - screenXCenter) * 0.05;
        const relativeY = py + (mouse.y - screenYCenter) * 0.05;
        const relativeZ = pz;

        const scale = focalLength / (focalLength + relativeZ + 300);
        const drawX = screenXCenter + relativeX * scale;
        const drawY = screenYCenter + relativeY * scale;

        return {
          px: drawX,
          py: drawY,
          pz: relativeZ,
          radius: p.baseRadius * scale * 2,
          color: p.color,
          visible: drawX > -50 && drawX < width + 50 && drawY > -50 && drawY < height + 50,
        };
      });

      // Density Sorting for proper transparency depth layering (Painters algorithm)
      projectedParticles.sort((a, b) => b.pz - a.pz);

      // Draw lines between close particles in 2D space (optimized mesh)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedParticles.length; i++) {
        const p1 = projectedParticles[i];
        if (!p1.visible) continue;

        let connections = 0;
        for (let j = i + 1; j < projectedParticles.length && connections < 4; j++) {
          const p2 = projectedParticles[j];
          if (!p2.visible) continue;

          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const len = Math.sqrt(dx * dx + dy * dy);

          if (len < 100) {
            connections++;
            const alpha = (1 - len / 100) * 0.18;
            ctx.strokeStyle = `rgba(188, 19, 254, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw the particles
      projectedParticles.forEach((p) => {
        if (!p.visible) return;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.px, p.py, Math.max(0.5, p.radius), 0, Math.PI * 2);
        ctx.fill();

        // Core highlight
        if (p.radius > 2.2) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
          ctx.beginPath();
          ctx.arc(p.px, p.py, p.radius / 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 3. Draw ambient light aura
      const auraGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        Math.min(width, height) * 0.4
      );
      auraGlow.addColorStop(0, "rgba(188, 19, 254, 0.04)");
      auraGlow.addColorStop(0.5, "rgba(0, 245, 255, 0.02)");
      auraGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = auraGlow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, Math.min(width, height) * 0.4, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full block pointer-events-none z-0"
      id="background-3d-canvas"
    />
  );
}
