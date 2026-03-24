'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Calendar, Share2, Facebook, Twitter, Linkedin, Bookmark, Sparkles } from 'lucide-react';

const POST_CONTENT: Record<string, any> = {
  'teacher-first': {
    title: 'Teacher First: How AI Should Empower Educators, Not Replace Them',
    date: 'March 24, 2026',
    author: 'Girish Reddy',
    role: 'Founder, AI Ready School',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h2>The Uncomfortable Truth About What Teaching Actually Requires</h2>
      <p>A 2025 survey of Indian school teachers found that the average teacher spends only 47% of their working hours on actual teaching. Lesson planning and content creation (28%), assessment creation and grading (14%), and administrative reporting and parent communication (11%) consume the remaining 53%.</p>
      
      <p>That means more than half of a teacher's professional time is spent on work that requires the teacher's knowledge and context but not their distinctly human capabilities. Write a lesson plan for a chapter on fractions requires a curriculum knowledge, but it does not require the ability to read a struggling student's face and know when to push and when to pause.</p>

      <blockquote>"I used to spend every Sunday evening preparing lesson materials for Monday. Three hours minimum. Now I spend that time thinking about how to actually teach the lesson. That is the work I became a teacher to do." — Shraddha Tripathy, Math Educator.</blockquote>

      <h2>The Fear Is Real. The Premise Is Wrong.</h2>
      <p>Teaching is not information delivery. If it were, books and videos would have replaced teachers a century ago. Teaching is the management of the relationship between a student and knowledge. It requires understanding not just what a student knows but also what they feel about learning.</p>
      
      <p>McKinsey analysis suggests AI could automate 30% of teaching-related tasks, freeing the remaining 70%—lesson adaptation, student motivation, and curiosity—for the irreplaceable human teacher. AI will not replace outstanding teachers. AI will replace teachers who refuse to use it.</p>

      <h2>Problem: Most AI Tools Are Built for the AI's Job, Not the Teacher's Workflow</h2>
      <p>Most AI tools generate generic outputs that requires significant work to adapt. A generic AI lesson planner produces a plan in 30 seconds, but the teacher then spends 45 minutes fixing it to match their textbook. This is a failure of design.</p>
      
      <p>Morpheus works differently. It starts with your context—your board, your grade, your teaching style. The teacher is the author; the AI is the production assistant. Nothing reaches students without teacher approval.</p>

      <h2>The Real-Time Visibility Gap</h2>
      <p>When Morpheus is used alongside Cypher, teachers gain real-time visibility. Every interaction a student has generates signals. A teacher who knows on Monday morning that 12 students are struggling with Friday's concept is a fundamentally different teacher. They can adjust their Tuesday lesson before it happens, not three weeks later when the test scores come back.</p>

      <p>India loses many of its best teachers to burnout. When we reduce planning from 3 hours to 45 minutes, we aren't just saving time—we are saving careers. 84% of teachers in our partner schools report feeling more professionally satisfied because they finally have the time to focus on the relational and creative dimensions of teaching.</p>
    `
  },
  'thinking-not-answers': {
    title: 'Why AI Should Make Children Think, Not Give Them Answers',
    date: 'March 23, 2026',
    author: 'Educational Research Team',
    role: 'Pedagogy Lab',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h2>The Copy-Paste Myth: Why Parents & Teachers Worry</h2>
      <p>The fear is well-founded: students using AI tools to generate ready-made essays, homework being done in seconds with zero effort, and kids losing the patience to struggle, practice, and learn. The assumption is that AI equals laziness.</p>
      
      <p>But here’s the flip side. AI is only as smart as the questions you ask. Lazy questions produce lazy answers. AI can’t replace lived experience; a student still needs context, logic, and creativity. Most importantly, smart AI tools reveal gaps, not just answers.</p>

      <blockquote>"The real danger isn’t AI itself—it's not teaching kids how to use it well. Instead of banning AI, we need to ask: How can it help kids become better thinkers?"</blockquote>

      <h2>How AI Becomes a Thinking Partner</h2>
      <p>Instead of a shortcut, AI can be a lever for higher-order thinking. Here is how:</p>
      <ul>
        <li><strong>Question Refinement:</strong> AI pushes students to reframe vague prompts. Instead of "Write about climate change," they learn to ask "Compare two AI-powered urban vs. rural solutions."</li>
        <li><strong>Multiple Perspectives:</strong> AI can instantly show different angles of a problem, from soldiers to policymakers in a history context.</li>
        <li><strong>Instant Feedback:</strong> Instead of waiting weeks for red marks, students see where they went wrong immediately with detailed explanations.</li>
      </ul>

      <h2>From Memorization to Exploration</h2>
      <p>The old way was for a student to memorize Newton’s laws for an exam. The new way? The student uses an AI Tutor to simulate how those laws apply to a specific rocket launch they are designing. This is moving from copying to creating.</p>

      <p>By 2030, students won’t be tested on memory. They’ll be tested on how fast they can solve problems, how creatively they can design solutions, and how well they can work with AI as a co-pilot. Those skills start with teaching kids how to struggle productively today.</p>
    `
  },
  'summit-2026': {
    title: 'What 1,000+ Visitors at India AI Impact Summit Taught Us About Schools and AI',
    date: 'March 20, 2026',
    author: 'Events Team',
    role: 'Community Outreach',
    image: '/blog/india-summit.png',
    content: `
      <h2>The Shift to Sovereignty</h2>
      <p>Last week at the summit, the air was thick with a single question: "How do we stay safe?" School leaders are no longer satisfied with generic cloud tools. There was an overwhelming demand for Sovereign AI—infrastructure like Matrix that schools own and control on-premise. Privacy has moved from a "feature" to the absolute foundation of educational tech.</p>
      
      <h2>The 7 Pillars of AI Readiness</h2>
      <p>In our standing-room-only workshops, we identified seven key hurdles schools are facing: Data Sovereignty, Teacher Empowerment, Safety Filtering, Curriculum Alignment (IB/CBSE), Sustainable Infrastructure costs, and Student Agency. The consensus was clear: "Plug-and-play" is over; "Plan-and-Partner" is the new mandate.</p>

      <p>By 2026, the gap won't be between schools with AI and schools without. It will be between schools with a human-centric AI strategy and those just handing out logins to general-purpose bots. We are here to ensure every school in India finds its way to the former.</p>
    `
  },
  'human-first': {
    title: 'Human First, AI Next: Why Our Philosophy Matters More Than Our Technology',
    date: 'March 18, 2026',
    author: 'Girish Reddy',
    role: 'Founder',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h2>Understanding the Concerns</h2>
      <p>In today's rapidly evolving digital landscape, parents and teachers share legitimate worries. Will AI undermine independent thinking? Will children lose the motivation to master fundamental skills if a bot can do it for them? These are not just technical questions; they are ethical ones.</p>
      
      <h2>The Solution: AI-Augmented Education</h2>
      <p>At AI Ready School, we don't build AI to replace human thought, but to serve it. Our core principle is "Strategic AI Integration." We embed AI at key points in the learning journey to facilitate transitions, provide feedback, and personalize pathways—always ensuring the student performs the essential cognitive work themselves.</p>

      <blockquote>"We position AI as a tool that serves human creativity and agency. If it doesn't make the human more capable, it doesn't belong in the classroom."</blockquote>

      <p>Our focus remains on the "Human-First" philosophy. We place special emphasis on cultivating reading, writing, critical thinking, and storytelling—the skills that make us human. AI is simply the co-pilot that helps us reach those destinations faster.</p>
    `
  },
  'chatgpt-myth': {
    title: 'The Dangerous Myth "We Use ChatGPT, So We\'re an AI School"',
    date: 'March 13, 2026',
    author: 'Tech & Infrastructure Team',
    role: 'Engineering',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h2>The Truth: AI should Support, Not Substitute</h2>
      <p>Many schools believe that giving students access to an open-ended cloud LLM makes them "AI-integrated." The truth is, AI is a teaching assistant, not a replacement. Responsible AI is built with security at its core. Platforms like AI Ready School prioritize ethical use and student data protection, ensuring that the human connection remains the heart of the classroom.</p>
      
      <h2>Infrastructure Over Interfaces</h2>
      <p>If you can use a smartphone, you can use AI. But "using" it safely at scale requires infrastructure. Generic tools use your student data to train their models—we don't. Our infrastructure ensures every byte stays on your campus, safe from third-party mining.</p>

      <ul>
        <li><strong>Security:</strong> Modern AI platforms must follow strict protocols and encrypt sensitive data.</li>
        <li><strong>Simplicity:</strong> User-friendly dashboards mean no coding is required for teachers.</li>
        <li><strong>Longevity:</strong> AI in education isn't a fad; it's a permanent shift in how we improve engagement and personal learning journeys.</li>
      </ul>

      <p>It's time to move past the "Plug-and-play" myth and build a real, safe, and sovereign AI foundation for your school.</p>
    `
  },
  'imagination-to-ink': {
    title: 'From Imagination to Ink: A Grade 5 Story of Creativity and Confidence',
    date: 'March 12, 2026',
    author: 'Success Story',
    role: 'Student Impact',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h2>A Powerful Moment of Awakening</h2>
      <p>During our pilot orientation at Aarambh School, Raipur, we witnessed a shift from passive learning to active exploration. Students discovered that AI can guide them toward discovering their own answers rather than just providing them.</p>
      
      <h2>The "Agent Buddy" Experience</h2>
      <p>The standout success was "Agent Buddy." Students quickly connected with it because it didn't give away answers—it pushed them to think independently, ask deeper questions, and brainstorm creatively. Classroom Research Lab sessions became more investigative and alive than ever before.</p>

      <blockquote>"I didn't just learn about the topic; I learned how to research it myself. The AI helped me organize my ideas, but I was the one who wrote the story." — Grade 5 Student.</blockquote>

    `
  },
  'techx-2025': {
    title: 'AI Ready School at ET TechX Hyderabad: Showcasing Practical AI Adoption',
    date: 'December 15, 2025',
    author: 'Marketing Team',
    role: 'Event Coverage',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h2>Bridging the Gap Between Hype and Reality</h2>
      <p>At the recent ET TechX Hyderabad summit, AI Ready School demonstrated that AI in education isn't a futuristic luxury—it's a current necessity. We showcased how schools can move beyond simple chat interfaces to structured frameworks that support both teachers and students.</p>
      
      <h2>Interactive Showcases</h2>
      <p>Our booth saw over 500 educators who interacted with Morpheus and Cypher. The primary feedback was clear: schools are looking for safety and control. They want tools that align with their local curriculum, not just general-purpose models.</p>

      <blockquote>"Seeing AI that actually understands the CBSE syllabus was a game-changer for our visitors. It proved that localized AI is the only way forward for Indian education."</blockquote>

      <p>We are grateful for the overwhelming support and the several new partnerships forged at the event. Hyderabad continues to be a hub for educational innovation, and we are proud to be leading the charge.</p>
    `
  },
  'ai-right-way': {
    title: 'How to Use AI the Right Way at Your School',
    date: 'December 6, 2025',
    author: 'Principal Advisory',
    role: 'Governance',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h2>The Implementation Framework</h2>
      <p>Many schools rush into AI adoption without a roadmap. We recommend a phased approach: Governance first, then Teacher Empowerment, and finally Student Integration. Without clear rules on data privacy and academic integrity, AI can do more harm than good.</p>
      
      <h2>Key Best Practices</h2>
      <p>1. <strong>Localize Data:</strong> Never use general public tools for sensitive student info. <br>
         2. <strong>Train the Trainer:</strong> Invest in teacher workshops before handing out logins.<br>
         3. <strong>Define 'Agency':</strong> Set clear boundaries on when AI is a draft-generator vs. an editor.</p>

      <p>Using AI "the right way" means ensuring it acts as a scaffolding for learning, not a shortcut for thinking. At AI Ready School, we help you set these guardrails from day one.</p>
    `
  }
};

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const post = POST_CONTENT[resolvedParams.id];

  if (!post) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-20 bg-slate-50">
       <div className="text-8xl font-black text-slate-100 mb-8">404</div>
       <h1 className="text-4xl font-black text-slate-800 mb-4">Post Not Found</h1>
       <p className="text-slate-500 mb-10">The article you are looking for has moved or does not exist.</p>
       <Link href="/blog" className="bg-[#eb2e76] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all">Back to Blog</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="p-8 max-w-7xl mx-auto flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Link href="/blog" className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-slate-900 transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back to Blog
        </Link>
        <Link href="/" className="group/logo flex flex-col leading-none">
          <div className="flex items-center relative gap-0.5">
            <Sparkles className="w-4 h-4 text-[#eb2e76] absolute -top-3 left-0" />
            <span className="text-2xl font-black tracking-tighter text-[#eb2e76]">AI Ready</span>
            <span className="text-[10px] font-bold text-[#eb2e76] relative -top-3 ml-0.5">TM</span>
          </div>
          <div className="flex justify-center -mt-0.5">
            <span className="text-[16px] font-extrabold tracking-tight bg-gradient-to-r from-[#ffca28] to-[#eb2e76] bg-clip-text text-transparent italic">
              School
            </span>
          </div>
        </Link>
        <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-slate-900 transition-all border border-slate-100 hidden md:block">
          <Share2 className="w-5 h-5" />
        </button>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-8 pt-20 pb-16 text-center">
         <div className="flex items-center justify-center gap-3 text-slate-400 text-xs uppercase font-black tracking-widest mb-8">
            <Calendar className="w-4 h-4" />
            {post.date}
         </div>
         <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tight">{post.title}</h1>
         
         <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 bg-[#eb2e76] rounded-full flex items-center justify-center text-white font-black text-xl">
               {post.author.charAt(0)}
            </div>
            <div className="text-left">
               <div className="font-black text-slate-900 leading-none mb-1">{post.author}</div>
               <div className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">{post.role}</div>
            </div>
         </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-8 mb-20">
         <div className="aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl bg-slate-100">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
         </div>
      </div>

      {/* Article Body - REMOVED PROSE TO FIX BLANK RENDERING */}
      <main className="max-w-3xl mx-auto px-8 pb-32">
         <div 
            className="text-slate-700 space-y-8 text-lg md:text-xl font-medium leading-relaxed
                       [&_h2]:text-3xl [&_h2]:font-black [&_h2]:text-slate-900 [&_h2]:pt-10 [&_h2]:tracking-tight
                       [&_blockquote]:border-l-8 [&_blockquote]:border-[#eb2e76] [&_blockquote]:bg-pink-50 [&_blockquote]:p-8 [&_blockquote]:rounded-3xl [&_blockquote]:italic [&_blockquote]:text-xl [&_blockquote]:font-bold [&_blockquote]:text-slate-800
                       [&_strong]:text-slate-900 [&_strong]:font-black
                       [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }} 
         />
         
         {/* Share / Social Buttons */}
         <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="font-black text-slate-300 uppercase tracking-[4px] text-xs">Share this insight</div>
            <div className="flex gap-4">
               <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#eb2e76] hover:text-white transition-all"><Facebook className="w-5 h-5" /></button>
               <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#eb2e76] hover:text-white transition-all"><Twitter className="w-5 h-5" /></button>
               <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#eb2e76] hover:text-white transition-all"><Linkedin className="w-5 h-5" /></button>
               <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#eb2e76] hover:text-white transition-all"><Bookmark className="w-5 h-5" /></button>
            </div>
         </div>
      </main>

      {/* Reach out CTA */}
      <section className="bg-slate-50 py-32 px-8 text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Ready to lead the change?</h2>
            <p className="text-slate-500 font-medium text-lg mb-10">Join the movement of schools putting human intelligence first in the AI era.</p>
            <Link href="/demo" className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl inline-block">
               Partner with Us
            </Link>
         </div>
      </section>
    </div>
  );
}
