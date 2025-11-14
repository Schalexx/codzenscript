import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from './SEO'

function FAQPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: 'What is a Call of Duty Zen Script?',
      answer: 'A Call of Duty Zen Script is a programmable macro that runs on the Cronus Zen hardware device to enhance your gameplay. It provides features like auto tracking, flawless anti-recoil, rapid fire, auto ping, and tactical movement assistance. The script operates at the hardware level, making it undetectable by anti-cheat systems.'
    },
    {
      question: 'How do I install a Call of Duty Zen Script?',
      answer: 'To install: 1) Purchase a Cronus Zen device, 2) Buy our Apollo Call of Duty script, 3) Download the Cronus Zen software on your PC, 4) Connect your Cronus Zen via USB, 5) Load the script file into the device using the software, 6) Connect your controller and console, 7) Configure your preferred settings. Full installation instructions are provided with purchase.'
    },
    {
      question: 'Does Call of Duty Zen Script work on PS5?',
      answer: 'Yes! Our Call of Duty Zen Script works perfectly on PlayStation 5 with the Cronus Zen device. It supports DualSense controllers and all PS5 features. The Cronus Zen acts as a bridge between your controller and console, so it works seamlessly with PS5, PS4, Xbox Series X/S, Xbox One, and PC.'
    },
    {
      question: 'Can I get banned for using a Cronus Zen Script in Call of Duty?',
      answer: 'No, you cannot get banned. The Cronus Zen operates at the hardware level, simply sending modified controller inputs to your console. To the game and anti-cheat systems like Ricochet, these look like legitimate controller commands from a skilled player. Thousands of players use Zen scripts daily without any bans. It\'s completely undetectable.'
    },
    {
      question: 'What is the best Call of Duty Zen Script?',
      answer: 'The Apollo Call of Duty Zen Script is considered the best available. It features advanced auto tracking with 250+ AI boosters, flawless anti-recoil with 100+ weapon profiles, rapid fire, auto ping system, tactical movement assistance, and fully customizable settings. It receives regular updates for game patches and includes 24/7 Discord support.'
    },
    {
      question: 'How much does a Call of Duty Zen Script cost?',
      answer: 'Our Apollo Call of Duty Zen Script costs $60.00 (regularly $100). This is a one-time payment that includes lifetime access, all future updates, and 24/7 support. Unlike monthly subscriptions, you pay once and own it forever. The Cronus Zen device itself costs around $100-120 separately.'
    },
    {
      question: 'Does Cronus Zen work for Call of Duty Warzone?',
      answer: 'Yes! The Cronus Zen and our Call of Duty script work perfectly in Warzone. You can use auto tracking, anti-recoil, rapid fire, and all other features in Warzone, Multiplayer, Ranked Play, and every game mode. It\'s especially helpful for securing wins and improving your K/D ratio quickly.'
    },
    {
      question: 'What is auto tracking in Call of Duty Zen Scripts?',
      answer: 'Auto tracking is a feature in our Zen script that automatically locks onto and tracks enemy targets with precision. Using advanced AI-powered aim assist, it follows targets seamlessly across the battlefield. Once configured for your sensitivity, it provides laser-accurate tracking in every gunfight. Our script has the most advanced auto tracking for Call of Duty.'
    },
    {
      question: 'Can I use Call of Duty Zen Script in online modes?',
      answer: 'Yes, you can safely use our Call of Duty Zen Script in all online modes including Warzone, Multiplayer, Ranked Play, and any other mode. The Cronus Zen is hardware-based and completely undetectable by Ricochet anti-cheat. Many competitive players use Zen scripts to level the playing field against other enhanced players.'
    },
    {
      question: 'Do I need a PC to use Cronus Zen with Call of Duty?',
      answer: 'You only need a PC for the initial setup - to load the script onto the Cronus Zen device using the Cronus software. Once the script is loaded, you don\'t need a PC anymore. The Cronus Zen connects directly between your controller and console/PC for gameplay.'
    },
    {
      question: 'What is anti-recoil in Call of Duty Zen Scripts?',
      answer: 'Anti-recoil is an advanced feature that completely eliminates weapon recoil patterns for laser-accurate sprays. The script automatically counteracts the recoil of every weapon in the game, resulting in perfect recoil control. It works with 100+ weapon profiles and can be fine-tuned for each gun individually.'
    },
    {
      question: 'Does Call of Duty Zen Script work with Xbox?',
      answer: 'Yes! Our Call of Duty Zen Script works on Xbox Series X, Xbox Series S, and Xbox One. The Cronus Zen device supports all Xbox Wireless Controllers. Simply connect the Cronus Zen between your Xbox controller and console, and the script will work seamlessly.'
    },
    {
      question: 'How do I update my Call of Duty Zen Script?',
      answer: 'Script updates are delivered automatically through our platform. When Call of Duty releases a patch or new season, we update the script within 24-48 hours. You\'ll receive a notification via email and Discord. Simply download the new version and load it onto your Cronus Zen device. All updates are free for life.'
    },
    {
      question: 'Can I customize my Call of Duty Zen Script settings?',
      answer: 'Yes! Our Apollo script is fully customizable. You can adjust tracking speed, anti-recoil intensity, rapid fire rate, auto ping sensitivity, and more. Settings can be configured for different weapons, loadouts, and playstyles. We provide detailed configuration guides and 1-on-1 setup support via Discord.'
    },
    {
      question: 'What is rapid fire in Call of Duty Zen Scripts?',
      answer: 'Rapid fire maximizes your fire rate with semi-automatic and tactical weapons. It automatically triggers shots at the maximum possible speed, giving you a significant advantage in close to mid-range combat. Combined with anti-recoil, it makes semi-auto weapons incredibly powerful.'
    },
    {
      question: 'Do I get support with my Call of Duty Zen Script purchase?',
      answer: 'Yes! We provide 24/7 support through our Discord community. Our support team helps with installation, configuration, troubleshooting, and optimization. We also offer 1-on-1 setup calls to get your script perfectly tuned to your playstyle. Support is free for all customers.'
    },
    {
      question: 'Is Cronus Zen legal for Call of Duty?',
      answer: 'Yes, the Cronus Zen device is a legal hardware accessory. It doesn\'t violate any laws or terms of service because it doesn\'t modify game files or inject code. It simply sends controller inputs, which is indistinguishable from a controller adapter or pro controller. Millions of gamers use Cronus devices globally.'
    },
    {
      question: 'What games does Cronus Zen work with besides Call of Duty?',
      answer: 'Cronus Zen works with thousands of games across all platforms. You can use it with Fortnite, Apex Legends, Rainbow Six Siege, and virtually any console or PC game. However, our Apollo script is specifically optimized for Call of Duty with features tailored to FPS gameplay and weapon mechanics.'
    },
    {
      question: 'How long does it take to set up Call of Duty Zen Script?',
      answer: 'Initial setup takes about 10-15 minutes. This includes connecting the Cronus Zen, loading the script, and basic configuration. Fine-tuning settings for your specific weapons and sensitivity might take another 10-20 minutes. Our detailed guides and Discord support make the process easy even for beginners.'
    },
    {
      question: 'Will Call of Duty Zen Script work with future game updates?',
      answer: 'Yes! We constantly update the script to maintain compatibility with Call of Duty patches, updates, and new seasons. When Activision releases a new patch, we test and update the script within 24-48 hours. All updates are free and automatic for lifetime. Your one-time purchase covers all future versions of the script.'
    }
  ]

  // Add FAQ schema to head
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    })
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [faqs])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src="/cod-logo.png" alt="Call of Duty Zen Scripts" className="h-12" />
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">
                Home
              </Link>
              <Link to="/product" className="px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">
                Product
              </Link>
              <a href="https://discord.gg/DkRgEDmP" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">
                Support
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Call of Duty Zen Script FAQ</h1>
          <p className="text-xl opacity-90">
            Everything you need to know about Call of Duty Zen Scripts and Cronus Zen
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center transition-colors"
              >
                <span className="text-lg">{faq.question}</span>
                <span className={`text-2xl text-primary transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                  {openFaq === idx ? '−' : '+'}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-6 opacity-90">
            Join our Discord community for instant support and answers from our team and thousands of users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/DkRgEDmP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-lg font-bold text-lg transition-colors"
            >
              Join Discord Support
            </a>
            <Link
              to="/product"
              className="inline-block px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 rounded-lg font-bold text-lg transition-colors"
            >
              View Product
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-900 mb-2">Instant Access</h3>
            <p className="text-sm text-gray-600">Download immediately after purchase</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">🔄</div>
            <h3 className="font-bold text-gray-900 mb-2">Lifetime Updates</h3>
            <p className="text-sm text-gray-600">Free updates for all Call of Duty patches</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600">Discord community always available</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/cod-logo.png" alt="Call of Duty Zen Scripts" className="h-10 mb-4" />
              <p className="text-sm text-gray-400">
                Premium Cronus Zen scripts for Call of Duty. Trusted by thousands.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/product" className="hover:text-white">Apollo Script</Link></li>
                <li><Link to="/what-is-cod-zen-script" className="hover:text-white">What is a Zen Script?</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://discord.gg/DkRgEDmP" target="_blank" rel="noopener noreferrer" className="hover:text-white">Discord Community</a></li>
                <li><a href="https://discord.gg/DkRgEDmP" target="_blank" rel="noopener noreferrer" className="hover:text-white">Installation Guide</a></li>
                <li><a href="https://discord.gg/DkRgEDmP" target="_blank" rel="noopener noreferrer" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 CODZenScripts. All rights reserved.</p>
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/visa.svg" alt="Visa" className="h-6 border border-gray-600 rounded px-2 py-1 bg-white" />
              <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/mastercard.svg" alt="Mastercard" className="h-6 border border-gray-600 rounded px-2 py-1 bg-white" />
              <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/american-express.svg" alt="American Express" className="h-6 border border-gray-600 rounded px-2 py-1 bg-white" />
              <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/apm/paypal.svg" alt="PayPal" className="h-6 border border-gray-600 rounded px-2 py-1 bg-white" />
              <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/wallets/apple-pay.svg" alt="Apple Pay" className="h-6 border border-gray-600 rounded px-2 py-1 bg-white" />
              <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/wallets/google-pay.svg" alt="Google Pay" className="h-6 border border-gray-600 rounded px-2 py-1 bg-white" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FAQPage
