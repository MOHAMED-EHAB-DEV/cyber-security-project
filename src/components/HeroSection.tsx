import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(ctaRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-emerald-600/5 to-slate-800/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-100 via-cyan-100 to-emerald-100 bg-clip-text text-transparent leading-tight"
        >
          Advanced Cyber
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Security
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Protect your digital assets with enterprise-grade security solutions that defend against evolving threats
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 font-semibold rounded-full hover:from-cyan-400 hover:to-emerald-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Protection
          </button>
          <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400/10 transform hover:scale-105 transition-all duration-300">
            Security Assessment
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
