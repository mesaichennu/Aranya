import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const siblings = [
              ...e.target.parentElement.querySelectorAll('.reveal'),
            ];
            const idx = siblings.indexOf(e.target);
            setTimeout(() => e.target.classList.add('visible'), idx * 100);
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll('.reveal');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
