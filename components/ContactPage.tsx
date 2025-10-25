import React from 'react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! Our team will get back to you shortly. (This is a demonstration and no email was sent).");
  };

  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-4 text-center">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          We'd love to hear from you. Fill out the form below or reach out through one of our other channels.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <form onSubmit={handleSubmit} className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
              <input type="text" id="name" required className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-amber-400 focus:border-amber-400" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
              <input type="email" id="email" required className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-amber-400 focus:border-amber-400" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea id="message" rows={5} required className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-amber-400 focus:border-amber-400"></textarea>
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
              <p className="text-gray-300">For general questions and support, please email us at:</p>
              <a href="mailto:support@chickensoupanimations.com" className="text-amber-300 font-semibold underline">support@chickensoupanimations.com</a>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">Press Inquiries</h3>
              <p className="text-gray-300">For media and press inquiries, please contact:</p>
              <a href="mailto:press@chickensoupanimations.com" className="text-amber-300 font-semibold underline">press@chickensoupanimations.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;