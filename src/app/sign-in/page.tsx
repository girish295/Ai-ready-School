'use client';

import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen w-full bg-[#f4f6fb] flex items-center justify-center font-sans p-4">
      {/* Main Card */}
      <div className="bg-white rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] w-full max-w-5xl lg:h-[650px] flex flex-col lg:flex-row overflow-hidden relative z-10">
        
        {/* Left Form Panel */}
        <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 mb-10 flex items-center gap-1.5 leading-none">
            <span className="text-[#f43f5e]">AI</span> Ready <span className="text-gray-600 font-semibold mb-0.5">School</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Welcome Back!</h1>
          <p className="text-gray-500 mb-10 text-[15px]">Sign in to your account</p>

          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.close(); }}>
            
            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="email" 
                placeholder="Email" 
                required
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all font-medium text-sm placeholder:text-gray-400 bg-white"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-300" />
              </div>
              <input 
                type="password" 
                placeholder="Password" 
                required
                className="w-full pl-11 pr-32 py-3.5 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all font-medium text-sm placeholder:text-gray-400 bg-white"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Link href="#" className="text-xs font-medium text-gray-500 hover:text-pink-500 transition-colors">
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center mb-6 pt-1">
              <input 
                type="checkbox" 
                id="remember"
                className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500 cursor-pointer accent-pink-500"
              />
              <label htmlFor="remember" className="ml-2.5 text-sm text-gray-500 font-medium cursor-pointer select-none">
                Remember Me
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full py-3.5 bg-[#f43f5e] hover:bg-[#e11d48] text-white rounded-xl font-bold text-[15px] shadow-[0_4px_14px_rgba(244,63,94,0.3)] hover:shadow-[0_6px_20px_rgba(244,63,94,0.4)] hover:-translate-y-[1px] transition-all active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8 text-center flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-[13px] text-gray-400 font-medium bg-white z-10">Or sign in with</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Social Logins */}
          <div className="flex justify-center gap-6">
            <button className="w-[42px] h-[42px] rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 hover:-translate-y-0.5 transition-transform shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </button>
            <button className="w-[42px] h-[42px] rounded-full bg-[#1877f2] flex items-center justify-center hover:brightness-110 hover:-translate-y-0.5 transition-transform shadow-sm">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button className="w-[42px] h-[42px] rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 hover:-translate-y-0.5 transition-transform shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-[18px] h-[18px] opacity-90" />
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-[13px] text-gray-500 font-medium">
            Don't have an account?{' '}
            <Link href="#" className="font-bold text-[#f43f5e] hover:underline">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Right Image Panel */}
        <div className="hidden lg:flex flex-[1.25] bg-[#f9fafb] p-8 items-center justify-center relative border-l border-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 mix-blend-multiply opacity-50" />
          <div className="relative w-full h-full max-h-[80%] flex items-center justify-center drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700">
            {/* Using a representative illustration image similar to the user's uploaded mockup */}
            <img 
              src="/signin-illustration.png" 
              alt="Education Illustration" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

