'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Calendar, Clock, Video, ChevronRight, Check, Sparkles } from 'lucide-react';

export default function DemoBooking() {
  const [step, setStep] = useState(1); // 1: Date, 2: Time, 3: Details
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const times = ["9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30am", "12:00pm", "12:30pm", "1:00pm"];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 font-sans">
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Schedule a Call</h1>
        <p className="text-slate-500 font-medium">Let's get on a call and discuss your school's AI requirements.</p>
      </div>

      <div className="max-w-5xl w-full bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row overflow-hidden min-h-[600px]">
        {/* Left Side: Info */}
        <div className="w-full md:w-[320px] border-r border-gray-100 p-8 flex flex-col">
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

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-gray-100">
              <img src="/blog/chiranjeevi.png" alt="Chiranjeevi" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = 'https://ui-avatars.com/api/?name=Chiranjeevi+Maddala&background=eb2e76&color=fff')} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">Chiranjeevi Maddala</div>
              <div className="text-lg font-bold text-slate-900">AI Ready School Demo</div>
            </div>
          </div>

          <div className="space-y-4 text-slate-600 font-medium">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-slate-400" />
              <span>30 min</span>
            </div>
            <div className="flex items-center gap-3 leading-tight">
              <Video className="w-5 h-5 text-slate-400" />
              <span>Web conferencing details provided upon confirmation.</span>
            </div>
            {selectedDate && selectedTime && (
              <div className="flex items-center gap-3 text-[#eb2e76] font-bold">
                <Calendar className="w-5 h-5" />
                <span>{selectedTime}, Thursday, March 26, 2026</span>
              </div>
            )}
          </div>

          <div className="mt-auto pt-12 flex gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            <button className="hover:text-[#eb2e76]">Cookie settings</button>
            <button className="hover:text-[#eb2e76]">Privacy Policy</button>
          </div>
        </div>

        {/* Right Side: Interactive Content */}
        <div className="flex-1 p-8 bg-white relative">
          {step === 1 || step === 2 ? (
            <div className="max-w-md mx-auto h-full flex flex-col">
              <h2 className="text-xl font-bold text-slate-900 mb-8">Select a Date & Time</h2>
              
              <div className="flex items-center justify-between mb-8 px-4">
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50 text-slate-400"><ChevronLeft className="w-5 h-5" /></button>
                <div className="font-bold text-slate-700 uppercase tracking-widest text-sm">March 2026</div>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50 text-slate-400"><ChevronRight className="w-5 h-5" /></button>
              </div>

              <div className="flex gap-4 h-full">
                {/* Calendar View */}
                <div className="flex-1">
                  <div className="grid grid-cols-7 text-center mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <div key={d}>{d}</div>)}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {/* Placeholder days */}
                    {Array.from({ length: 31 }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setSelectedDate(i + 1);
                          setStep(2);
                        }}
                        className={`aspect-square flex items-center justify-center rounded-full text-sm font-bold transition-all
                          ${i + 1 === 26 ? 'bg-[#eb2e76] text-white shadow-lg shadow-pink-200' : 'text-slate-600 hover:bg-slate-50'}
                          ${[25, 26, 27, 28, 30, 31].includes(i + 1) ? 'opacity-100' : 'opacity-30 pointer-events-none'}
                        `}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection (Step 2) */}
                {step === 2 && (
                  <div className="w-[180px] animate-in slide-in-from-right-4 duration-300">
                    <div className="text-sm font-bold text-slate-400 mb-4 px-2 tracking-wide uppercase">Thursday, March 26</div>
                    <div className="space-y-2 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {times.map(t => (
                        <div key={t} className="flex gap-2 group">
                          <button
                            onClick={() => setSelectedTime(t)}
                            className={`flex-1 py-3 px-2 rounded-xl border font-bold text-sm transition-all
                              ${selectedTime === t ? 'bg-slate-800 text-white border-slate-800 w-[70%]' : 'border-slate-200 text-[#eb2e76] hover:border-[#eb2e76]'}
                            `}
                          >
                            {t}
                          </button>
                          {selectedTime === t && (
                            <button
                               onClick={() => setStep(3)}
                               className="bg-[#eb2e76] text-white px-4 rounded-xl font-bold text-sm animate-in scale-in duration-200 hover:bg-[#d41c62] shadow-pink-200 shadow-lg"
                            >
                               Next
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Step 3: Enter Details Form */
            <div className="max-w-2xl mx-auto animate-in fade-in duration-500">
              <div className="flex items-center gap-4 mb-8">
                 <button onClick={() => setStep(2)} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 text-[#eb2e76] hover:bg-pink-50 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                 </button>
                 <h2 className="text-2xl font-extrabold text-slate-900">Enter Details</h2>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Name *</label>
                    <input type="text" className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-[#eb2e76] bg-slate-50/50" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email *</label>
                    <input type="email" className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-[#eb2e76] bg-slate-50/50" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">School Name *</label>
                    <input type="text" className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-[#eb2e76] bg-slate-50/50" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Your Designation *</label>
                    <input type="text" className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-[#eb2e76] bg-slate-50/50" required />
                  </div>
                </div>

                <div>
                   <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Syllabus *</label>
                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {['Cambridge', 'CBSE', 'ICSE', 'State Board', 'IB', 'Other'].map(s => (
                        <label key={s} className="flex items-center gap-2 cursor-pointer group">
                           <input type="checkbox" className="w-4 h-4 rounded-md border-gray-200 text-[#eb2e76] focus:ring-[#eb2e76]" />
                           <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">{s}</span>
                        </label>
                      ))}
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">City *</label>
                    <input type="text" className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-[#eb2e76] bg-slate-50/50" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Country *</label>
                    <input type="text" className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-[#eb2e76] bg-slate-50/50" required />
                  </div>
                </div>

                <div>
                   <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Products/Services You are Interested In *</label>
                   <div className="space-y-3">
                      {[
                        'Cypher - Learning Companion for Kids',
                        'NEO AI Lab',
                        'Morpheus - AI-Powered Teacher Assistant',
                        'Zion - AI Tool Suite',
                        'MATRIX - Local AI Infrastructure'
                      ].map(p => (
                        <label key={p} className="flex items-center gap-3 p-3 rounded-xl border border-gray-50 hover:bg-slate-50 transition-colors cursor-pointer">
                           <input type="checkbox" className="w-4 h-4 rounded-md border-gray-200 text-[#eb2e76] focus:ring-[#eb2e76]" />
                           <span className="text-sm font-bold text-slate-700">{p}</span>
                        </label>
                      ))}
                   </div>
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full bg-[#eb2e76] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-pink-100 hover:bg-[#d41c62] transition-all active:scale-95">
                    Schedule Event
                  </button>
                  <p className="text-[12px] text-slate-400 mt-6 text-center">
                    By proceeding, you confirm that you have read and agree to our Terms of Use and Privacy Notice.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}</style>
    </div>
  );
}

