'use client';

import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle, 
  ChevronLeft, 
  ArrowRight, 
  Bot, 
  UserCircle, 
  Layout, 
  Lightbulb, 
  Database,
  Sparkles,
  Zap,
  Shield,
  Search,
  MessageSquare,
  TrendingUp,
  Target,
  Users,
  Eye,
  Server,
  Cpu,
  Video,
  Monitor,
  Headphones,
  Code,
  Image as ImageIcon,
  FileText,
  PlayCircle,
  HelpCircle,
  Activity,
  Award,
  Quote
} from 'lucide-react';

const PRODUCT_CONTENT: Record<string, any> = {
  cypher: {
    name: 'Cypher',
    badge: 'A Personal AI Learning Companion',
    title: 'Cypher Guides Students to Think Better and Learn Confidently',
    desc: 'Cypher is not just a generic chatbot that spoon-feeds; it\'s a thinking partner designed to help children discover knowledge through guided discovery and built-in safety filters.',
    icon: <Bot className="w-16 h-16" />,
    color: 'text-[#eb2e76]',
    accent: '#eb2e76',
    bgLight: 'bg-pink-50',
    border: 'border-pink-100',
    sections: [
      {
        type: 'feature-grid',
        title: 'Built for Guided Discovery',
        desc: 'Going beyond simple answers to foster true understanding and critical thinking skills.',
        items: [
          { title: 'Step-by-Step Guidance', desc: 'Breaks down complex problems into manageable thought processes.', icon: <TrendingUp className="w-6 h-6" /> },
          { title: 'Sophisticated Logic', desc: 'Combines multiple AI models for unparalleled accuracy and reasoning.', icon: <Cpu className="w-6 h-6" /> },
          { title: 'Contextual Adaptation', desc: 'Learns how each student interacts and adjusts its tone and depth.', icon: <Activity className="w-6 h-6" /> },
          { title: 'Safe by Design', desc: 'Strict educational filters keep students on track and focused.', icon: <Shield className="w-6 h-6" /> }
        ]
      },
      {
        type: 'split-info',
        title: '360° Learner Profile',
        desc: 'Cypher analyzes every interaction to create a comprehensive view of the student\'s progress, cognitive style, and unique learning gaps.',
        features: [
          'Tracks learning behavior across tasks',
          'Reveals hidden patterns in knowledge retention',
          'Provides personalized remedial suggestions',
          'Updated in real-time with every action'
        ],
        icon: <Users className="w-12 h-12" />
      },
      {
        type: 'steps',
        title: 'The Continuous Learning Loop',
        desc: 'Cypher captures, analyzes, and designs a personalized action plan every single day.',
        items: [
          { num: '1', title: 'Capture Signals', desc: 'Collects data from quizzes, tasks, and conversations.' },
          { num: '2', title: 'Analyze Progress', desc: 'Extracts deep insights about behavior and progress.' },
          { num: '3', title: 'Action Plan', desc: 'Designs the perfect intervention for student targets.' }
        ]
      },
      {
        type: 'tutoring-suite',
        title: 'The Smartest Tutoring Suite',
        items: [
          { name: 'Text & Conversation', icon: <MessageSquare className="w-5 h-5" /> },
          { name: 'Code Assistance', icon: <Code className="w-5 h-5" /> },
          { name: 'Image Generation', icon: <ImageIcon className="w-5 h-5" /> },
          { name: 'Interactive Diagrams', icon: <Activity className="w-5 h-5" /> },
          { name: 'YT Video Analysis', icon: <PlayCircle className="w-5 h-5" /> },
          { name: 'Assignments Support', icon: <FileText className="w-5 h-5" /> }
        ]
      }
    ],
    faqs: [
      { q: "Is Cypher just like ChatGPT?", a: "No, it is specifically tuned to help children 'discover' knowledge and build skills rather than just giving direct answers." },
      { q: "Does it help with homework?", a: "Yes, it acts as a playful companion that assists in understanding, completing, and providing feedback on homework." },
      { q: "Is it safe for children?", a: "Yes, Cypher features built-in safety filters and is strictly confined to set educational boundaries." },
      { q: "Can it understand voice?", a: "Yes, Cypher supports multimodal interaction, allowing students to engage using both text and voice." },
      { q: "Does it follow the syllabus?", a: "Yes, students can ask questions and receive answers specifically within their prescribed syllabus." }
    ],
    testimonials: [
      { quote: "Cypher has simplified my daily teaching work. It helps me quickly create worksheets, lesson plans, and engaging content.", author: "Grade 5 Teacher", role: "Primary Educator" },
      { quote: "It feels like a smart teaching assistant. I can create personalized resources in minutes.", author: "Jayesh", role: "School Coordinator" }
    ]
  },
  morpheus: {
    name: 'Morpheus',
    badge: 'The AI Teaching Agent',
    title: 'The Future of Teaching is Here!',
    desc: 'Morpheus is designed to work with you, not replace you. It handles the heavy lifting of lesson planning so you can focus on what really matters.',
    icon: <UserCircle className="w-16 h-16" />,
    color: 'text-purple-500',
    accent: '#8b5cf6',
    bgLight: 'bg-purple-50',
    border: 'border-purple-100',
    sections: [
      {
        type: 'feature-grid',
        title: 'Super Fast Content Creation',
        desc: 'Built for real classrooms, aligned to IB, Cambridge & CBSE.',
        items: [
          { title: 'Lesson Planning', desc: 'Create subtopics, worksheets, and charts tailored to your needs.', icon: <FileText className="w-6 h-6" /> },
          { title: 'Presentation Engine', desc: 'Saves hours on slide creation for complex topics.', icon: <Monitor className="w-6 h-6" /> },
          { title: 'Math Content', desc: 'Generate complex equations and explanations in minutes.', icon: <Zap className="w-6 h-6" /> },
          { title: 'Curriculum Mapping', desc: 'Aligns perfectly with international and local standards.', icon: <Award className="w-6 h-6" /> }
        ]
      },
      {
        type: 'steps',
        title: 'How it works?',
        desc: 'Just tell Morpheus what you want to teach. It takes care of the rest.',
        items: [
          { num: '1', title: 'Tell Morpheus', desc: 'Input your topic or learning objectives.' },
          { num: '2', title: 'Plan Ready', desc: 'Receive your full lesson plans and activities.' },
          { num: '3', title: 'Assign & Track', desc: 'Deploy to students and monitor engagement.' }
        ]
      }
    ],
    faqs: [
      { q: "Is it difficult to use?", a: "Not at all. If you can choose options and click a button, you can use Morpheus." },
      { q: "Will AI replace teachers?", a: "No. Morpheus is designed to support teachers, not replace them." },
      { q: "Can I customize the content?", a: "Yes. You can fully customize lessons, materials, and instructions." },
      { q: "How much time can I save?", a: "Teachers can save up to 75% of their time on lesson planning, testing, and tracking." }
    ],
    testimonials: [
      { quote: "It's a huge relief for educators juggling multiple responsibilities. It simplifies routine tasks like generating worksheets.", author: "Mansi", role: "Educator" },
      { quote: "The slides presentation feature has transformed how I teach—making complex topics easier to present.", author: "Sandeep", role: "Math Teacher" }
    ]
  },
  matrix: {
    name: 'Matrix',
    badge: 'Sovereign AI Infrastructure',
    title: 'Your School\'s Private AI Foundation',
    desc: 'Run AI locally through dedicated servers and models, ensuring that sensitive student and staff data never leaves your premises.',
    icon: <Database className="w-16 h-16" />,
    color: 'text-slate-600',
    accent: '#475569',
    bgLight: 'bg-slate-50',
    border: 'border-slate-100',
    sections: [
      {
        type: 'split-info',
        title: 'Why Matrix Infrastructure?',
        desc: 'In an age where data privacy is paramount, every school needs its own AI foundation—owned, controlled, and operated on campus.',
        features: [
          'No third-party data exposure or cloud leaks',
          'Zero internet dependency for core operations',
          'Full control over your AI ecosystem',
          'Fully aligned with India\'s DPDP Act'
        ],
        icon: <Shield className="w-12 h-12" />
      },
      {
        type: 'pillar-cards',
        title: 'Infrastructure Highlights',
        items: [
          { title: 'Local AI Servers', desc: 'Our server comes pre-loaded with software and connects to the AI Ready Cloud.', icon: <Server className="w-8 h-8" /> },
          { title: 'Internal Models', desc: 'Runs best open-source models (DeepSeek, etc.) optimized for education.', icon: <Cpu className="w-8 h-8" /> },
          { title: 'AI Surveillance', desc: 'Intelligent CCTV detects unusual activity and unauthorized access in real-time.', icon: <Video className="w-8 h-8" /> },
          { title: 'Classroom Insights', desc: 'Track attendance and engagement without Disrupting learning.', icon: <Monitor className="w-8 h-8" /> }
        ]
      }
    ],
    faqs: [
      { q: "What is Matrix exactly?", a: "Matrix is AI Ready School's on-premises infrastructure—a sovereign, school-owned AI server." },
      { q: "How is it different from Cloud AI?", a: "Matrix keeps all processing within school premises, ensuring compliance with DPDP Act and zero internet dependency." },
      { q: "Do we need IT experts?", a: "No. AI Ready School handles the complete installation, configuration, and ongoing maintenance." },
      { q: "Does it work without internet?", a: "Yes. Students and teachers can access the full suite of AI tools over the local network." }
    ],
    testimonials: [
      { quote: "Complete sovereignty over our school's AI ecosystem was the deciding factor for us.", author: "School Administrator", role: "Operations" }
    ]
  },
  neo: {
    name: 'Neo',
    badge: 'The AI Innovation Lab',
    title: 'Where students don\'t just learn AI, they build with it.',
    desc: 'NEO is a Complete AI Innovation Lab for Schools. Students build AI models, work with robotics, and develop future skills aligned with NEP 2020.',
    icon: <Lightbulb className="w-16 h-16" />,
    color: 'text-emerald-500',
    accent: '#10b981',
    bgLight: 'bg-emerald-50',
    border: 'border-emerald-100',
    sections: [
      {
        type: 'numbered-list',
        title: 'Lab Building Blocks',
        items: [
          { title: 'Lab Hardware', desc: 'Full setup of AI servers, robotics kits, and computing hubs.' },
          { title: 'AI Project Curriculum', desc: 'Step-by-step guides for building real-world AI applications focused on age-appropriate goals.' },
          { title: 'Innovation Clubs', desc: 'Integrated environment where students share, prototype, and scale their AI ideas.' },
          { title: 'AI Mentorship', desc: 'Skillful guidance from AI experts deployed directly to your campus.' }
        ]
      }
    ],
    faqs: [
      { q: "What is a NEO Lab?", a: "It is a dedicated space in schools where students learn AI through hands-on projects and experiments." },
      { q: "Do we need a whole new room?", a: "Not necessarily. Existing computer or robotics labs can often be converted." },
      { q: "Who teaches the sessions?", a: "Highly trained AI mentors are deployed to your campus to conduct sessions." },
      { q: "Is it suitable for all ages?", a: "Yes, the projects are designed for different age groups from Grade 1 through 12." }
    ],
    testimonials: [
      { quote: "Participating in NEO workshops gave me practical insights that transformed my teaching approach.", author: "Ankit", role: "EdTech Lead" }
    ]
  },
  zion: {
    name: 'Zion',
    badge: '30+ AI Tools in One Place',
    title: 'Zion: The All-in-One AI Tool Suite',
    desc: 'A powerful collection of tools that helps students learn faster, think better, and create amazing things using integrated AI agents.',
    icon: <Layout className="w-16 h-16" />,
    color: 'text-blue-500',
    accent: '#3b82f6',
    bgLight: 'bg-blue-50',
    border: 'border-blue-100',
    sections: [
      {
        type: 'feature-grid',
        title: 'Unified Power',
        items: [
          { title: 'K-12 Discovery', desc: 'Accelerate subject discovery with targeted learning agents.', icon: <Target className="w-6 h-6" /> },
          { title: 'Multimedia Lab', desc: 'Visual generators, presentation tools, and automated storytellers.', icon: <Sparkles className="w-6 h-6" /> },
          { title: 'Inquiry Hub', desc: 'Advanced tools for deep research, fact-checking, and inquiry.', icon: <Search className="w-6 h-6" /> },
          { title: 'Project Lifecycle', desc: 'Support for planning, building, and presenting school projects.', icon: <Layout className="w-6 h-6" /> }
        ]
      }
    ],
    faqs: [
      { q: "What is Zion?", a: "Zion is a collection of 30+ AI tools that helps students learn, research, and create in one platform." },
      { q: "Is it easy for children?", a: "Yes. The tools are simple and designed for students to use independently." },
      { q: "Can teachers use it?", a: "Yes. Teachers use it daily to create worksheets, lessons, and activity plans." },
      { q: "Is it safe?", a: "Yes. The platform is designed specifically for schools to provide a safe, structured AI environment." }
    ],
    testimonials: [
      { quote: "Zion brings everything educators need into one place—from test papers to activity plans.", author: "Jyoti", role: "Primary Teacher" },
      { quote: "It lets me create personalized visuals that make complex science topics easier to teach.", author: "Vrishali", role: "Science Educator" }
    ]
  }
};

export default function SchoolPillarPage({ params }: { params: Promise<{ product: string }> }) {
  const resolvedParams = React.use(params);
  const productId = resolvedParams.product.toLowerCase();
  const product = PRODUCT_CONTENT[productId];

  if (!product) return <div className="p-20 text-center font-bold text-slate-400">Pillar Not Found: {productId}</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] ${product.bgLight} rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/2`}></div>
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] ${product.bgLight} rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2`}></div>
      </div>

      {/* Navigation */}
      <nav className="p-8 flex items-center justify-between max-w-7xl mx-auto backdrop-blur-md sticky top-0 z-50">
        <Link href="/solutions/schools" className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-slate-900 transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back to Pillars
        </Link>
        <Link href="/" className="group/logo flex flex-col leading-none">
          <div className="flex items-center relative gap-0.5">
            <Sparkles className="w-4 h-4 text-[#eb2e76] absolute -top-3 left-0 animate-pulse" />
            <span className="text-3xl font-black tracking-tighter text-[#eb2e76]">AI Ready</span>
            <span className="text-[10px] font-bold text-[#eb2e76] relative -top-3 ml-0.5">TM</span>
          </div>
          <div className="flex justify-center -mt-0.5">
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#ffca28] to-[#eb2e76] bg-clip-text text-transparent italic">
              School
            </span>
          </div>
        </Link>
        <Link href="/demo" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-[#eb2e76] transition-all">
          Book Demo
        </Link>
      </nav>

      {/* Hero */}
      <section className="py-24 px-8 text-center max-w-5xl mx-auto">
        <div className={`inline-block px-4 py-1.5 ${product.bgLight} ${product.color} rounded-full text-[10px] font-black uppercase tracking-[3px] mb-10 shadow-sm border ${product.border}`}>
          {product.badge}
        </div>
        <h1 className="text-7xl font-black text-slate-900 mb-10 leading-[1] tracking-tight">
          {product.title}
        </h1>
        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
          {product.desc}
        </p>

        <div className="mt-16 relative flex justify-center">
            <div className={`w-32 h-32 ${product.bgLight} rounded-[40px] flex items-center justify-center ${product.color} shadow-xl border ${product.border} animate-float`}>
              {product.icon}
            </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      <main className="px-8 max-w-7xl mx-auto pb-24 space-y-48">
        {product.sections.map((section: any, idx: number) => (
          <div key={idx} className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
            {section.type === 'feature-grid' && (
              <div>
                <div className="max-w-3xl mb-16">
                   <h2 className="text-5xl font-black text-slate-900 mb-6">{section.title}</h2>
                   <p className="text-xl text-slate-500 font-medium">{section.desc}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {section.items.map((item: any, i: number) => (
                    <div key={i} className="group p-10 bg-white border border-slate-100 rounded-[40px] transition-all hover:shadow-2xl hover:-translate-y-2">
                       <div className={`w-14 h-14 ${product.bgLight} ${product.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                         {item.icon}
                       </div>
                       <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                       <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.type === 'split-info' && (
              <div className="flex flex-col md:flex-row items-center gap-24">
                 <div className="flex-1">
                    <h2 className="text-5xl font-black text-slate-900 mb-8">{section.title}</h2>
                    <p className="text-xl text-slate-500 font-medium mb-12">{section.desc}</p>
                    <div className="space-y-4">
                       {section.features.map((f: string, i: number) => (
                         <div key={i} className="flex items-center gap-4">
                            <CheckCircle className={`w-6 h-6 ${product.color}`} />
                            <span className="text-lg font-bold text-slate-900">{f}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className={`flex-1 w-full aspect-square ${product.bgLight} rounded-[60px] flex items-center justify-center relative`}>
                    <div className="absolute inset-20 bg-white/40 backdrop-blur-3xl rounded-[40px] shadow-2xl"></div>
                    <div className={`${product.color} relative z-10 scale-150`}>{section.icon}</div>
                 </div>
              </div>
            )}

            {section.type === 'steps' && (
              <div className="text-center">
                 <h2 className="text-5xl font-black text-slate-900 mb-6">{section.title}</h2>
                 <p className="text-xl text-slate-500 font-medium mb-24 max-w-2xl mx-auto">{section.desc}</p>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                    <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-slate-100 -z-10"></div>
                    {section.items.map((step: any, i: number) => (
                       <div key={i} className="flex flex-col items-center group">
                          <div className="w-[124px] h-[124px] bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-4xl font-black text-slate-200 mb-10 shadow-xl group-hover:border-slate-900 group-hover:text-slate-900 transition-all">
                             {step.num}
                          </div>
                          <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
                          <p className="text-slate-500 font-medium px-8">{step.desc}</p>
                       </div>
                    ))}
                 </div>
              </div>
            )}

            {section.type === 'tutoring-suite' && (
              <div className="bg-slate-900 rounded-[60px] p-20 text-white relative overflow-hidden">
                 <h2 className="text-5xl font-black mb-16">{section.title}</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.items.map((suite: any, i: number) => (
                      <div key={i} className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                         <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#eb2e76]">{suite.icon}</div>
                         <div className="font-black text-lg">{suite.name}</div>
                      </div>
                    ))}
                 </div>
              </div>
            )}

            {section.type === 'pillar-cards' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {section.items.map((item: any, i: number) => (
                  <div key={i} className="bg-white p-12 border border-slate-100 rounded-[60px] hover:shadow-2xl transition-all group">
                     <div className={`w-20 h-20 ${product.bgLight} ${product.color} rounded-3xl flex items-center justify-center mb-12 shadow-sm`}>
                       {item.icon}
                     </div>
                     <h3 className="text-4xl font-black text-slate-900 mb-6">{item.title}</h3>
                     <p className="text-xl text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {section.type === 'numbered-list' && (
              <div className="max-w-4xl mx-auto space-y-12">
                {section.items.map((item: any, i: number) => (
                  <div key={i} className="flex gap-12 p-12 bg-slate-50/50 rounded-[50px] border border-slate-100 group">
                     <div className="text-6xl font-black text-slate-100 group-hover:text-emerald-300 transition-colors">0{i+1}</div>
                     <div>
                        <h3 className="text-3xl font-black text-slate-900 mb-6">{item.title}</h3>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </main>

      {/* Testimonials Section */}
      <section className="py-32 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <div className={`inline-block px-4 py-1.5 ${product.bgLight} ${product.color} rounded-full text-[10px] font-black uppercase tracking-[3px] mb-8`}>
              Success Stories
            </div>
            <h2 className="text-5xl font-black text-slate-900">What our community is saying.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {product.testimonials.map((t: any, i: number) => (
              <div key={i} className="bg-white p-12 rounded-[50px] shadow-sm border border-slate-100 relative group">
                <Quote className={`w-12 h-12 ${product.color} opacity-20 absolute top-10 right-10 group-hover:opacity-100 transition-opacity`} />
                <p className="text-2xl font-bold text-slate-900 mb-10 leading-relaxed">"{t.quote}"</p>
                <div>
                  <div className="font-black text-slate-900">{t.author}</div>
                  <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="container max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-black text-slate-900 text-center mb-20">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {product.faqs.map((faq: any, i: number) => (
              <details key={i} className="group border border-slate-100 rounded-3xl overflow-hidden bg-white hover:bg-slate-50 transition-colors">
                <summary className="p-8 cursor-pointer list-none flex items-center justify-between font-bold text-lg text-slate-900">
                  {faq.q}
                  <ChevronLeft className="w-5 h-5 -rotate-90 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-8 pt-0 text-slate-500 font-medium leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Global CSS */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Modern Footer CTA */}
      <section className={`py-32 ${product.bgLight} relative shadow-inner`}>
        <div className="max-w-7xl mx-auto px-8 text-center flex flex-col items-center">
           <h2 className="text-6xl font-black mb-12 text-slate-900">Experience {product.name} today.</h2>
           <Link href="/demo" className="bg-slate-900 text-white px-16 py-8 rounded-3xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl">
              Book a Strategy Session
           </Link>
        </div>
      </section>
    </div>
  );
}
