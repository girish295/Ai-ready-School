'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Sparkles, BookOpen, Layers, Bot, Cpu, Monitor } from 'lucide-react';
import { usePathname } from 'next/navigation';

const products = [
  { name: 'Cypher', description: 'Personalized Learning Companion', icon: BookOpen, href: '#' },
  { name: 'Morpheus', description: 'AI-Powered Teaching Agent', icon: Bot, href: '#' },
  { name: 'Zion', description: '30+ AI Tools on One Platform', icon: Layers, href: '#' },
  { name: 'NEO', description: 'AI Innovation Lab Devices', icon: Monitor, href: '#' },
  { name: 'Matrix', description: 'Complete AI Infrastructure', icon: Cpu, href: '#' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050508]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-[1px]">
            <div className="w-full h-full bg-[#050508] rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            AI Ready<span className="text-indigo-400">School</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2">
              Platform <ChevronDown className="w-4 h-4 opacity-50" />
            </button>
            
            <AnimatePresence>
              {activeDropdown === 'products' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-4"
                >
                  <div className="bg-[#0A0A0E] border border-white/10 rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-2 overflow-hidden relative">
                    {/* Subtle glow effect */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
                    
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:border-indigo-400/50 transition-colors">
                          <product.icon className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                            {product.name}
                          </div>
                          <div className="text-xs text-zinc-400 line-clamp-1">
                            {product.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="#" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2">
            Philosophy
          </Link>
          <Link href="#" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2">
            Resources
          </Link>
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            href="/sign-in" target="_blank"
            className="hidden sm:flex items-center justify-center px-4 py-2 text-sm font-medium text-white hover:text-zinc-200 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="#"
            className="hidden sm:flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all active:scale-95"
          >
            Book Demo
          </Link>

          <button
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A0A0E] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <div className="font-semibold text-zinc-500 text-xs uppercase tracking-wider mb-2">Platform</div>
              {products.map((p) => (
                <Link key={p.name} href={p.href} className="text-base text-zinc-300 ml-2">
                  {p.name}
                </Link>
              ))}
              
              <div className="h-px bg-white/10 my-2" />
              
              <Link href="#" className="text-base font-medium text-white">Philosophy</Link>
              <Link href="#" className="text-base font-medium text-white">Pricing</Link>
              <Link href="#" className="text-base font-medium text-white">Resources</Link>
              
              <div className="h-px bg-white/10 my-2" />
              
              <Link href="/sign-in" target="_blank" className="text-base font-medium text-zinc-300">Sign In</Link>
              <Link href="#" className="w-full text-center px-5 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-xl">
                Book Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
