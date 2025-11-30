
import React from 'react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const subject = encodeURIComponent(`Contact Request from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // Actually trigger the email client
    window.location.href = `mailto:turnerwilliam013@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-4 text-center">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          We'd love to hear from you. Fill out the form below or reach out directly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <form onSubmit={handleSubmit} className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
              <input type="text" id="name" name="name" required className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-amber-400 focus:border-amber-400" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
              <input type="email" id="email" name="email" required className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-amber-400 focus:border-amber-400" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-amber-400 focus:border-amber-400"></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-2 rounded-md font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500 transition-colors active:scale-95"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-8">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">General Support</h3>
              <p className="text-gray-300 mb-2">For general questions and support, please email us at:</p>
              <a href="mailto:turnerwilliam013@gmail.com" className="text-amber-300 font-semibold underline break-all">turnerwilliam013@gmail.com</a>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">Reasons to Contact</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Report a bug or technical issue</li>
                <li>Suggest a new feature or show idea</li>
                <li>Account access problems</li>
                <li>Partnership or collaboration inquiries</li>
                <li>General feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
