import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { y: 100, opacity: 0, scale: 0.8 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              delay: index * 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const features = [
    {
      icon: "🛡️",
      title: "Threat Detection",
      description: "Advanced AI-powered threat detection that identifies and neutralizes cyber attacks in real-time before they can harm your systems."
    },
    {
      icon: "🔐",
      title: "Zero Trust Security",
      description: "Implement comprehensive zero-trust architecture that verifies every user and device before granting access to critical resources."
    },
    {
      icon: "🎯",
      title: "Incident Response",
      description: "24/7 automated incident response system that contains threats instantly and provides detailed forensic analysis."
    }
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 lg:py-32 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-cyan-100 bg-clip-text text-transparent"
          >
            Security Solutions
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive cybersecurity tools that protect your organization from advanced threats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="relative group flex h-[300px]"
            >
              <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-700/50 hover:border-cyan-400/50 group-hover:scale-105">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-emerald-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
