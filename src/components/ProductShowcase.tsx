'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Bot, Layers, Monitor, Cpu, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 'cypher',
    name: 'Cypher',
    role: 'Student Companion',
    description: 'A personalized learning companion that ensures students ask honest, brave, and thoughtful questions.',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-400',
    features: ['Adaptive Learning Paths', 'Socratic Questioning Model', 'Progress Tracking', 'Safe Search Environment'],
    image: 'bg-blue-900/20'
  },
  {
    id: 'morpheus',
    name: 'Morpheus',
    role: 'Teaching Agent',
    description: 'An AI-powered Teaching Agent that helps reduce administrative overhead and supercharges lesson delivery.',
    icon: Bot,
    color: 'from-purple-500 to-pink-400',
    features: ['Automated Lesson Plans', 'Grading Assistance', 'Curriculum Mapping', 'Parent Communication Drafts'],
    image: 'bg-purple-900/20'
  },
  {
    id: 'zion',
    name: 'Zion',
    role: 'AI Tool Suite',
    description: '30+ AI tools for your school, centralizing learning, creative research, and project tools in one secure place.',
    icon: Layers,
    color: 'from-emerald-500 to-teal-400',
    features: ['Image & Video Generation', 'Audio Tools', 'Text Analysis', 'Centralized License Management'],
    image: 'bg-emerald-900/20'
  },
  {
    id: 'neo',
    name: 'NEO',
    role: 'AI Innovation Lab',
    description: 'A futuristic physical AI Lab deployed at your school, bringing the latest hardware and AI skills to students.',
    icon: Monitor,
    color: 'from-orange-500 to-amber-400',
    features: ['State-of-the-art Devices', 'Hands-on Robotics', 'Model Playgrounds', 'Dedicated Instructor Output'],
    image: 'bg-orange-900/20'
  },
  {
    id: 'matrix',
    name: 'Matrix',
    role: 'Local AI Infrastructure',
    description: 'Complete Local AI infrastructure providing schools with all required hardware and privacy-first software.',
    icon: Cpu,
    color: 'from-indigo-500 to-violet-400',
    features: ['On-Premise Deployment', 'Data Sovereignty', 'Zero-Latency Processing', 'End-to-End Encryption'],
    image: 'bg-indigo-900/20'
  }
];

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(products[0].id);
  const activeProduct = products.find(p => p.id === activeTab)!;

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-[#050508] to-[#0A0A0E] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            One Platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Complete Ecosystem.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Stop juggling dozens of platforms. AI Ready School interlocks every tool your institution needs to adapt natively and safely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation/Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {products.map((product) => {
              const isActive = activeTab === product.id;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`flex items-start text-left p-4 rounded-2xl transition-all duration-300 border ${
                    isActive 
                      ? 'bg-white/10 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)] translate-x-2' 
                      : 'bg-transparent border-transparent hover:bg-white/5 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className={`mt-1 flex items-center justify-center w-12 h-12 rounded-xl shrink-0 transition-all ${
                    isActive 
                      ? 'bg-gradient-to-br shadow-inner shadow-white/20 ' + product.color 
                      : 'bg-white/5 text-zinc-400'
                  }`}>
                    <product.icon className={`w-6 h-6 ${isActive ? 'text-white' : ''}`} />
                  </div>
                  <div className="ml-4">
                    <div className={`font-semibold text-lg ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                      {product.name}
                    </div>
                    <div className="text-sm text-zinc-500 font-medium">
                      {product.role}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Display Area */}
          <div className="lg:col-span-8 relative">
            <div className="bg-[#111116] border border-white/10 rounded-3xl overflow-hidden min-h-[500px] flex flex-col p-8 md:p-12 relative shadow-2xl">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col relative z-10"
                >
                  {/* Decorative Gradient Blob */}
                  <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-30 ${activeProduct.image}`} />

                  {/* Header */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gradient-to-r ${activeProduct.color} text-white/90 shadow-md`}>
                      {activeProduct.role}
                    </div>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">
                    {activeProduct.name}
                  </h3>
                  
                  <p className="text-xl text-zinc-300 leading-relaxed max-w-xl mb-10">
                    {activeProduct.description}
                  </p>

                  {/* Features Grid */}
                  <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors`}>
                          <ChevronRight className="w-4 h-4 text-zinc-400" />
                        </div>
                        <span className="text-sm font-medium text-zinc-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                    <button className="flex items-center gap-2 text-sm font-semibold text-white hover:text-indigo-400 transition-colors group">
                      Explore {activeProduct.name} Deep Dive
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
