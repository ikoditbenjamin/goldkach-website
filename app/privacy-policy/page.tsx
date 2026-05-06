'use client';
import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="pt-28 pb-12 px-6"
        style={{ background: 'linear-gradient(135deg, #1a1a4e 0%, #2D2B6B 100%)' }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Privacy Policy</h1>
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
              GoldKach Ltd ("GoldKach", "we", "us", or "our") is committed to protecting and respecting your privacy. This Privacy Policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              GoldKach LLP is registered with Companies House, registration number OC422620, with registered address at 124 City Road, EC1V 2NX, London, UK. GoldKach Uganda Limited is registered with registration number 80020003642777, with registered address at 3rd Floor Kanjokya House, Plot 90 Kanjokya Street, Kampala, Uganda.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              This policy applies to all personal data collected through our website, mobile applications, and any other digital or physical channels through which we interact with you. By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information in accordance with it.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>2. Information We Collect</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              We may collect and process the following categories of personal data about you:
            </p>
            <h3 className="text-base font-semibold mb-2" style={{ color: '#2D2B6B' }}>Identity and Contact Data</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Full name, title, date of birth, and gender</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Email address, telephone number, and postal address</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>National identification number, passport number, or other government-issued identification</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Tax identification number and residency status</li>
            </ul>
            <h3 className="text-base font-semibold mb-2" style={{ color: '#2D2B6B' }}>Financial Data</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Bank account details, payment card information, and transaction history</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Investment portfolio details, risk appetite, and financial objectives</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Source of funds, income information, and net worth declarations</li>
            </ul>
            <h3 className="text-base font-semibold mb-2" style={{ color: '#2D2B6B' }}>Technical and Usage Data</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="text-sm" style={{ color: '#1E9BF0' }}>IP address, browser type and version, time zone setting, and browser plug-in types</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Operating system and platform, device identifiers</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Pages visited, links clicked, and features used on our platform</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Referral URLs and search terms used to find our website</li>
            </ul>
          </div>

          {/* 3. How We Use Your Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>3. How We Use Your Information</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              We use the personal data we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="text-sm" style={{ color: '#1E9BF0' }}>To provide, maintain, and improve our financial services and products</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>To process transactions and send related information, including confirmations and invoices</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>To verify your identity and conduct anti-money laundering (AML) and Know Your Customer (KYC) checks as required by applicable law</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>To communicate with you about your account, respond to enquiries, and provide customer support</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>To send you marketing communications about our products and services where you have consented or where we have a legitimate interest to do so</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>To comply with our legal and regulatory obligations under UK, Ugandan, and Kenyan financial services law</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>To detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>To personalise your experience and deliver content and product offerings relevant to your interests</li>
            </ul>
          </div>

          {/* 4. Legal Basis for Processing */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>4. Legal Basis for Processing</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              We will only process your personal data where we have a lawful basis to do so. The legal bases we rely upon include:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Contract performance:</strong> Processing is necessary for the performance of a contract to which you are a party, or to take steps at your request prior to entering into a contract</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Legal obligation:</strong> Processing is necessary for compliance with a legal obligation to which GoldKach is subject, including regulatory requirements under the Financial Conduct Authority (FCA) and the Capital Markets Authority of Uganda (CMAU)</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Legitimate interests:</strong> Processing is necessary for the purposes of our legitimate interests, such as fraud prevention, network security, and improving our services, provided these interests are not overridden by your rights</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Consent:</strong> Where you have given us explicit consent to process your data for a specific purpose, such as receiving marketing communications</li>
            </ul>
          </div>

          {/* 5. Share Your Data */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>5. How We Share Your Data</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              We do not sell, trade, or rent your personal data to third parties. However, we may share your information with the following categories of recipients in the circumstances described below:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Service providers and data processors:</strong> Third-party companies that provide services on our behalf, such as IT infrastructure, payment processing, identity verification, and customer communications. These parties are contractually bound to process data only on our instructions and in accordance with applicable data protection law.</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Regulatory and law enforcement authorities:</strong> Where required by law, court order, or regulatory authority, including the FCA, CMAU, HMRC, and the Uganda Revenue Authority.</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Professional advisers:</strong> Lawyers, auditors, accountants, and insurers who provide professional services to GoldKach, subject to confidentiality obligations.</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of all or part of our business, your data may be transferred to the relevant third party, subject to appropriate safeguards.</li>
            </ul>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Where we transfer your personal data outside the United Kingdom or the European Economic Area, we ensure that appropriate safeguards are in place, such as standard contractual clauses approved by the UK Information Commissioner's Office (ICO).
            </p>
          </div>

          {/* 6. Retention of Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>6. Retention of Information</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              We retain your personal data only for as long as is necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, regulatory, accounting, or reporting requirements.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              In determining the appropriate retention period, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure, the purposes for which we process the data, and whether we can achieve those purposes through other means.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              As a regulated financial services firm, we are required to retain certain records for a minimum of five (5) years following the end of a client relationship, and in some cases up to seven (7) years, in accordance with FCA rules and Ugandan financial regulations. After the applicable retention period, we will securely delete or anonymise your personal data.
            </p>
          </div>

          {/* 7. Security */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>7. Security</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              We take the security of your personal data seriously and have implemented appropriate technical and organisational measures to protect it against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Encryption of data in transit using TLS/SSL protocols and at rest using AES-256 encryption</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Multi-factor authentication for access to systems containing personal data</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Regular security assessments, penetration testing, and vulnerability scanning</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Staff training on data protection and information security best practices</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}>Access controls ensuring that personal data is accessible only to authorised personnel on a need-to-know basis</li>
            </ul>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              While we strive to protect your personal data, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security, and you transmit data to us at your own risk. In the event of a data breach that is likely to result in a risk to your rights and freedoms, we will notify you and the relevant supervisory authority as required by law.
            </p>
          </div>

          {/* 8. Your Data Protection Rights */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>8. Your Data Protection Rights</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Under applicable data protection law, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, you have the following rights in relation to your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Right of access:</strong> You have the right to request a copy of the personal data we hold about you (a Subject Access Request).</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Right to rectification:</strong> You have the right to request that we correct any inaccurate or incomplete personal data we hold about you.</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Right to erasure:</strong> You have the right to request that we delete your personal data in certain circumstances, such as where it is no longer necessary for the purposes for which it was collected.</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data in certain circumstances.</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Right to data portability:</strong> You have the right to receive your personal data in a structured, commonly used, and machine-readable format and to transmit it to another controller.</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Right to object:</strong> You have the right to object to the processing of your personal data where we rely on legitimate interests as our legal basis.</li>
              <li className="text-sm" style={{ color: '#1E9BF0' }}><strong>Rights related to automated decision-making:</strong> You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal or similarly significant effects.</li>
            </ul>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              To exercise any of these rights, please contact us using the details provided in the Contact Us section below. We will respond to your request within one month. You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at www.ico.org.uk or the relevant data protection authority in your jurisdiction.
            </p>
          </div>

          {/* 9. Cookies */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>9. Cookies</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              Our website uses cookies and similar tracking technologies to distinguish you from other users, improve your browsing experience, and help us understand how our website is being used. Cookies are small text files that are placed on your device when you visit our website.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              We use strictly necessary cookies to enable core website functionality, performance cookies to analyse how visitors use our site, functional cookies to remember your preferences, and targeting cookies to deliver relevant advertising. For full details of the cookies we use and how to manage your cookie preferences, please refer to our Cookie Policy.
            </p>
          </div>

          {/* 10. Changes to this Privacy Policy */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>10. Changes to this Privacy Policy</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by posting the updated policy on our website with a revised effective date, and where appropriate, by sending you a direct notification.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our services after any changes to this policy constitutes your acceptance of the updated terms.
            </p>
          </div>

          {/* 11. Contact Us */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: '#2D2B6B' }}>11. Contact Us</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#1E9BF0' }}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal data, please contact our Data Protection Officer:
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
