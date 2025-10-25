import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto prose prose-invert prose-p:text-gray-300 prose-headings:text-amber-300 prose-h1:text-4xl prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-700 prose-h2:pb-2">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last Updated: October 26, 2025</p>

        <p>
          At Chickensoup Animations, accessible from our platform, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Chickensoup Animations and how we use it.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
        </p>
        <p>
          If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>
          The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. The remote data for this application is stored using JSONBin.io, and we rely on their security measures to protect user data.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;