import React from 'react';

const TermsOfUsePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto prose prose-invert prose-p:text-gray-300 prose-headings:text-amber-300 prose-h1:text-4xl prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-700 prose-h2:pb-2">
        <h1>Terms of Use</h1>
        <p className="text-sm text-gray-500">Last Updated: October 26, 2025</p>

        <p>
          Welcome to Chickensoup Animations! These terms and conditions outline the rules and regulations for the use of our website and streaming service. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Chickensoup Animations if you do not agree to all of the terms and conditions stated on this page.
        </p>

        <h2>1. License to Use</h2>
        <p>
          Unless otherwise stated, Chickensoup Animations and/or its licensors own the intellectual property rights for all material on this platform. All intellectual property rights are reserved. You may access this from Chickensoup Animations for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul>
          <li>Republish material from Chickensoup Animations</li>
          <li>Sell, rent or sub-license material from Chickensoup Animations</li>
          <li>Reproduce, duplicate or copy material from Chickensoup Animations</li>
          <li>Redistribute content from Chickensoup Animations</li>
        </ul>

        <h2>2. User Content</h2>
        <p>
          In these terms and conditions, "your user content" means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose. You grant to Chickensoup Animations a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your user content in any existing or future media.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUsePage;