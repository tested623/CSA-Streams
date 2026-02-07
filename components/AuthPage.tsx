
import React, { useState } from 'react';

interface AuthPageProps {
  onLogin: (email: string, password?: string) => boolean;
  onSignUp: (email: string, password?: string) => boolean;
  onBypass: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin, onSignUp, onBypass }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    let success = false;
    if (isLogin) {
      success = onLogin(email, password);
      if (!success) {
        setError('Invalid email or password.');
      }
    } else {
      success = onSignUp(email, password);
      if (!success) {
        setError('An account with this email already exists.');
      }
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur/Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://img.gs/fhcphvsghs/1920/https://i.ibb.co/35MPWb5L/IMG-3461.png')" 
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-4 animate-fade-in-up">
        <div className="text-center mb-8">
           <h1 className="text-5xl font-black text-amber-400 tracking-tight drop-shadow-lg">
            CHICKENSOUP
          </h1>
        </div>
        
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl ring-1 ring-white/5">
          <h2 className="text-2xl font-bold text-white mb-6">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white/10 transition-all outline-none"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="password"className="block text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white/10 transition-all outline-none"
                placeholder="••••••••"
                required
              />
            </div>
            
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm text-center font-medium">{error}</p>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!email || !password}
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm mb-4">
              {isLogin ? "New to Chickensoup?" : "Already have an account?"}
            </p>
            <button 
              onClick={toggleForm} 
              className="text-white font-semibold hover:text-amber-300 transition-colors text-sm uppercase tracking-wide border border-white/20 hover:border-amber-300 px-6 py-2 rounded-full hover:bg-white/5"
            >
              {isLogin ? 'Sign up now' : 'Sign in here'}
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
            <button
                onClick={onBypass}
                className="text-gray-500 hover:text-white transition-colors text-xs font-medium flex items-center justify-center mx-auto space-x-1 group"
            >
                <span>Just looking around? Continue as Guest</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
