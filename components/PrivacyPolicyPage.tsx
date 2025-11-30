
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto prose prose-invert prose-p:text-gray-300 prose-headings:text-amber-300 prose-h1:text-4xl prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-700 prose-h2:pb-2 prose-ul:text-gray-300 prose-li:marker:text-amber-400">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last updated: November 28, 2025</p>

        <p>
          At Chickensoup Animations, accessible through our platform, safeguarding the privacy of our visitors and users is one of our highest priorities. This Privacy Policy explains what information we collect, how we use it, and the measures we take to protect it.
        </p>
        <p>
          By accessing or using Chickensoup Animations, you agree to the practices described in this Privacy Policy.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          The types of personal information we collect depend on how you interact with our platform. Any time we request personal information, we will clearly explain what data is being collected and why.
        </p>

        <h3 className="text-white font-bold text-lg mt-4">Information You Provide to Us</h3>
        <ul>
          <li><strong>Direct Contact:</strong> If you contact us directly, we may collect your name, email address, phone number, message content, attachments, and any additional information you choose to share.</li>
          <li><strong>Account Registration:</strong> When you create an account, we may ask for information such as your name, username, email address, and other optional profile details.</li>
          <li><strong>Forms and Submissions:</strong> Any information you submit through forms, surveys, or uploads (including images, videos, or other media) may be stored to provide the requested service.</li>
        </ul>

        <h3 className="text-white font-bold text-lg mt-4">Information Collected Automatically</h3>
        <p>When you use our website, we may automatically collect:</p>
        <ul>
          <li>Device and browser information</li>
          <li>IP address (if needed)</li>
          <li>Usage data such as pages visited, buttons clicked, and time spent on the site</li>
          <li>Log data for security, analytics, and service improvement</li>
        </ul>
        <p>This information helps us maintain a secure and optimized platform.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including to:</p>
        <ul>
          <li>Provide, operate, and maintain our platform and streaming services</li>
          <li>Improve, personalize, and expand features and user experience</li>
          <li>Understand user behavior and analyze website performance</li>
          <li>Develop new products, services, and functionality</li>
          <li>Communicate with you directly or through trusted partners</li>
          <li>Respond to your inquiries, comments, or support requests</li>
          <li>Send updates, service notifications, and promotional emails (you may opt out anytime)</li>
          <li>Monitor and prevent fraudulent activity or misuse of our services</li>
          <li>Enforce our Terms and Conditions and maintain system security</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>
          We take the protection of your data seriously. Chickensoup Animations implements commercially accepted security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
        </p>
        <p>However, it is important to understand that:</p>
        <ul>
          <li>No method of transmitting data over the internet</li>
          <li>And no method of electronic storage</li>
        </ul>
        <p>
          is ever completely secure. While we work hard to safeguard your Personal Data, we cannot guarantee absolute security.
        </p>
        <p>
          In the event of a data breach affecting your information, we will notify you promptly as required by applicable laws.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
