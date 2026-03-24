import {
  LayoutDashboard,
  Search,
  Bell,
  Home,
  Users,
  GraduationCap,
  LayoutGrid,
  BarChart2,
  Settings,
  Star,
  FileText,
  BookOpen,
  HelpCircle,
  Sparkles,
  Code,
  MonitorPlay,
  Monitor,
  Send,
  CheckCircle,
  Bot,
  ChevronRight,
  Microscope
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HubContent = ({ title, desc, tools, hubId }: { title: string, desc: string, tools: any[], hubId: string }) => (
  <div className="animate-in fade-in slide-in-from-right-8 duration-500">
    <div className="max-w-2xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-[1.1]">{title}</h2>
        <Link href={`/platform/${hubId}-hub`} className="px-6 py-2.5 rounded-full bg-[#eb2e76] text-white text-sm font-bold shadow-lg shadow-pink-100 hover:bg-[#d41c62] transition-all whitespace-nowrap ml-6 flex items-center gap-2">
           View Full Page <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <p className="text-slate-500 font-medium text-lg leading-relaxed mb-12">{desc}</p>
      <div className="grid grid-cols-2 gap-6 pb-8">
        {tools.map((tool: any, i: number) => (
          <div key={i} className="group/tool bg-slate-50/50 border border-gray-100/50 rounded-3xl p-6 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm mb-4 flex items-center justify-center text-[#eb2e76] group-hover/tool:scale-110 transition-transform">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div className="font-bold text-slate-900 group-hover/tool:text-[#eb2e76] transition-colors mb-1">{tool.name}</div>
            <div className="text-xs font-semibold text-slate-400 leading-normal">{tool.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-50 relative">
        <Link href="/" className="group/logo flex flex-col leading-none scale-110 origin-left">
          <div className="flex items-center relative">
            {/* Sparkle cluster */}
            <div className="absolute -top-4 -left-1 flex gap-0">
              <Sparkles className="w-4 h-4 text-[#eb2e76] animate-pulse" />
              <Sparkles className="w-2 h-2 text-[#eb2e76] absolute top-1 left-3 opacity-60" />
            </div>
            <span className="text-3xl font-black tracking-tighter text-[#eb2e76]">AI Ready</span>
            <span className="text-[10px] font-bold text-[#eb2e76] relative -top-3 ml-0.5">TM</span>
          </div>
          <div className="pl-14 -mt-1">
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-[#ffca28] via-[#eb2e76] to-[#eb2e76] bg-clip-text text-transparent italic">
              School
            </span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-10 font-semibold text-[16px]">
            <Link href="#home" className="relative text-slate-800 after:content-[''] after:absolute after:-bottom-[20px] after:left-0 after:right-0 after:h-[3px] after:bg-[#eb2e76] after:rounded-full">
              Home
            </Link>
            
            <div className="relative group/solutions cursor-pointer">
              <div className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 py-4">
                Solutions
                <svg className="w-3.5 h-3.5 text-slate-400 group-hover/solutions:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </div>
              <div className="absolute top-[85%] left-1/2 -translate-x-1/2 min-w-[320px] bg-white border border-gray-100/50 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] opacity-0 invisible group-hover/solutions:opacity-100 group-hover/solutions:visible transition-all duration-300 translate-y-2 group-hover/solutions:translate-y-0 overflow-hidden z-50 p-3">
                <Link href="/solutions/schools" className="flex items-center gap-4 p-5 rounded-[22px] hover:bg-slate-50 transition-all group/item">
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-[#eb2e76] group-hover/item:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-10V4m0 10V4m-4 12h.01M15 16h.01M9 20h.01M15 20h.01" /></svg>
                  </div>
                  <div>
                    <div className="text-[17px] font-bold text-slate-900 mb-0.5">For Schools</div>
                    <div className="text-[13px] text-slate-500 font-medium leading-tight">Complete AI ecosystem for district-wide impact.</div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative group/platform cursor-pointer">
              <div className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 py-4">
                Platform
                <svg className="w-3.5 h-3.5 text-slate-400 group-hover/platform:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </div>
              <div className="absolute top-[85%] left-1/2 -translate-x-1/2 min-w-[320px] bg-white border border-gray-100/50 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] opacity-0 invisible group-hover/platform:opacity-100 group-hover/platform:visible transition-all duration-300 translate-y-2 group-hover/platform:translate-y-0 p-4 z-50">
                <div className="flex flex-col gap-2">
                  {[
                    { id: 'learning', name: 'Learning Hub', desc: 'AI tools for guided discovery', icon: <Bot className="w-5 h-5" />, color: 'bg-pink-50 text-pink-500' },
                    { id: 'creative', name: 'Creative Hub', desc: 'Media and visual AI generation', icon: <Sparkles className="w-5 h-5" />, color: 'bg-purple-50 text-purple-500' },
                    { id: 'project', name: 'Project Hub', desc: 'Coding and building playgrounds', icon: <Code className="w-5 h-5" />, color: 'bg-blue-50 text-blue-500' },
                    { id: 'research', name: 'Research Hub', desc: 'Deep analysis and reporting', icon: <Microscope className="w-5 h-5" />, color: 'bg-emerald-50 text-emerald-500' }
                  ].map((hub) => (
                    <Link key={hub.id} href={`/platform/${hub.id}-hub`} className="flex items-center gap-4 p-4 rounded-[22px] transition-all duration-300 hover:bg-slate-50 group/hub">
                      <div className={`w-11 h-11 ${hub.color} rounded-xl flex items-center justify-center transition-transform group-hover/hub:scale-110`}>
                        {hub.icon}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover/hub:text-[#eb2e76] transition-colors">{hub.name}</div>
                        <div className="text-[12px] font-medium text-slate-400">{hub.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group/resources cursor-pointer">
              <div className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 py-4">
                Resources
                <svg className="w-3.5 h-3.5 text-slate-400 group-hover/resources:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </div>
              <div className="absolute top-[85%] left-1/2 -translate-x-1/2 min-w-[280px] bg-white border border-gray-100 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] opacity-0 invisible group-hover/resources:opacity-100 group-hover/resources:visible transition-all duration-300 translate-y-2 group-hover/resources:translate-y-0 p-4 z-50">
                <div className="flex flex-col gap-2">
                  <Link href="/watch" className="flex items-center gap-4 p-4 rounded-[22px] transition-all duration-300 hover:bg-slate-50 group/res">
                    <div className="w-11 h-11 bg-pink-50 text-pink-500 rounded-xl flex items-center justify-center group-hover/res:scale-110 transition-transform">
                      <MonitorPlay className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 group-hover/res:text-[#eb2e76] transition-colors">Watch</div>
                      <div className="text-[12px] font-medium text-slate-400">Video demos & workshops</div>
                    </div>
                  </Link>
                  <Link href="/blog" className="flex items-center gap-4 p-4 rounded-[22px] transition-all duration-300 hover:bg-slate-50 group/res">
                    <div className="w-11 h-11 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center group-hover/res:scale-110 transition-transform">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 group-hover/res:text-[#eb2e76] transition-colors">Blog</div>
                      <div className="text-[12px] font-medium text-slate-400">Latest AI news & insights</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group/pricing cursor-pointer">
              <div className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 py-4">
                Pricing
                <svg className="w-3.5 h-3.5 text-slate-400 group-hover/pricing:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </div>
              <div className="absolute top-[85%] left-1/2 -translate-x-1/2 min-w-[300px] bg-white border border-gray-100/50 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] opacity-0 invisible group-hover/pricing:opacity-100 group-hover/pricing:visible transition-all duration-300 translate-y-2 group-hover/pricing:translate-y-0 p-4 z-50">
                <Link href="/quote" className="flex items-center gap-4 p-5 rounded-[22px] transition-all duration-300 hover:bg-slate-50 group/price">
                  <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center group-hover/price:scale-110 transition-transform">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[#0f172a] text-lg group-hover/price:text-[#eb2e76] transition-colors">View Plans</div>
                    <div className="text-[12px] font-semibold text-slate-400">Essential to Enterprise solutions</div>
                  </div>
                </Link>
              </div>
            </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
            <Link href="/sign-in" target="_blank" className="px-5 py-2.5 flex items-center justify-center text-sm font-semibold text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm transition">Sign In</Link>
            <Link href="/demo" className="px-5 py-2.5 text-sm font-semibold text-white bg-[#eb2e76] border border-transparent rounded-lg hover:bg-[#d41c62] shadow-sm transition">Free Demo</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-xl">
              <h1 className="text-5xl lg:text-5xl font-extrabold leading-[1.15] mb-6 tracking-tight text-gray-900">
                  Bring AI Learning to<br/>
                  Your School – The Easy Way
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
                  Help students learn better, teachers save time, and your school use AI tools easily.
              </p>
              
              <div className="flex items-center gap-4 mb-10">
                  <Link href="/demo" className="inline-flex px-6 py-3.5 text-base font-semibold text-white bg-[#eb2e76] rounded-lg shadow-[0_10px_20px_rgba(235,46,118,0.2)] hover:shadow-[0_10px_25px_rgba(235,46,118,0.3)] hover:-translate-y-0.5 transition-all">Book Free Demo</Link>
                  <button className="px-6 py-3.5 text-base font-semibold text-gray-800 bg-white border border-gray-200 rounded-lg outline-none hover:bg-gray-50 transition-all shadow-sm">See How It Works</button>
              </div>
              
              <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                      {/* Using unoptimized standard images strictly as requested for demo without next/image config issues */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://ui-avatars.com/api/?name=Jane&background=fce4ec&color=ec407a" alt="User 1"/>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://ui-avatars.com/api/?name=John&background=e8eaf6&color=3f51b5" alt="User 2"/>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://ui-avatars.com/api/?name=Sarah&background=e0f2f1&color=009688" alt="User 3"/>
                  </div>
                  <div>
                      <div className="flex gap-[2px] text-[#ffc107] mb-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-xs text-gray-600 font-medium">Trusted by 100+ schools <span className="text-gray-300 mx-1">|</span> 10,000+ students</p>
                  </div>
              </div>
          </div>

          {/* Right Hero Mockup Image (CSS Drawing of the exact dashboard) */}
          <div className="relative w-full aspect-[4/3] bg-white rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] border border-gray-100 p-4 flex flex-col font-sans text-sm ml-auto mr-0 scale-105 origin-right lg:origin-center bg-gray-50 z-10">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-[#eb2e76] font-bold text-lg">
                      <LayoutDashboard className="w-5 h-5" />
                      AI Ready School
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="relative w-64 shadow-sm">
                          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                          <input type="text" placeholder="Search..." className="w-full bg-white rounded-full py-1.5 pl-9 pr-4 text-sm border-none shadow-inner outline-none text-gray-600" disabled />
                      </div>
                  </div>
                  <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 relative shadow-sm">
                          <Bell className="w-4 h-4" />
                          <span className="absolute top-0 right-0 w-2 h-2 bg-[#eb2e76] rounded-full border border-white"></span>
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="w-8 h-8 rounded-full border border-gray-200 shadow-sm" src="https://ui-avatars.com/api/?name=Sarah&background=e0f2f1&color=009688" alt="Sarah"/>
                  </div>
              </div>
              
              <div className="flex flex-1 gap-6 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-4">
                  <div className="w-40 flex flex-col gap-1 font-medium text-gray-500 text-xs">
                      <div className="flex items-center gap-3 px-3 py-2 bg-[#eb2e76] text-white rounded-lg shadow-sm"><Home className="w-4 h-4" /> Home</div>
                      <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg"><Users className="w-4 h-4" /> Students</div>
                      <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg"><GraduationCap className="w-4 h-4" /> Teachers</div>
                      <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg"><LayoutGrid className="w-4 h-4" /> Tools</div>
                      <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg"><BarChart2 className="w-4 h-4" /> Analytics</div>
                      <div className="mt-auto flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg"><Settings className="w-4 h-4" /> Settings</div>
                  </div>

                  <div className="flex-1 flex flex-col">
                      <h2 className="text-xl font-bold mb-1 flex items-center gap-2 text-gray-800">Welcome back, Sarah 👋</h2>
                      <p className="text-gray-500 text-[11px] mb-4">Here&apos;s what&apos;s happening in your school today.</p>
                      
                      <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                              <div className="text-gray-500 text-[10px] mb-0.5 font-medium">Students Active</div>
                              <div className="text-xl font-bold text-gray-800 mb-0.5">1,248</div>
                              <div className="text-[9px] text-green-500 font-medium">+12% this week</div>
                          </div>
                          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                              <div className="text-gray-500 text-[10px] mb-0.5 font-medium">AI Tools Used</div>
                              <div className="text-xl font-bold text-gray-800 mb-0.5">3,429</div>
                              <div className="text-[9px] text-green-500 font-medium">+18% this week</div>
                          </div>
                          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                              <div className="text-gray-500 text-[10px] mb-0.5 font-medium">Time Saved</div>
                              <div className="text-xl font-bold text-gray-800 mb-0.5">245 hrs</div>
                              <div className="text-[9px] text-green-500 font-medium">+30% this week</div>
                          </div>
                      </div>

                      <div className="flex gap-4 flex-1">
                          <div className="w-1/2">
                              <h3 className="font-bold text-gray-800 mb-2 text-[11px]">Recent Activity</h3>
                              <div className="flex flex-col gap-3">
                                  <div className="flex gap-2 bg-gray-50 p-2 rounded-lg items-center border border-gray-100">
                                      <div className="w-6 h-6 rounded bg-purple-100 text-purple-600 flex items-center justify-center shrink-0"><FileText className="w-3 h-3" /></div>
                                      <div>
                                          <div className="font-bold text-[10px] text-gray-800">Lesson Generator created</div>
                                          <div className="text-[9px] text-gray-500">Grade 8 Science • 2 min ago</div>
                                      </div>
                                  </div>
                                  <div className="flex gap-2 bg-gray-50 p-2 rounded-lg items-center border border-gray-100">
                                      <div className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center shrink-0"><Code className="w-3 h-3" /></div>
                                      <div>
                                          <div className="font-bold text-[10px] text-gray-800">Coding Lab session started</div>
                                          <div className="text-[9px] text-gray-500">Grade 10 • 15 min ago</div>
                                      </div>
                                  </div>
                                  <div className="flex gap-2 bg-gray-50 p-2 rounded-lg items-center border border-gray-100">
                                      <div className="w-6 h-6 rounded bg-green-100 text-green-600 flex items-center justify-center shrink-0"><CheckCircle className="w-3 h-3" /></div>
                                      <div>
                                          <div className="font-bold text-[10px] text-gray-800">Auto Grading completed</div>
                                          <div className="text-[9px] text-gray-500">Math Assignments • 1 hr ago</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="w-1/2 p-3 rounded-xl border border-gray-100 flex flex-col relative text-center items-center overflow-hidden bg-white shadow-[0_0_15px_-3px_rgba(0,0,0,0.05)]">
                              <h3 className="font-bold text-gray-800 mb-1 text-[11px] absolute top-2 left-3">AI Tutor</h3>
                              <Bot className="w-8 h-8 text-indigo-600 mt-6 mb-2 mx-auto bg-indigo-50 p-1.5 rounded-full shadow-sm" />
                              <div className="bg-gray-100 text-center rounded-lg p-2 text-[9px] text-gray-700 mb-2 w-full max-w-[150px] shadow-inner">
                                  Hi! I&apos;m your AI learning companion. How can I help you today?
                              </div>
                              <div className="w-full relative mt-auto absolute bottom-2 left-2 right-2">
                                  <input type="text" placeholder="Ask me anything..." className="w-full bg-white border border-gray-200 rounded-lg py-1.5 pl-2 pr-6 text-[9px] shadow-sm" />
                                  <div className="w-4 h-4 bg-[#eb2e76] flex items-center justify-center rounded absolute right-1 top-1">
                                      <Send className="w-2.5 h-2.5 text-white" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#eb2e76]/20 to-purple-500/20 blur-3xl -z-10 rounded-full opacity-40 mix-blend-multiply"></div>
          </div>
      </section>

      {/* Built for Everyone Section */}
      <section id="platform" className="max-w-6xl mx-auto px-6 py-16 text-center z-10 relative">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Built for Everyone in Your School</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-[24px] p-2 overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 text-left hover:-translate-y-1 transition duration-300">
                  <div className="h-[180px] rounded-[18px] bg-[#eef2ff] relative flex flex-col items-center justify-center overflow-hidden border border-[#e0e7ff]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/student.png" alt="Student studying" className="w-full h-full object-cover object-center" />
                      <div className="absolute w-20 h-12 bg-white rounded-lg shadow-sm border border-gray-100 right-4 top-6 p-2 opacity-90 flex flex-col gap-1.5 hidden">
                          <div className="w-full h-1.5 bg-gray-200 rounded-full"></div>
                          <div className="w-3/4 h-1.5 bg-gray-200 rounded-full"></div>
                      </div>
                  </div>
                  <div className="px-6 py-5 pb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">For Students</h3>
                      <p className="text-gray-600 text-[14px] leading-relaxed pt-1">
                          Learn faster with a personal AI tutor that helps with homework, doubts, and practice.
                      </p>
                  </div>
              </div>

              <div className="bg-white rounded-[24px] p-2 overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 text-left hover:-translate-y-1 transition duration-300">
                  <div className="h-[180px] rounded-[18px] bg-[#f0f9ff] relative flex flex-col items-center justify-center overflow-hidden border border-[#e0f2fe]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/teacher.png" alt="Teacher interacting" className="w-full h-full object-cover object-center" />
                      <div className="absolute w-24 h-16 bg-white rounded-lg shadow-sm border border-gray-100 left-3 top-6 p-2 opacity-90 text-[8px] text-gray-400 hidden">
                          <div className="font-bold text-[9px] text-gray-700 mb-1">Your Smart Assistant</div>
                          <div className="flex items-center gap-1 mb-1"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div><div className="w-full h-1 bg-gray-200 rounded-full"></div></div>
                          <div className="flex items-center gap-1 mb-1"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div><div className="w-full h-1 bg-gray-200 rounded-full"></div></div>
                          <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div><div className="w-full h-1 bg-gray-200 rounded-full"></div></div>
                      </div>
                  </div>
                  <div className="px-6 py-5 pb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">For Teachers</h3>
                      <p className="text-gray-600 text-[14px] leading-relaxed pt-1">
                          Save time with AI tools for lesson planning, grading, and content creation.
                      </p>
                  </div>
              </div>

              <div className="bg-white rounded-[24px] p-2 overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 text-left hover:-translate-y-1 transition duration-300">
                  <div className="h-[180px] rounded-[18px] bg-[#fdf2f8] relative flex flex-col items-center justify-center overflow-hidden border border-[#fce7f3]">
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                       <img src="/school.png" alt="School building" className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="px-6 py-5 pb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">For Schools</h3>
                      <p className="text-gray-600 text-[14px] leading-relaxed pt-1">
                          Easily bring AI into your classrooms with one complete platform.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Everything You Need Section */}
      <section id="solutions" className="py-24 relative z-10 w-full font-sans">
          <h2 className="text-[32px] font-bold text-center text-gray-900 mb-16 relative z-10">Everything You Need — In One Place</h2>

          <div className="flex flex-col gap-10 max-w-6xl mx-auto px-6 relative z-10">
              {/* Row 1 */}
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Chat UI Box Graphic (Col 1) */}
                  <div className="lg:col-span-4 xl:col-span-3 rounded-3xl flex items-center justify-center h-[320px] overflow-hidden shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/companion.png" alt="AI Learning Companion" className="w-full h-full object-contain object-center scale-105" />
                  </div>

                  {/* Text 1 (Col 2) */}
                  <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-center px-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">AI Learning Companion</h3>
                      <p className="text-gray-600 text-[13.5px] leading-relaxed">
                          A smart AI assistant that helps students understand topics, solve doubts, and improve learning.
                      </p>
                  </div>

                  {/* Laptop Graphic (Col 3) */}
                  <div className="lg:col-span-5 xl:col-span-6 rounded-3xl flex items-center justify-center relative overflow-hidden h-[320px] shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/laptop.png" alt="Lesson Plan Laptop" className="w-full h-full object-contain object-center scale-105" />
                  </div>
              </div>

              {/* Row 2 */}
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                  
                  {/* 6 Apps Grid (Col 1) */}
                  <div className="lg:col-span-4 xl:col-span-3 rounded-3xl flex items-center justify-center h-[320px] overflow-hidden shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/tools.png" alt="All in One Tools" className="w-full h-full object-contain object-center scale-105" />
                  </div>

                  {/* Text 2 (Col 2) */}
                  <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-center px-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">All-in-One AI Tools</h3>
                      <p className="text-gray-600 text-[13.5px] leading-relaxed">
                          30+ tools for writing, coding, creativity, and more — all in one platform.
                      </p>
                  </div>

                  {/* AI Lab Graphic (Col 3) */}
                  <div className="lg:col-span-5 xl:col-span-6 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden h-[320px] shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/lab.png" alt="AI Lab Setup" className="w-full h-full object-contain object-center scale-105" />
                  </div>
              </div>
          </div>
      </section>

      {/* 3 Simple Steps Section */}
      <section id="resources" className="max-w-5xl mx-auto px-4 py-10 pb-32 text-center relative z-10 font-sans">
          <h2 className="text-[32px] font-bold text-gray-900 mb-20 relative z-10">Get Started in 3 Simple Steps</h2>

          <div className="flex flex-col md:flex-row gap-6 relative justify-between mx-auto">
              {/* Background dashed line connecting cards */}
              <div className="hidden md:block absolute top-[50%] left-20 right-20 h-[2px] border-t-[2px] border-dashed border-[#d1d5db] -z-10"></div>

              {/* Step 1 */}
              <div className="flex-1 text-left relative bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] border border-white p-8 pt-10 mt-10 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f472b6] to-[#db2777] text-white flex items-center justify-center text-[22px] font-bold shadow-[0_8px_20px_rgba(219,39,119,0.4)] absolute -top-8 -left-4 border-[6px] border-[#f8fafc]">
                      01
                  </div>
                  <div>
                      <h3 className="font-bold text-gray-900 text-[19px] mb-2 leading-tight tracking-tight">Book a Free Demo</h3>
                      <p className="text-[14px] leading-relaxed text-gray-600">See how our platform works for your school.</p>
                  </div>
              </div>

              {/* Step 2 */}
              <div className="flex-1 text-left relative bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] border border-white p-8 pt-10 mt-12 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#fdba74] to-[#f59e0b] text-white flex items-center justify-center text-[22px] font-bold shadow-[0_8px_20px_rgba(245,158,11,0.4)] absolute -top-8 -left-4 border-[6px] border-[#f8fafc]">
                      02
                  </div>
                  <div>
                      <h3 className="font-bold text-gray-900 text-[19px] mb-2 leading-tight tracking-tight">We Set Everything Up</h3>
                      <p className="text-[14px] leading-relaxed text-gray-600">We help you set up tools, devices, and accounts.</p>
                  </div>
              </div>

              {/* Step 3 */}
              <div className="flex-1 text-left relative bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] border border-white p-8 pt-10 mt-12 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#818cf8] to-[#6366f1] text-white flex items-center justify-center text-[22px] font-bold shadow-[0_8px_20px_rgba(99,102,241,0.4)] absolute -top-8 -left-4 border-[6px] border-[#f8fafc]">
                      03
                  </div>
                  <div>
                      <h3 className="font-bold text-gray-900 text-[19px] mb-2 leading-tight tracking-tight">Start Using AI</h3>
                      <p className="text-[14px] leading-relaxed text-gray-600">Teachers and students can start using AI tools immediately.</p>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}

