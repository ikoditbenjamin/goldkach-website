'use client';
import React from 'react';
import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="pt-28 pb-12 px-6"
        style={{ background: 'linear-gradient(135deg, #1a1a4e 0%, #2D2B6B 100%)' }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Cookies Policy</h1>
          <p className="text-white/70 text-sm">Effective Date: 30/09/2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">

          {/* 1. Introduction */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>1. Introduction</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              GoldKach Ltd ("GoldKach", "we", "us", or "our") uses cookies and similar tracking technologies on our website and digital platforms. This Cookies Policy explains what cookies are, how we use them, the types of cookies we deploy, and how you can manage your cookie preferences.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              By continuing to use our website after being presented with our cookie notice, you consent to our use of cookies in accordance with this policy. You may withdraw your consent at any time by adjusting your browser settings or using our cookie preference centre, though this may affect the functionality of certain parts of our website.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              This policy should be read alongside our Privacy Policy, which sets out how we collect, use, and protect your personal data more broadly. If you have any questions about our use of cookies, please contact us using the details at the end of this policy.
            </p>
          </div>

          {/* 2. What Are Cookies? */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>2. What Are Cookies?</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Cookies are small text files that are placed on your computer, smartphone, tablet, or other device when you visit a website. They are widely used to make websites work more efficiently, to provide a better user experience, and to give website owners information about how their site is being used.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Cookies can be "session cookies", which are temporary and are deleted when you close your browser, or "persistent cookies", which remain on your device for a set period of time or until you delete them manually. Cookies can also be "first-party cookies", set directly by the website you are visiting, or "third-party cookies", set by a domain other than the one you are visiting.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              In addition to cookies, we may also use similar technologies such as web beacons (also known as pixel tags or clear GIFs), local storage objects, and device fingerprinting. These technologies function similarly to cookies and are subject to the same rules under this policy.
            </p>
          </div>

          {/* 3. Types of Cookies We Use */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>3. Types of Cookies We Use</h2>

            <h3 className="text-base font-semibold mb-2" style={{ color: '#2D2B6B' }}>3.1 Strictly Necessary Cookies</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              These cookies are essential for the operation of our website and cannot be switched off in our systems. They are usually set in response to actions you take, such as setting your privacy preferences, logging in, or filling in forms. Without these cookies, services you have asked for cannot be provided.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Session management cookies that keep you logged in during your visit</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Security cookies that help detect and prevent fraudulent activity</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Load balancing cookies that ensure the website performs reliably</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Cookie consent cookies that remember your cookie preferences</li>
            </ul>

            <h3 className="text-base font-semibold mb-2" style={{ color: '#2D2B6B' }}>3.2 Performance Cookies</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our website. They help us understand which pages are the most and least popular and see how visitors move around the site. All information collected by these cookies is aggregated and therefore anonymous.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Google Analytics cookies that track page views, session duration, and user journeys</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Error monitoring cookies that help us identify and fix technical issues</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>A/B testing cookies that allow us to test different versions of our pages</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Speed and performance monitoring cookies</li>
            </ul>

            <h3 className="text-base font-semibold mb-2" style={{ color: '#2D2B6B' }}>3.3 Functional Cookies</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Language and region preference cookies</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Accessibility settings cookies that remember your display preferences</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Live chat and customer support widget cookies</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Video player preference cookies</li>
            </ul>

            <h3 className="text-base font-semibold mb-2" style={{ color: '#2D2B6B' }}>3.4 Targeting and Advertising Cookies</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              These cookies may be set through our website by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Retargeting cookies that allow us to show you relevant ads after you leave our website</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Social media cookies from platforms such as LinkedIn, Facebook, and Twitter/X</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Conversion tracking cookies that measure the effectiveness of our advertising campaigns</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Interest-based advertising cookies that help deliver more relevant content</li>
            </ul>
          </div>

          {/* 4. How to Manage Cookies */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>4. How to Manage Cookies</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              You have the right to decide whether to accept or reject cookies (other than strictly necessary cookies). You can exercise your cookie preferences through our cookie consent banner when you first visit our website, or at any time by adjusting your browser settings. Please note that if you choose to block or delete cookies, some features of our website may not work as intended.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Most web browsers allow you to manage cookies through their settings. Below are instructions for the most commonly used browsers:
            </p>

            <h3 className="text-base font-semibold mb-2" style={{ color: '#2D2B6B' }}>Google Chrome</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Open Chrome and click the three-dot menu in the top-right corner. Select "Settings", then "Privacy and security", then "Cookies and other site data". From here you can choose to block all cookies, block third-party cookies, or clear existing cookies. You can also add specific sites to an allow or block list.
            </p>

            <h3 className="text-base font-semibold mb-2" style={{ color: '#2D2B6B' }}>Mozilla Firefox</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Open Firefox and click the three-line menu in the top-right corner. Select "Settings", then "Privacy &amp; Security". Under the "Enhanced Tracking Protection" section, you can choose your preferred level of cookie blocking. You can also manage individual cookies by clicking "Manage Data" under the Cookies and Site Data section.
            </p>

            <h3 className="text-base font-semibold mb-2" style={{ color: '#2D2B6B' }}>Apple Safari</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Open Safari and click "Safari" in the menu bar, then select "Preferences". Click the "Privacy" tab. Here you can choose to block all cookies or prevent cross-site tracking. To manage existing cookies, click "Manage Website Data" to view and delete cookies stored by specific websites.
            </p>

            <h3 className="text-base font-semibold mb-2" style={{ color: '#2D2B6B' }}>Microsoft Edge</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Open Edge and click the three-dot menu in the top-right corner. Select "Settings", then "Cookies and site permissions", then "Cookies and site data". You can toggle on "Block third-party cookies" or choose to block all cookies. You can also view and delete cookies stored by specific websites from this menu.
            </p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              For information about managing cookies on other browsers or devices, please refer to the documentation provided by your browser or device manufacturer. You can also opt out of interest-based advertising from many third-party advertisers by visiting the Network Advertising Initiative opt-out page at www.networkadvertising.org or the Digital Advertising Alliance at www.aboutads.info.
            </p>
          </div>

          {/* 5. Changes to Our Cookies Policy */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>5. Changes to Our Cookies Policy</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              We may update this Cookies Policy from time to time to reflect changes in technology, regulation, or our business practices. When we make significant changes, we will update the effective date at the top of this policy and, where appropriate, notify you via a prominent notice on our website or by email.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              We encourage you to review this policy periodically to stay informed about how we use cookies. Your continued use of our website after any changes to this policy will constitute your acceptance of those changes.
            </p>
          </div>

          {/* 6. Contact Us */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>6. Contact Us</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              If you have any questions or concerns about our use of cookies or this Cookies Policy, please contact us:
            </p>
            <ul className="list-none space-y-1 mb-4">
              <li className="text-sm font-semibold" style={{ color: '#2D2B6B' }}>GoldKach Ltd</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>124 City Road</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>EC1V 2NX, London, UK</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Email: <a href="mailto:info@goldkach.com" className="underline hover:opacity-80">info@goldkach.com</a></li>
            </ul>
          </div>

          {/* Back button */}
          <div className="mt-10">
            <Link
              href="/"
              className="inline-block px-8 py-3 rounded font-bold text-sm text-white transition hover:opacity-90"
              style={{ backgroundColor: '#1E9BF0' }}
            >
              Back To Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
