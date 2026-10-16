'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PortfolioMotion() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saved = window.localStorage.getItem('manish-motion');
    const initial = saved === null ? !reducedMotion : saved === 'on';
    setEnabled(initial);

    const root = document.documentElement;
    const setMotion = (value: boolean) => {
      root.dataset.motion = value ? 'on' : 'off';
      window.localStorage.setItem('manish-motion', value ? 'on' : 'off');
    };
    setMotion(initial);

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const page = document.documentElement;
      const max = page.scrollHeight - window.innerHeight;
      root.style.setProperty('--scroll-progress', `${max > 0 ? window.scrollY / max : 0}`);
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(updateProgress); };
    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }),
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    );
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => observer.observe(element));

    const portrait = document.querySelector<HTMLElement>('.hero__portrait');
    const onPointerMove = (event: PointerEvent) => {
      if (!portrait || !root.dataset.motion || root.dataset.motion === 'off') return;
      const bounds = portrait.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      portrait.style.setProperty('--tilt-x', `${x * 7}deg`);
      portrait.style.setProperty('--tilt-y', `${y * -7}deg`);
    };
    const resetPortrait = () => { portrait?.style.setProperty('--tilt-x', '0deg'); portrait?.style.setProperty('--tilt-y', '0deg'); };
    portrait?.addEventListener('pointermove', onPointerMove);
    portrait?.addEventListener('pointerleave', resetPortrait);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      observer.disconnect();
      portrait?.removeEventListener('pointermove', onPointerMove);
      portrait?.removeEventListener('pointerleave', resetPortrait);
    };
  }, []);

  useEffect(() => {
    if (!enabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const contact = document.querySelector<HTMLElement>('[data-contact]');
    if (!contact) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo('.contact-reveal', { autoAlpha: 0, y: 54 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power4.out',
        scrollTrigger: { trigger: contact, start: 'top 72%', once: true },
      });
      gsap.fromTo('.contact-orbit', { rotate: -22, scale: 0.72, autoAlpha: 0 }, {
        rotate: 0,
        scale: 1,
        autoAlpha: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: { trigger: contact, start: 'top 72%', once: true },
      });
    }, contact);
    return () => context.revert();
  }, [enabled]);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    document.documentElement.dataset.motion = next ? 'on' : 'off';
    window.localStorage.setItem('manish-motion', next ? 'on' : 'off');
  };

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <button className="motion-toggle" type="button" aria-pressed={enabled} onClick={toggle}>
        <span aria-hidden="true">{enabled ? '◌' : '▷'}</span> MOTION {enabled ? 'ON' : 'OFF'}
      </button>
    </>
  );
}
