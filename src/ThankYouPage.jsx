import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function ThankYouPage() {
  useEffect(() => {
    // Fire Google Ads conversion tracking
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17726539575/d2JlCK-nzb8bELeO1oRC',
        'value': 60.0,
        'currency': 'USD',
        'transaction_id': ''
      });
      console.log('Google Ads conversion event fired');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img src="/cod-logo.png" alt="Call of Duty Zen Scripts" className="h-10 md:h-12" />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-3 md:gap-6">
              <Link to="/" className="px-3 md:px-4 py-2 text-gray-700 text-xs md:text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">
                Home
              </Link>
              <a href="https://discord.gg/DkRgEDmP" target="_blank" rel="noopener noreferrer" className="px-3 md:px-4 py-2 text-gray-700 text-xs md:text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">
                Support
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Thank You Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-8 md:mb-12">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-green-100 rounded-full mb-6">
            <svg className="w-12 h-12 md:w-14 md:h-14 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You for Your Purchase!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Your order has been confirmed and is being processed.
          </p>
        </div>

        {/* What Happens Next */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Check Your Email</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  You'll receive an email with your download instructions and license key within the next few minutes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Join Our Discord</h3>
                <p className="text-gray-600 text-sm md:text-base mb-2">
                  Get instant access to our private Discord server for downloads, updates, and 24/7 support.
                </p>
                <a
                  href="https://discord.gg/DkRgEDmP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Join Discord Now →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Download & Install</h3>
                <p className="text-gray-600 text-sm md:text-base mb-2">
                  Follow our step-by-step setup guide to install the script on your Cronus Zen device.
                </p>
                <Link to="/setup-guide" className="text-primary font-semibold hover:underline">
                  View Setup Guide →
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Start Dominating</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Load up Call of Duty and experience unmatched performance with your new Zen script!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Callout */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 md:p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl md:text-4xl">🛡️</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Need Help? We've Got You Covered</h3>
              <p className="text-gray-700 mb-4">
                Our support team is available 24/7 to help with installation, configuration, or any questions you have.
                We offer 1-on-1 setup assistance to ensure you're game-ready in minutes.
              </p>
              <a
                href="https://discord.gg/DkRgEDmP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
              >
                Get Support on Discord
              </a>
            </div>
          </div>
        </div>

        {/* Key Benefits Reminder */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-2">⚡</div>
            <div className="font-bold text-gray-900 text-sm">Instant Access</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-2">🔄</div>
            <div className="font-bold text-gray-900 text-sm">Lifetime Updates</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-2">🎮</div>
            <div className="font-bold text-gray-900 text-sm">All Platforms</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-2">💬</div>
            <div className="font-bold text-gray-900 text-sm">24/7 Support</div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-block px-8 py-3 text-primary border-2 border-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="col-span-2 md:col-span-1">
              <img src="/cod-logo.png" alt="Call of Duty Zen Scripts" className="h-8 md:h-10 mb-3 md:mb-4" />
              <p className="text-xs md:text-sm text-gray-400">
                Premium Cronus Zen scripts for Call of Duty. Trusted by thousands.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm md:text-base mb-3 md:mb-4">Product</h3>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                <li><Link to="/product" className="hover:text-white">Apollo Script</Link></li>
                <li><Link to="/" className="hover:text-white">Features</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm md:text-base mb-3 md:mb-4">Support</h3>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                <li><a href="https://discord.gg/DkRgEDmP" target="_blank" rel="noopener noreferrer" className="hover:text-white">Discord Community</a></li>
                <li><a href="https://discord.gg/DkRgEDmP" target="_blank" rel="noopener noreferrer" className="hover:text-white">Installation Guide</a></li>
                <li><a href="https://discord.gg/DkRgEDmP" target="_blank" rel="noopener noreferrer" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm md:text-base mb-3 md:mb-4">Legal</h3>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
            <p>&copy; 2025 CODZenScripts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ThankYouPage
