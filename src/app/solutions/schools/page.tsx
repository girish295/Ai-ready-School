'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Bot, 
  UserCircle, 
  Layout, 
  Lightbulb, 
  Database,
  ArrowRight,
  ChevronLeft,
  Sparkles
} from 'lucide-react';

const PRODUCTS = [
  {
    id: 'cypher',
    name: 'Cypher',
    tagline: 'Student Learning Companion',
    desc: 'Empowering students to think critically and learn confidently with 24/7 AI support.',
    icon: <Bot className="w-8 h-8" />,
    color: 'bg-pink-50 text-[#eb2e76]',
    border: 'border-pink-100'
  },
  {
    id: 'morpheus',
    name: 'Morpheus',
    tagline: 'AI Teaching Agent',
    desc: 'Your ultimate teaching assistant for lesson planning, grading, and personalized feedback.',
    icon: <UserCircle className="w-8 h-8" />,
    color: 'bg-purple-50 text-purple-500',
    border: 'border-purple-100'
  },
  {
    id: 'zion',
    name: 'Zion',
    tagline: 'AI Tool Suite',
    desc: 'An all-in-one suite of AI tools for content generation, assessment, and mapping.',
    icon: <Layout className="w-8 h-8" />,
    color: 'bg-blue-50 text-blue-500',
    border: 'border-blue-100'
  },
  {
    id: 'neo',
    name: 'Neo',
    tagline: 'AI Innovation Lab',
    desc: 'Unleash student creativity with hands-on AI building and experimentation tools.',
    icon: <Lightbulb className="w-8 h-8" />,
    color: 'bg-emerald-50 text-emerald-500',
    border: 'border-emerald-100'
  },
  {
    id: 'matrix',
    name: 'Matrix',
    tagline: 'AI Infrastructure',
    desc: 'The backbone of your school\'s AI strategy, ensuring safety, privacy, and control.',
    icon: <Database className="w-8 h-8" />,
    color: 'bg-slate-50 text-slate-500',
    border: 'border-slate-100'
  }
];

export default function ForSchoolsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="p-8 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-[#eb2e76] transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <Link href="/" className="group/logo flex flex-col leading-none">
          <div className="flex items-center relative gap-0.5">
            <Sparkles className="w-4 h-4 text-[#eb2e76] absolute -top-3 left-0 animate-pulse" />
            <span className="text-3xl font-black tracking-tighter text-[#eb2e76]">AI Ready</span>
            <span className="text-[10px] font-bold text-[#eb2e76] relative -top-3 ml-0.5">TM</span>
          </div>
          <div className="pl-14 -mt-1">
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#ffca28] to-[#eb2e76] bg-clip-text text-transparent italic">
              School
            </span>
          </div>
        </Link>
        <div className="w-[100px]"></div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-8 text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 bg-pink-50 text-[#eb2e76] rounded-full text-xs font-black uppercase tracking-[2px] mb-8">
          The School Ecosystem
        </div>
        <h1 className="text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
          One Platform. Five Core AI Pillars for Every School.
        </h1>
        <p className="text-xl text-slate-500 font-medium leading-relaxed">
          The AI Ready School ecosystem brings together infrastructure, tools, and agents to create a safe, powerful, and future-ready learning environment.
        </p>
      </section>

      {/* Products Grid */}
      <section className="pb-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((project) => (
            <Link 
              key={project.id} 
              href={`/solutions/schools/${project.id}`}
              className={`group p-10 rounded-[40px] border ${project.border} bg-white transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:-translate-y-2 relative overflow-hidden flex flex-col`}
            >
              <div className={`w-16 h-16 ${project.color} rounded-3xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110`}>
                {project.icon}
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">{project.name}</h3>
              <div className="text-[#eb2e76] font-bold text-sm uppercase tracking-widest mb-6">{project.tagline}</div>
              <p className="text-slate-500 font-medium leading-relaxed mb-10 flex-1">
                {project.desc}
              </p>
              <div className="flex items-center gap-2 text-slate-900 font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                Explore Pillar <ArrowRight className="w-4 h-4 text-[#eb2e76]" />
              </div>

              {/* Decorative background shape */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 -z-10"></div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-slate-900 py-32 px-8 text-center text-white">
        <h2 className="text-4xl font-black mb-10">Ready to deploy the Matrix in your school?</h2>
        <Link href="/demo" className="bg-[#eb2e76] hover:bg-[#d42769] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm inline-flex items-center gap-3 transition-all shadow-[0_20px_40px_rgba(235,46,118,0.3)]">
          Book a Strategy Session <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}

