'use client';
import React from 'react';
import Link from 'next/link';

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="pt-28 pb-12 px-6"
        style={{ background: 'linear-gradient(135deg, #1a1a4e 0%, #2D2B6B 100%)' }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Legal Notice</h1>
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
              This Legal Notice governs your use of the GoldKach website located at www.goldkach.com and all associated subdomains, mobile applications, and digital platforms operated by GoldKach Ltd and its affiliated entities (collectively, "GoldKach", "we", "us", or "our"). By accessing or using this website, you agree to be bound by the terms set out in this Legal Notice.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              GoldKach LLP is registered with Companies House under registration number OC422620, with its registered address at 124 City Road, EC1V 2NX, London, United Kingdom. GoldKach Uganda Limited is registered under company registration number 80020003642777, with its registered address at 3rd Floor Kanjokya House, Plot 90 Kanjokya Street, Kampala, Uganda. GoldKach Kenya Limited is registered under registration number PVT-3QU7KKGE, with its registered address at The Pavilion, Lower Kabete Road, Westlands, Nairobi, Kenya.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              If you do not agree with any part of this Legal Notice, you must immediately cease using this website and our services. We reserve the right to modify this Legal Notice at any time, and your continued use of the website following any such modification constitutes your acceptance of the updated terms.
            </p>
          </div>

          {/* 2. Legal Authority */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>2. Legal Authority</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              GoldKach operates as a regulated financial services group. Our UK entity, GoldKach LLP, is subject to oversight by the Financial Conduct Authority (FCA). Our Ugandan entity, GoldKach Uganda Limited, operates under the regulatory framework of the Capital Markets Authority of Uganda (CMAU) and the Bank of Uganda. Our Kenyan entity, GoldKach Kenya Limited, is subject to the Capital Markets Authority of Kenya (CMA Kenya).
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              The information and services provided on this website are intended for informational purposes only and do not constitute financial advice, investment advice, trading advice, or any other type of professional advice. Nothing on this website should be construed as a solicitation or offer to buy or sell any financial instrument or to participate in any particular trading strategy.
            </p>
          </div>

          {/* 3. Compliance with Applicable Law */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>3. Compliance with Applicable Law</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              GoldKach is committed to full compliance with all applicable laws and regulations in the jurisdictions in which it operates. This includes, but is not limited to, the Financial Services and Markets Act 2000 (FSMA) and associated FCA regulations in the United Kingdom; the Capital Markets Authority Act and the Securities Central Depositories Act in Uganda; the Capital Markets Act and the Investment Services Act in Kenya; and all applicable anti-money laundering (AML), counter-terrorism financing (CTF), and sanctions legislation.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Users of this website are responsible for ensuring that their use of our services complies with all laws and regulations applicable to them in their jurisdiction. GoldKach does not accept liability for any use of this website or our services that is unlawful in the user's jurisdiction.
            </p>
          </div>

          {/* 4. Scope of Use of this Site */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>4. Scope of Use of this Site</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              This website is intended for use by individuals and entities who are legally permitted to access financial services information in their jurisdiction. The content on this website is directed at residents of the United Kingdom, Uganda, and Kenya, and is not intended for distribution to, or use by, any person or entity in any jurisdiction where such distribution or use would be contrary to local law or regulation.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit their use and enjoyment of the website. Prohibited conduct includes, but is not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Transmitting any unsolicited or unauthorised advertising or promotional material</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Attempting to gain unauthorised access to any part of the website or its related systems</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Engaging in any conduct that disrupts or interferes with the normal operation of the website</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Scraping, harvesting, or otherwise collecting data from the website without our express written consent</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Using the website to transmit any malicious code, viruses, or other harmful software</li>
            </ul>
          </div>

          {/* 5. Indemnification */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>5. Indemnification</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              You agree to indemnify, defend, and hold harmless GoldKach, its affiliates, officers, directors, employees, agents, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable legal fees) arising out of or relating to your violation of this Legal Notice or your use of the website, including, but not limited to, any use of the website's content, services, and products other than as expressly authorised in this Legal Notice.
            </p>
          </div>

          {/* 6. Privacy */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>6. Privacy</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Your use of this website is also governed by our Privacy Policy, which is incorporated into this Legal Notice by reference. Our Privacy Policy sets out how we collect, use, store, and protect your personal data. By using this website, you consent to the processing of your personal data as described in our Privacy Policy.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              We are committed to protecting your privacy and handling your personal data in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and equivalent data protection legislation in Uganda and Kenya.
            </p>
          </div>

          {/* 7. Disclaimer */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>7. Disclaimer</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              The information on this website is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. GoldKach makes no representations or warranties of any kind, express or implied, as to the operation of the website, the information, content, materials, or products included on the website.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Past performance of any investment product or strategy described on this website is not a reliable indicator of future results. The value of investments and the income from them can fall as well as rise, and you may not recover the amount originally invested. All investment involves risk, and you should carefully consider whether any investment product is suitable for you in light of your financial circumstances, investment objectives, and risk tolerance.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              GoldKach does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. We reserve the right to modify, suspend, or discontinue any aspect of the website at any time without notice.
            </p>
          </div>

          {/* 8. Limitation of Liability */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>8. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              To the fullest extent permitted by applicable law, GoldKach and its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of data, loss of goodwill, service interruption, computer damage, or system failure, arising out of or in connection with your use of, or inability to use, this website or its content.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              In no event shall GoldKach's total liability to you for all claims arising out of or relating to the use of, or inability to use, this website exceed the amount paid by you, if any, for accessing the website during the twelve (12) months preceding the claim. Nothing in this Legal Notice shall limit or exclude our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by applicable law.
            </p>
          </div>

          {/* 9. Intellectual Property Rights */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>9. Intellectual Property Rights</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of GoldKach or its content suppliers and is protected by United Kingdom, Ugandan, Kenyan, and international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              You are granted a limited, non-exclusive, non-transferable licence to access and use this website for your personal, non-commercial purposes. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent, except as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>You may store files that are automatically cached by your web browser for display enhancement purposes</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>You may print or download one copy of a reasonable number of pages of the website for your own personal, non-commercial use</li>
            </ul>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              The GoldKach name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of GoldKach or its affiliates. You must not use such marks without our prior written permission.
            </p>
          </div>

          {/* 10. Local Variants */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>10. Local Variants</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              GoldKach operates across multiple jurisdictions, and the products and services available may vary by country. Certain products, services, or features described on this website may not be available in all jurisdictions, or may be subject to different terms and conditions, regulatory requirements, or restrictions depending on your location.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Users accessing this website from outside the United Kingdom, Uganda, or Kenya do so on their own initiative and are responsible for compliance with local laws. GoldKach makes no representation that the materials on this website are appropriate or available for use in other locations.
            </p>
          </div>

          {/* 11. Accessibility */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>11. Accessibility</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              GoldKach is committed to making its website accessible to all users, including those with disabilities. We strive to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, as well as applicable accessibility legislation including the Equality Act 2010 in the United Kingdom.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              If you experience any difficulty accessing any part of our website, or if you require the content in an alternative format, please contact us at info@goldkach.com and we will endeavour to assist you. We welcome feedback on the accessibility of our website and are committed to continuous improvement.
            </p>
          </div>

          {/* 12. Third-Party Solutions */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>12. Third-Party Solutions</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Our website may contain links to third-party websites, services, or resources that are not owned or controlled by GoldKach. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We do not warrant the offerings of any of these entities or their websites.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              We may also use third-party technology solutions and service providers to operate certain features of our website, including analytics tools, payment processors, identity verification services, and customer communication platforms. These third parties are subject to their own terms of service and privacy policies, and we encourage you to review them before using any such services.
            </p>
          </div>

          {/* 13. Affiliate Programmes */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>13. Affiliate Programmes</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              GoldKach may participate in affiliate marketing programmes, whereby we may earn a commission or referral fee if you click on certain links on our website and subsequently make a purchase or sign up for a service. Any such affiliate relationships will be clearly disclosed in accordance with applicable advertising standards and regulations.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              The existence of an affiliate relationship does not influence our editorial content or recommendations. We only recommend products and services that we believe are of genuine value to our users. If you have any questions about our affiliate relationships, please contact us at info@goldkach.com.
            </p>
          </div>

          {/* 14. Governing Law */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>14. Governing Law</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              This Legal Notice and any dispute or claim arising out of or in connection with it or its subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              For users accessing our services through GoldKach Uganda Limited, disputes relating specifically to Ugandan operations shall be governed by the laws of Uganda. For users accessing our services through GoldKach Kenya Limited, disputes relating specifically to Kenyan operations shall be governed by the laws of Kenya.
            </p>
          </div>

          {/* 15. Dispute Resolution */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>15. Dispute Resolution</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              In the event of any dispute, controversy, or claim arising out of or relating to this Legal Notice or your use of the website, we encourage you to first contact us directly at info@goldkach.com to seek an informal resolution. We will endeavour to respond to all complaints within five (5) business days and to resolve disputes amicably wherever possible.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              If a dispute cannot be resolved informally, it shall be submitted to the exclusive jurisdiction of the courts of England and Wales, subject to any mandatory consumer protection provisions that may apply in your jurisdiction. As a regulated financial services firm, GoldKach is also subject to the jurisdiction of the Financial Ombudsman Service (FOS) in the United Kingdom for eligible complaints.
            </p>
          </div>

          {/* 16. Copyright Statement */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>16. Copyright Statement</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              © {new Date().getFullYear()} GoldKach Ltd. All rights reserved. No part of this website or its content may be reproduced, distributed, transmitted, displayed, published, or broadcast without the prior written permission of GoldKach, except as permitted by applicable copyright law.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Unauthorised use of any materials on this website may violate copyright laws, trademark laws, the laws of privacy and publicity, and communications regulations and statutes. GoldKach actively monitors for and enforces its intellectual property rights and will take appropriate legal action against any infringement.
            </p>
          </div>

          {/* 17. Contact Us */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>17. Contact Us</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              If you have any questions about this Legal Notice or wish to report a concern, please contact us:
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
