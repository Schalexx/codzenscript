import { Link } from 'react-router-dom'

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src="/cod-logo.png" alt="Call of Duty Zen Scripts" className="h-8 md:h-12" />
              </Link>
            </div>
            <nav className="flex items-center gap-3 md:gap-6">
              <Link to="/" className="px-3 md:px-4 py-2 text-gray-700 text-xs md:text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">
                Home
              </Link>
              <a href="https://discord.gg/M5zuszNNwg" target="_blank" rel="noopener noreferrer" className="px-3 md:px-4 py-2 text-gray-700 text-xs md:text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">
                Support
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            When you purchase and use our Call of Duty Zen Script, we may collect the following information:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Account Information:</strong> Email address, username, and Discord ID (if provided)</li>
            <li><strong>Payment Information:</strong> Processed securely through third-party payment processors (we do not store credit card details)</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website and products</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information, and operating system</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Process and fulfill your purchases of the Call of Duty Zen Script</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Send important updates about your purchase and our services</li>
            <li>Improve our products and user experience</li>
            <li>Prevent fraud and ensure security</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Service Providers:</strong> Payment processors, hosting providers, and email services necessary to operate our business</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement reasonable security measures to protect your personal information from unauthorized access, 
            alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, 
            and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies and Tracking</h2>
          <p className="text-gray-700 mb-4">
            Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small 
            files stored on your device that help us analyze website traffic and improve functionality. You can control 
            cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Third-Party Links</h2>
          <p className="text-gray-700 mb-4">
            Our website may contain links to third-party websites, including Discord and payment processors. We are not 
            responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Access and review your personal data</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your data (subject to legal retention requirements)</li>
            <li>Opt-out of marketing communications</li>
          </ul>
          <p className="text-gray-700 mb-4">
            To exercise these rights, please contact us through our Discord support server.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
            information from children. If you are a parent or guardian and believe your child has provided us with 
            personal information, please contact us immediately.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Data Retention</h2>
          <p className="text-gray-700 mb-4">
            We retain your personal information for as long as necessary to provide our services, comply with legal 
            obligations, resolve disputes, and enforce our agreements. When your data is no longer needed, we will 
            securely delete or anonymize it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. International Users</h2>
          <p className="text-gray-700 mb-4">
            If you are accessing our services from outside the United States, please be aware that your information may 
            be transferred to, stored, and processed in countries where our servers are located. By using our services, 
            you consent to this transfer.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Changes to Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated 
            "Last Updated" date. We encourage you to review this policy periodically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us through 
            our Discord support server.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link to="/" className="text-primary font-semibold hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2025 Call of DutyZenScripts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyPage
