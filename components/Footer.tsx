
import React from 'react';

type View = 'home' | 'shows' | 'short-films' | 'news' | 'coming-soon' | 'my-list' | 'about' | 'careers' | 'help' | 'account' | 'terms' | 'privacy' | 'cookies' | 'contact' | 'all-accounts';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950/50 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-12 py-12 text-gray-400">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('about')} className="hover:text-amber-300">About Us</button></li>
              <li><button onClick={() => onNavigate('careers')} className="hover:text-amber-300">Careers</button></li>
              <li><button disabled className="opacity-50 cursor-not-allowed">Press</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('help')} className="hover:text-amber-300">Help Center</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-amber-300">Contact Us</button></li>
              <li><button onClick={() => onNavigate('account')} className="hover:text-amber-300">Account</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('terms')} className="hover:text-amber-300">Terms of Use</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-amber-300">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('cookies')} className="hover:text-amber-300">Cookie Preferences</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Connect</h3>
            <ul className="space-y-2 text-sm mb-4">
               <li><button onClick={() => onNavigate('all-accounts')} className="hover:text-amber-300">All of our accounts</button></li>
            </ul>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.instagram.com/chicknsoupanimation/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@chickensoupANIMATION" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Chickensoup Animations. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
