'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative px-6 pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-sm font-medium text-indigo-200">
            India's First Complete AI Ecosystem for Schools
          </span>
          <ArrowRight className="w-4 h-4 ml-1 text-zinc-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Empower Every Student. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
            Save Teachers Hours.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed"
        >
          Replace disconnected tools with an integrated intelligence platform that brings learning, responsible AI, and real skill development into one seamless ecosystem.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="#"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] transition-all flex items-center justify-center gap-2 group"
          >
            See if Your School is Ready
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all flex items-center justify-center"
          >
            Book a Demo
          </Link>
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/5 w-full max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { label: 'Trusted By', value: '10,000+', icon: Shield },
            { label: 'Time Saved', value: '15hrs/wk', icon: Zap },
            { label: 'Global Reach', value: '100+ Schools', icon: Globe },
            { label: 'Native Tools', value: '30+ AI Models', icon: Sparkles }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 mb-2">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
              <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
