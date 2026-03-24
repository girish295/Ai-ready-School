'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Calendar, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 'teacher-first',
    title: 'Teacher First: How AI Should Empower Educators, Not Replace Them',
    date: 'March 24, 2026',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    desc: 'Why school leaders are prioritizing human educators while implementing the Morpheus AI teaching agent.',
    color: 'border-pink-500'
  },
  {
    id: 'thinking-not-answers',
    title: 'Why AI Should Make Children Think, Not Give Them Answers',
    date: 'March 23, 2026',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    desc: 'The difference between search engines and thinking engines in the modern classroom.',
    color: 'border-[#ffca28]'
  },
  {
    id: 'summit-2026',
    title: 'What 1,000+ Visitors at India AI Impact Summit Taught Us About Schools',
    date: 'March 20, 2026',
    image: '/blog/india-summit.png',
    desc: 'Seven key takeaways from the largest educational AI gathering of 2026.',
    color: 'border-blue-500'
  },
  {
    id: 'human-first',
    title: 'Human First, AI Next: Why Our Philosophy Matters',
    date: 'March 18, 2026',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    desc: 'Tools without a soul are dangerous. Nurturing human agency is our primary goal.',
    color: 'border-purple-500'
  },
  {
    id: 'techx-2025',
    title: 'AI Ready School at ET TechX Hyderabad: Showcasing Practical AI',
    date: 'December 15, 2025',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    desc: 'Bridging the gap between AI hype and classroom reality with localized CBSE-aligned tools.',
    color: 'border-emerald-500'
  },
  {
    id: 'ai-right-way',
    title: 'How to Use AI the Right Way at Your School',
    date: 'December 6, 2025',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop',
    desc: 'A 3-step framework for governance, teacher empowerment, and student safety.',
    color: 'border-slate-800'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="p-8 max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-slate-900 transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back Home
        </Link>
        <Link href="/" className="group/logo flex flex-col leading-none scale-110 origin-left">
          <div className="flex items-center relative">
            {/* Sparkle cluster */}
            <div className="absolute -top-4 -left-1 flex gap-0">
              <Sparkles className="w-4 h-4 text-[#eb2e76] animate-pulse" />
              <Sparkles className="w-2 h-2 text-[#eb2e76] absolute top-1 left-3 opacity-60" />
            </div>
            <span className="text-3xl font-black tracking-tighter text-[#eb2e76] select-none">AI Ready</span>
            <span className="text-[10px] font-bold text-[#eb2e76] relative -top-3 ml-0.5">TM</span>
          </div>
          <div className="pl-14 -mt-1">
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-[#ffca28] via-[#eb2e76] to-[#eb2e76] bg-clip-text text-transparent italic">
              School
            </span>
          </div>
        </Link>
        <div className="w-24"></div> 
      </nav>

      <header className="py-20 px-8 text-center max-w-4xl mx-auto">
         <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tight">AI Ready School <span className="text-[#eb2e76]">Blog</span></h1>
         <p className="text-xl text-slate-500 font-medium leading-relaxed">Perspectives on the intersection of human intelligence and artificial agency in the modern classroom.</p>
      </header>

      <main className="max-w-7xl mx-auto px-8 pb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
               {/* Image Container */}
               <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${post.color.includes('pink') ? 'from-pink-500' : post.color.includes('blue') ? 'from-blue-500' : 'from-[#ffca28]'} to-transparent`}></div>
               </div>
               
               <div className="p-8">
                  <div className="flex items-center gap-3 text-slate-400 text-[10px] uppercase font-black tracking-widest mb-4">
                     <Calendar className="w-3.5 h-3.5" />
                     {post.date}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 leading-tight mb-4 group-hover:text-[#eb2e76] transition-colors">{post.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 line-clamp-3">{post.desc}</p>
                  
                  <div className="flex items-center gap-2 text-[#eb2e76] font-bold text-xs uppercase tracking-widest">
                     Read Post <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
               </div>
            </Link>
          ))}
        </div>

        {/* Categories/Keywords section */}
        <div className="mt-40 pt-20 border-t border-slate-100 text-center">
            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[4px] mb-10">Explore by Topic</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
               {['Teacher Empowerment', 'Philosophy', 'Student Success', 'Infrastructure', 'Ethics', 'Curriculum', 'Sovereign AI'].map((tag) => (
                 <span key={tag} className="px-6 py-3 bg-white border border-slate-100 rounded-full text-sm font-bold text-slate-600 hover:border-[#eb2e76] hover:text-[#eb2e76] cursor-pointer transition-all uppercase tracking-widest text-[10px]">{tag}</span>
               ))}
            </div>
        </div>
      </main>

      {/* Newsletter simple footer */}
      <section className="bg-slate-900 py-32 px-8">
         <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-black mb-6">Stay Ready for the Future.</h2>
            <p className="text-slate-400 font-medium mb-12">Join 5000+ educators receiving our weekly digest on safe AI practices.</p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
               <input type="email" placeholder="you@school.edu" className="flex-1 bg-white/5 border border-white/10 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#eb2e76] transition-colors font-bold" />
               <button className="bg-[#eb2e76] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all">Subscribe</button>
            </div>
         </div>
      </section>
    </div>
  );
}

