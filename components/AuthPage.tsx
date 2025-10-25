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
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 animate-fade-in relative">
      <button
        onClick={onBypass}
        className="absolute top-4 right-4 text-gray-500 hover:text-amber-300 transition-colors p-2 rounded-full"
        title="Continue as Guest"
        aria-label="Continue as Guest"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

      <div className="w-full max-w-sm">
        <h1 className="text-4xl md:text-5xl font-black text-amber-400 text-center mb-8">
          CHICKENSOUP
        </h1>
        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-lg shadow-2xl">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            {isLogin ? 'Log In' : 'Sign Up'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-amber-400 focus:border-amber-400"
                required
              />
            </div>
            <div>
              <label htmlFor="password"className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-amber-400 focus:border-amber-400"
                required
              />
            </div>
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 mt-2 rounded-md font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500 transition-colors active:scale-95 disabled:bg-gray-500"
                disabled={!email || !password}
              >
                {isLogin ? 'Log In' : 'Sign Up'}
              </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <button onClick={toggleForm} className="text-sm text-gray-400 hover:text-amber-300">
              {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Log In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
