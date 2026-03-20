'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ArrowUpRight, Trophy, Navigation, Briefcase, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: any;
}

interface NavItem {
  label: string;
  links: NavLink[];
}

interface CardNavProps {
  items: NavItem[];
  theme?: 'light' | 'dark';
  pathname?: string;
}

export default function CardNav({ items, theme = 'dark', pathname = '/' }: CardNavProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // About is the only item now as requested
  const aboutItem = items.find((i) => i.label === 'About') || items[0];

  return (
    <div ref={containerRef} className="relative">
      <motion.button
        onMouseEnter={() => setIsExpanded(true)}
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          'relative px-6 py-2.5 text-sm font-bold transition-all duration-300 rounded-full flex items-center gap-2 group overflow-hidden',
          theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black',
          'shadow-xl shadow-black/40 backdrop-blur-none bg-white/10 border border-white/20',
          'glass-card'
        )}
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(24,24,27,0.85) 60%, rgba(99,102,241,0.15) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.85) 60%, rgba(99,102,241,0.10) 100%)',
          boxShadow: theme === 'dark'
            ? '0 8px 32px 0 rgba(0,0,0,0.45), 0 1.5px 8px 0 rgba(99,102,241,0.12)'
            : '0 8px 32px 0 rgba(0,0,0,0.15), 0 1.5px 8px 0 rgba(99,102,241,0.10)',
          border: theme === 'dark' ? '1.5px solid rgba(255,255,255,0.12)' : '1.5px solid rgba(0,0,0,0.08)',
        }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        <span className="relative z-10">{aboutItem.label}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            onMouseLeave={() => setIsExpanded(false)}
            initial={{ opacity: 0, y: 15, scale: 0.98, rotateX: -5, x: '-50%' }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 10, scale: 0.98, x: '-50%' }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 30,
            }}
            style={{ perspective: '1200px' }}
            className="fixed top-28 left-1/2 z-[100] w-full max-w-5xl px-4"
          >
            <div
              className={cn(
                'relative p-1.5 rounded-[2rem] border shadow-2xl overflow-hidden transition-colors duration-500',
                'glass-card',
                theme === 'dark'
                  ? 'bg-[#18181b]/90 border-white/10 shadow-black/80'
                  : 'bg-white/90 border-black/5 shadow-black/20'
              )}
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, rgba(24,24,27,0.85) 60%, rgba(99,102,241,0.15) 100%)'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.85) 60%, rgba(99,102,241,0.10) 100%)',
                boxShadow: theme === 'dark'
                  ? '0 8px 32px 0 rgba(0,0,0,0.45), 0 1.5px 8px 0 rgba(99,102,241,0.12)'
                  : '0 8px 32px 0 rgba(0,0,0,0.15), 0 1.5px 8px 0 rgba(99,102,241,0.10)',
                border: theme === 'dark' ? '1.5px solid rgba(255,255,255,0.12)' : '1.5px solid rgba(0,0,0,0.08)',
              }}
            >
              {/* Inner Content Grid - Balanced Horizontal Row */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-1.5">
                {aboutItem.links.map((link, idx) => {
                  // Use href for stable icon mapping regardless of locale
                  const iconMap: Record<string, any> = {
                    '/achievements': Trophy,
                    '/skills': Navigation,
                    '/experience': Briefcase,
                    '/projects': Rocket,
                    '/blog': Rocket,
                  };
                  const Icon = iconMap[link.href] || Rocket;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsExpanded(false)}
                      className={cn(
                        'group/card flex flex-col h-[200px] md:h-[220px] relative p-6 rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:scale-[1.06] hover:-translate-y-1 active:scale-[0.98] shadow-lg shadow-black/30',
                        'glass-card',
                        pathname === link.href
                          ? theme === 'dark'
                            ? 'bg-white/10 ring-1 ring-white/20'
                            : 'bg-black/5 ring-1 ring-black/10'
                          : theme === 'dark'
                            ? 'bg-white/[0.03] hover:bg-white/7'
                            : 'bg-black/[0.02] hover:bg-black/[0.07]'
                      )}
                      style={{
                        background: theme === 'dark'
                          ? 'linear-gradient(135deg, rgba(24,24,27,0.85) 60%, rgba(99,102,241,0.15) 100%)'
                          : 'linear-gradient(135deg, rgba(255,255,255,0.85) 60%, rgba(99,102,241,0.10) 100%)',
                        boxShadow: theme === 'dark'
                          ? '0 8px 32px 0 rgba(0,0,0,0.45), 0 1.5px 8px 0 rgba(99,102,241,0.12)'
                          : '0 8px 32px 0 rgba(0,0,0,0.15), 0 1.5px 8px 0 rgba(99,102,241,0.10)',
                        border: theme === 'dark' ? '1.5px solid rgba(255,255,255,0.12)' : '1.5px solid rgba(0,0,0,0.08)',
                      }}
                    >
                      {/* Glow Effect */}
                      {/* Glassmorphism shine effect */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div
                          className={cn(
                            'absolute top-0 left-0 w-full h-1/3 bg-white/30 rounded-t-[1.5rem] opacity-60',
                            'glass-shine'
                          )}
                        />
                        <div
                          className={cn(
                            'absolute bottom-0 left-0 w-full h-1/4 bg-white/10 rounded-b-[1.5rem] opacity-40',
                            'glass-glow'
                          )}
                        />
                      </div>

                      <div className="relative h-full flex flex-col z-10">
                        {/* Header Icons */}
                        <div className="flex items-start justify-between mb-auto">
                          <div
                            className={cn(
                              'p-3 rounded-xl border transition-colors',
                              theme === 'dark'
                                ? 'bg-white/[0.08] group-hover/card:bg-white/14 border-white/7'
                                : 'bg-black/[0.05] group-hover/card:bg-black/0.09] border-black/7'
                            )}
                          >
                            <Icon
                              className={cn(
                                'w-8 h-8 transition-colors drop-shadow-lg',
                                theme === 'dark'
                                  ? 'text-white/90 group-hover/card:text-white'
                                  : 'text-black/80 group-hover/card:text-black'
                              )}
                            />
                          </div>
                          <ArrowUpRight
                            className={cn(
                              'w-6 h-6 opacity-30 group-hover/card:opacity-100 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-all duration-500 ease-out',
                              theme === 'dark' ? 'text-white/70' : 'text-black/50'
                            )}
                          />
                        </div>

                        {/* Content */}
                        <div>
                          <h4
                            className={cn(
                              'text-xl md:text-2xl font-black tracking-tighter mb-1 transition-colors',
                              theme === 'dark'
                                ? 'text-white/90 group-hover/card:text-white'
                                : 'text-black/80 group-hover/card:text-black'
                            )}
                          >
                            {link.label}
                          </h4>
                          <p
                            className={cn(
                              'text-[11px] md:text-xs leading-tight font-medium line-clamp-2 transition-colors',
                              theme === 'dark'
                                ? 'text-white/40 group-hover/card:text-white/60'
                                : 'text-black/40 group-hover/card:text-black/60'
                            )}
                          >
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
