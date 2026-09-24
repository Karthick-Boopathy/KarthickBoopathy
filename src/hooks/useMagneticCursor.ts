import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

interface MagneticOptions {
  strength?: number; // 0 to 1, default 0.35
  radius?: number; // active distance from center in px, default 120
}

export function useMagneticCursor<T extends HTMLElement = HTMLElement>(
  options: MagneticOptions = {}
) {
  const { strength = 0.35, radius = 120 } = options;
  const ref = useRef<T>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.hypot(distX, distY);

      if (distance < radius) {
        rawX.set(distX * strength);
        rawY.set(distY * strength);
      } else {
        rawX.set(0);
        rawY.set(0);
      }
    };

    const handleMouseLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, radius, rawX, rawY]);

  return { ref, x, y };
}
