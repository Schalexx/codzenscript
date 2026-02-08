import { Link } from 'react-router-dom'

function TermsPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing or using our Call of Duty Zen Script and related services, you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our products or services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Product Description</h2>
          <p className="text-gray-700 mb-4">
            Our Call of Duty Zen Script is a digital product designed to work with Cronus Zen hardware devices. The script provides 
            gameplay enhancements and customization options for the video game Call of Duty. We reserve the right to modify, update, 
            or discontinue any features at any time without prior notice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. License Grant</h2>
          <p className="text-gray-700 mb-4">
            Upon purchase, we grant you a limited, non-exclusive, non-transferable license to use the Call of Duty Zen Script for 
            personal use only. You may not:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Redistribute, sell, or share the script with others</li>
            <li>Modify, reverse engineer, or create derivative works</li>
            <li>Use the script for commercial purposes</li>
            <li>Share your account credentials with others</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Account Security</h2>
          <p className="text-gray-700 mb-4">
            You are responsible for maintaining the confidentiality of your account and password. You agree to notify us 
            immediately of any unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Game Compatibility</h2>
          <p className="text-gray-700 mb-4">
            Our scripts are designed for the current version of Call of Duty and Cronus Zen firmware. While we strive to maintain 
            compatibility with game updates, we cannot guarantee functionality after game patches or updates. We will make 
            reasonable efforts to update scripts when necessary.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Prohibited Uses</h2>
          <p className="text-gray-700 mb-4">
            You agree not to use our products:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>In violation of any game's terms of service</li>
            <li>In competitive tournaments or esports events where prohibited</li>
            <li>To harass, abuse, or harm other players</li>
            <li>In any way that violates applicable laws or regulations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Updates and Support</h2>
          <p className="text-gray-700 mb-4">
            We provide free updates to our scripts for the lifetime of the product. Support is available through our Discord 
            server. We aim to respond to inquiries within 24-48 hours but do not guarantee specific response times.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Disclaimer of Warranties</h2>
          <p className="text-gray-700 mb-4">
            Our products are provided "as is" without any warranties, express or implied. We do not guarantee that our scripts 
            will be error-free, uninterrupted, or compatible with all systems. Use of our products is at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, or 
            consequential damages arising from your use of our products, including but not limited to game account bans, 
            data loss, or hardware issues.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Termination</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to terminate or suspend your access to our products at any time, without prior notice, for 
            conduct that we believe violates these Terms of Service or is harmful to other users or our business.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We may modify these Terms of Service at any time. Continued use of our products after changes constitutes acceptance 
            of the new terms. We will make reasonable efforts to notify users of significant changes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            For questions about these Terms of Service, please contact us through our Discord server at 
            <a href="https://discord.gg/M5zuszNNwg" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> discord.gg/M5zuszNNwg</a>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/cod-logo.png" alt="Call of Duty Zen Scripts" className="h-8 md:h-10 mb-3 md:mb-4" />
              <p className="text-sm text-gray-400">
                Premium Cronus Zen scripts for Call of Duty. Dominate the competition with our exclusive Apollo script.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/product" className="hover:text-white">Product</Link></li>
                <li><Link to="/setup-guide" className="hover:text-white">Setup Guide</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/refund-policy" className="hover:text-white">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>© 2025 Call of Duty Zen Script. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TermsPage
