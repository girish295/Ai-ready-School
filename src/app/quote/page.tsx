'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ChevronDown, Sparkles } from 'lucide-react';

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* Centered Minimal Navbar */}
      <nav className="w-full bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="group/logo flex flex-col leading-none transform scale-90 origin-left">
          <div className="flex items-center relative gap-0.5">
            <Sparkles className="w-4 h-4 text-[#eb2e76] absolute -top-3 left-0 animate-pulse" />
            <span className="text-2xl font-black tracking-tighter text-[#eb2e76]">AI Ready</span>
            <span className="text-[9px] font-bold text-[#eb2e76] relative -top-3 ml-0.5">TM</span>
          </div>
          <div className="pl-14 -mt-1">
            <span className="text-[16px] font-extrabold tracking-tight bg-gradient-to-r from-[#ffca28] to-[#eb2e76] bg-clip-text text-transparent italic">
              School
            </span>
          </div>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-16">
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 tracking-tight">
          Ready to Get a Custom Quote?
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Panel: Contact Info */}
          <div className="w-full lg:w-[35%] bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col gap-8">
            
            {/* Email info */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email us</h3>
                <p className="text-gray-500 text-sm">hey@aireadyschool.com</p>
              </div>
            </div>

            {/* Phone info */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Phone number</h3>
                <p className="text-gray-500 text-sm">(91) 9100013885</p>
              </div>
            </div>

            {/* Address info */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                {/* Simple India Flag SVG Representation */}
                <svg viewBox="0 0 3 2" className="w-6 h-4 rounded-sm border border-gray-100">
                   <rect width="3" height="0.666" fill="#FF9933"/>
                   <rect y="0.666" width="3" height="0.666" fill="#FFFFFF"/>
                   <rect y="1.333" width="3" height="0.666" fill="#138808"/>
                   <circle cx="1.5" cy="1" r="0.25" fill="#000080"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Head Office</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  #204, Sai Datta<br/>
                  Arunodaya Colony<br/>
                  Madhapur, Hyderabad<br/>
                  INDIA
                </p>
              </div>
            </div>

          </div>

          {/* Right Panel: Form */}
          <div className="w-full lg:w-[65%] bg-white rounded-2xl p-8 lg:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-900 mb-2">Full name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter your name" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-gray-900 transition-colors" />
              </div>

              <div className="md:col-span-2 relative">
                <label className="block text-sm font-bold text-gray-900 mb-2">I am a...</label>
                <select defaultValue="" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-gray-900 appearance-none transition-colors">
                  <option value="" disabled>Select option</option>
                  <option value="school_admin">School Administrator</option>
                  <option value="teacher">Teacher</option>
                  <option value="principal">Principal/Director</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 bottom-4 pointer-events-none" />
              </div>

              <div className="md:col-span-2 relative">
                <label className="block text-sm font-bold text-gray-900 mb-2">I am Interested in...</label>
                <select defaultValue="" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-gray-900 appearance-none transition-colors">
                  <option value="" disabled>Select option</option>
                  <option value="district">District Plan (Custom)</option>
                  <option value="pro">Pro Growth Plan</option>
                  <option value="demo">Free Demo Only</option>
                  <option value="other">General Inquiry</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 bottom-4 pointer-events-none" />
              </div>

              <div className="md:col-span-2 relative">
                <label className="block text-sm font-bold text-gray-900 mb-2">Number of students.</label>
                <select defaultValue="" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-gray-900 appearance-none transition-colors">
                  <option value="" disabled>Select option</option>
                  <option value="1-500">1 - 500</option>
                  <option value="501-2000">501 - 2,000</option>
                  <option value="2000+">2,000+</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 bottom-4 pointer-events-none" />
              </div>

              <div className="md:col-span-2 relative">
                <label className="block text-sm font-bold text-gray-900 mb-2">Preferred mode of contact</label>
                <select defaultValue="" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-gray-900 appearance-none transition-colors">
                  <option value="" disabled>Select option</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 bottom-4 pointer-events-none" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-900 mb-2">Email address <span className="text-red-500">*</span></label>
                <input type="email" placeholder="you@domain.com" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-gray-900 transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Contact number <span className="text-red-500">*</span></label>
                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-gray-900 transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">School name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Greenwood High" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-gray-900 transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">City <span className="text-red-500">*</span></label>
                <input type="text" placeholder="City" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-gray-900 transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">State <span className="text-red-500">*</span></label>
                <input type="text" placeholder="State/Province" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-gray-900 transition-colors" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-900 mb-2">Country <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Country" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-gray-900 transition-colors" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-900 mb-2">Messages <span className="text-red-500">*</span></label>
                <textarea rows={4} placeholder="Message here..." className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-gray-900 transition-colors resize-y"></textarea>
              </div>

              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full py-4 text-white font-bold text-[15px] bg-[#ee0f5e] hover:bg-[#d40951] rounded-xl shadow-[0_4px_14px_rgba(238,15,94,0.3)] hover:shadow-[0_6px_20px_rgba(238,15,94,0.4)] transition-all active:translate-y-0.5">
                  Submit Request
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

