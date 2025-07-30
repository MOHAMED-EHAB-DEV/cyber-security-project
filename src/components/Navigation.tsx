'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
          navRef.current,
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false); // Close drawer on click
    }
  };

  return (
      <>
        <nav
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  🛡️ CyberShield
                </h1>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <button
                      onClick={() => scrollToSection('hero')}
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Home
                  </button>
                  <Link
                      href="/store/page"
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Store
                  </Link>
                  <button
                      onClick={() => scrollToSection('features')}
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Solutions
                  </button>
                  <button
                      onClick={() => scrollToSection('product-details')}
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Security Platform
                  </button>
                </div>
              </div>

              <div className="md:hidden">
                <button
                    onClick={() => setDrawerOpen(true)}
                    className="text-slate-300 hover:text-cyan-400"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {drawerOpen && (
              <>
                <motion.div
                    className="fixed inset-0 z-40 bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setDrawerOpen(false)}
                />
                <motion.div
                    className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-slate-900 border-l border-slate-700/50 p-6 flex flex-col space-y-6"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'tween', duration: 0.3 }}
                >
                  <div className="flex justify-end">
                    <button
                        onClick={() => setDrawerOpen(false)}
                        className="text-slate-300 hover:text-cyan-400"
                    >
                      ✕
                    </button>
                  </div>
                  <button
                      onClick={() => scrollToSection('hero')}
                      className="text-left text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
                  >
                    Home
                  </button>
                  <Link
                      href="/store/page"
                      className="text-left text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
                  >
                    Store
                  </Link>
                  <button
                      onClick={() => scrollToSection('features')}
                      className="text-left text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
                  >
                    Solutions
                  </button>
                  <button
                      onClick={() => scrollToSection('product-details')}
                      className="text-left text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
                  >
                    Security Platform
                  </button>
                </motion.div>
              </>
          )}
        </AnimatePresence>
      </>
  );
};

export default Navigation;
