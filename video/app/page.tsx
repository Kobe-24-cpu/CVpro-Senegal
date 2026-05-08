"use client";
import { useEffect, useRef } from "react";

const texts = [
  "Princess", "I love u♡", "I ll never forget u♥",
  "God bless u", "My fav nigga", "I love", "Princess♡", "Respecté meu nk",
];

export default function HeartProject() {
  const worldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;

    const COUNT = 80;
    const items: { el: HTMLElement; x: number; y: number; z: number; rotZ: number }[] = [];

    function rand(min: number, max: number) { return min + Math.random() * (max - min); }

    const W = window.innerWidth;
    const H = window.innerHeight;

    for (let i = 0; i < COUNT; i++) {
      const el = document.createElement('div');
      el.style.position = 'absolute';
      el.style.left = '0px';
      el.style.top = '0px';
      el.style.whiteSpace = 'nowrap';
      el.style.pointerEvents = 'none';
      el.style.fontFamily = "'Arial Black', sans-serif";
      el.style.fontWeight = '900';
      el.style.willChange = 'transform';

      const r = Math.random();

      if (r < 0.25) {
        const photos = [
          '/image/photo.png',
          '/image/photo2.png',
          '/image/photo3.png',
          '/image/photo4.png',
        ];
        const img = document.createElement('img');
        img.src = photos[Math.floor(Math.random() * photos.length)];
        img.style.cssText = 'width:90px;height:110px;object-fit:cover;border-radius:6px;border:2px solid rgba(255,255,255,0.2)';
        el.appendChild(img);
      } else if (r < 0.35) {
        el.style.color = '#cc0000';
        el.style.fontSize = rand(20, 50) + 'px';
        el.style.textShadow = '0 0 10px #f00';
        el.textContent = '♥';
      } else if (r < 0.45) {
        el.style.color = 'transparent';
        (el.style as any).webkitTextStroke = '2px #ff69b4';
        el.style.filter = 'drop-shadow(0 0 6px #ff69b4)';
        el.style.fontSize = rand(40, 90) + 'px';
        el.textContent = '♡';
      } else {
        const isPink = Math.random() < 0.5;
        const sizes = [14, 14, 22, 22, 38, 60];
        el.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)] + 'px';
        el.style.color = isPink ? '#ff69b4' : '#ffffff';
        el.style.textShadow = isPink
          ? '0 0 12px #ff69b4, 0 0 30px #ff1493'
          : '0 0 8px #ff69b4';
        el.textContent = texts[Math.floor(Math.random() * texts.length)];
      }

      const x = rand(-W * 0.3, W * 1.3);
      const y = rand(-H * 0.3, H * 1.3);
      const z = rand(-900, 200);
      const rotZ = rand(-30, 30);

      items.push({ el, x, y, z, rotZ });
      world.appendChild(el);
    }

    let last = 0;
    let raf: number;
    const SPEED = 1.2;
    const cx = W / 2;
    const cy = H / 2;

    function animate(ts: number) {
      const dt = last ? ts - last : 16;
      last = ts;

      for (const it of items) {
        it.z += SPEED * (dt / 16);
        if (it.z > 600) {
          it.z = -900;
          it.x = rand(-W * 0.3, W * 1.3);
          it.y = rand(-H * 0.3, H * 1.3);
          it.rotZ = rand(-30, 30);
        }

        const depth = (it.z + 900) / 1100;
        const scale = 0.3 + depth * 1.5;
        const opacity = Math.min(1, Math.max(0, depth * 1.4));

        const screenX = cx + (it.x - cx) * scale;
        const screenY = cy + (it.y - cy) * scale;

        it.el.style.transform = `translate(${screenX}px, ${screenY}px) scale(${scale}) rotateZ(${it.rotZ}deg)`;
        it.el.style.opacity = String(opacity);
      }
      raf = requestAnimationFrame(animate);
    }

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <main className="w-full h-screen bg-black overflow-hidden">
      <div
        ref={worldRef}
        className="w-full h-full"
        style={{ position: 'relative' }}
      />
    </main>    
  );
}