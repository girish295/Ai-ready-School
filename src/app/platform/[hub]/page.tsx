'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, ArrowLeft, Bot, Sparkles, Code, Microscope, CheckCircle, Star } from 'lucide-react';

const HUB_DATA: Record<string, any> = {
  'learning-hub': {
    title: "learn smart with step by step guided AI lessons.",
    desc: "The Learning Hub makes AI simple and approachable with interactive lessons and personalized study support. Students get instant assessments, tailored plans, and clear explanations that match their pace. It's designed to turn complex concepts into easy, hands-on learning.",
    icon: <Bot className="w-12 h-12" />,
    color: "#eb2e76",
    tools: [
      { name: 'AI Buddy', desc: 'Your personal AI assistant that answers questions, creates content, and supports learning 24/7.' },
      { name: 'Assessment Generator', desc: 'Creates instant assessments in multiple formats with auto-evaluation and analytics.' },
      { name: 'Lesson Content Generator', desc: 'Generates ready-to-teach lesson content like notes, case studies, DOK questions.' },
      { name: 'Evaluator', desc: 'Evaluates uploaded answer sheets using AI-powered scoring and rubrio-based checking.' },
      { name: 'Study Planner', desc: 'Builds personalized study schedules based on student profile and exam goals.' },
      { name: 'Assignment Generator', desc: 'Creates instant assignments aligned to objectives with automatic evaluation capability.' }
    ]
  },
  'creative-hub': {
    title: "turn your ideas into stories, visuals, and films using AI tools.",
    desc: "The Creative Hub helps students bring imagination to life through AI-powered storytelling, design, and media creation. From comic strips to films, it offers tools to experiment and express ideas in new formats. Every project builds confidence and creative skills for the future.",
    icon: <Sparkles className="w-12 h-12" />,
    color: "#eb2e76",
    tools: [
      { name: 'Comic Strip Generator', desc: 'Turns ideas and stories into AI-generated comic strips with custom characters and styles.' },
      { name: 'Image Generator', desc: 'Creates high-quality AI images from text or image prompts in various styles.' },
      { name: 'Image Editor', desc: 'Generates short AI-powered video clips from text descriptions or images.' },
      { name: 'Video Clip Generator', desc: 'A simple editor to mix clips, add music, and create engaging student videos.' },
      { name: 'Video Editor', desc: 'Creates complete AI-generated movies with storylines, characters, and visuals.' },
      { name: 'Movie Generator', desc: 'Creates complete AI-generated movies with storylines, characters, and visuals.' }
    ]
  },
  'project-hub': {
    title: "build real projects and apps with hands-on AI support.",
    desc: "The Project Hub gives learners practical experience in coding, app building, and AI model training. Guided tools make experimentation safe and easy, while projects turn ideas into working prototypes. It's the space where students learn by doing and create portfolio-ready work.",
    icon: <Code className="w-12 h-12" />,
    color: "#eb2e76",
    tools: [
      { name: 'AI Coding Playground', desc: 'A safe coding environment with AI assistance supporting multiple programming languages.' },
      { name: 'Teachable Machine', desc: 'Lets students train simple AI models using their own images and categories.' },
      { name: 'App Builder', desc: 'A no-code tool to build simple AI-powered apps using natural language instructions.' },
      { name: 'AI Model Playground', desc: 'Compare and experiment with multiple AI models to understand how AI responds.' },
      { name: 'Project Builder', desc: 'A guided workspace to turn ideas into structured project prototypes step-by-step.' },
      { name: 'Thinking Playground', desc: 'An AI-guided thinking coach for Design Thinking, Computational Thinking, and AI Thinking.' }
    ]
  },
  'research-hub': {
    title: "explore, analyze, and experiment with AI tools.",
    desc: "The Research Hub supports students in exploring topics deeply with AI-powered research assistants and interactive tools. Learners can analyze data, chat with PDFs or videos, and refine their writing. It's designed to spark curiosity and build critical research skills.",
    icon: <Microscope className="w-12 h-12" />,
    color: "#eb2e76",
    tools: [
      { name: 'Research Buddy', desc: 'An AI research assistant that helps students explore topics, analyze sources, and write reports.' },
      { name: 'Chat with Videos', desc: 'Makes any video interactive with summaries, Q&A, and concept explanations.' },
      { name: 'Chat with PDFs', desc: 'Lets students upload PDFs and interact with them through summaries and AI chat.' },
      { name: 'Text Playground', desc: 'A writing enhancement tool for summarizing, expanding, translating, and rewriting text.' }
    ]
  }
};

export default function HubPage() {
  const params = useParams();
  const hubId = params.hub as string;
  const hub = HUB_DATA[hubId];

  if (!hub) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col gap-4">
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Hub Not Found</h1>
      <Link href="/" className="px-8 py-3 bg-[#eb2e76] text-white font-bold rounded-2xl shadow-xl shadow-pink-100 hover:bg-[#d41c62] transition-all">Back to Home</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Dynamic Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-[#eb2e76] group-hover:text-white transition-all">
            <ArrowLeft className="w-6 h-6" />
          </div>
          <span className="font-bold text-slate-400 group-hover:text-slate-900 transition-colors uppercase tracking-widest text-sm">Back to Home</span>
        </Link>
        <Link href="/" className="group/logo flex flex-col leading-none">
          <div className="flex items-center relative gap-0.5">
            <Sparkles className="w-5 h-5 text-[#eb2e76] absolute -top-4 left-0 animate-pulse" />
            <span className="text-3xl font-black tracking-tighter text-[#eb2e76]">AI Ready</span>
            <span className="text-[10px] font-bold text-[#eb2e76] relative -top-4 ml-0.5">TM</span>
          </div>
          <div className="flex justify-center -mt-0.5">
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#ffca28] to-[#eb2e76] bg-clip-text text-transparent italic">
              School
            </span>
          </div>
        </Link>
        <div className="w-[150px]"></div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pb-24">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className={`w-20 h-20 mx-auto rounded-[24px] bg-slate-50 flex items-center justify-center text-[#eb2e76] mb-8 shadow-xl shadow-slate-100 border border-white`}>
            {hub.icon}
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">{hub.title}</h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">{hub.desc}</p>
        </section>

        {/* Tools Grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          {hub.tools.map((tool: any, i: number) => (
            <div 
              key={i} 
              className="group bg-white border border-gray-100/80 rounded-[40px] p-8 hover:shadow-2xl hover:shadow-pink-50 hover:border-[#eb2e76]/20 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#eb2070] to-[#ff2080] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Sparkles className="w-10 h-10 text-[#eb2e76] group-hover:text-white relative z-10" />
                </div>
                {/* Decorative sparkle icon as in screenshot (manual SVG path) */}
                <div className="absolute -top-2 -right-2 text-[#ffd700] animate-pulse">
                   <Star className="w-6 h-6 fill-current" />
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#eb2e76] transition-colors">{tool.name}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm mb-8">
                {tool.desc}
              </p>
              
              <button className="mt-auto px-6 py-2.5 rounded-full border border-gray-100 text-sm font-bold text-slate-400 group-hover:bg-[#eb2e76] group-hover:text-white group-hover:border-transparent transition-all">
                Learn More
              </button>
            </div>
          ))}
        </section>
      </main>

      {/* Trust Banner */}
      <section className="bg-slate-50 py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-3xl font-black text-slate-900 mb-4">Ready to bring the Hub to your school?</h2>
           <p className="text-slate-500 font-medium mb-12">Join 100+ forward-thinking schools transforming education with AI.</p>
           <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo" className="px-10 py-5 bg-[#eb2e76] text-white font-bold rounded-2xl shadow-xl shadow-pink-100 hover:bg-[#d41c62] transition-all hover:-translate-y-1">Book Free Demo</Link>
              <Link href="/quote" className="px-10 py-5 bg-white text-slate-900 border border-gray-200 font-bold rounded-2xl hover:bg-slate-50 transition-all hover:-translate-y-1">Request Quote</Link>
           </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-12 px-6 border-t border-gray-100 text-center text-slate-400 font-bold text-xs uppercase tracking-widest">
        © 2026 AI Ready School • The one and only AI Platform for Schools
      </footer>
    </div>
  );
}
