import { useState } from 'react'
import { Link } from 'react-router-dom'
import useTimer from './useTimer'
import SEO from './SEO'

function ProductPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const { hours, minutes, seconds } = useTimer()

  const faqs = [
    {
      question: 'Why choose this NBA 2K26 Zen Script?',
      answer: 'Unlike generic scripts that keep you waiting and offer no personalization, our NBA 2K26 Zen script is fully customizable and delivers instantly. We use advanced systems to ensure only our verified clients\' scripts are activated properly. Security and quality come first, with dedicated support available 24/7 via Discord.'
    },
    {
      question: 'How do I receive my NBA 2K26 Zen script?',
      answer: 'After purchase, you\'ll instantly receive download instructions via email and Discord. Simply load the script onto your Cronus Zen device following our step-by-step guide, and you\'re ready to dominate NBA 2K26 in minutes.'
    },
    {
      question: 'What platforms does this NBA 2K26 Zen script support?',
      answer: 'Our NBA 2K26 Zen script works on all major platforms: PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One, and PC. The Cronus Zen device handles cross-platform compatibility seamlessly.'
    },
    {
      question: 'Is this NBA 2K26 Zen script safe to use?',
      answer: 'Yes! Our NBA 2K26 Zen script operates through the Cronus Zen hardware device, which is undetectable by anti-cheat systems. Thousands of players use our scripts daily with zero bans. We prioritize safety and discretion in every update.'
    },
    {
      question: 'Do I get free updates for NBA 2K26 patches?',
      answer: 'Absolutely! Your one-time purchase includes lifetime updates. Whenever 2K releases a patch or update, we quickly adapt the script and push the update to all customers at no extra cost. You\'ll always have the latest version.'
    },
    {
      question: 'Can I customize the NBA 2K26 Zen script settings?',
      answer: 'Yes! Our script comes with fully adjustable settings. You can fine-tune shot timing, adjust tempo speeds, customize defensive assists, and more. We provide detailed documentation and 1-on-1 setup support to help you dial in your perfect configuration.'
    }
  ]

  return (
    <>
      <SEO
        title="Aries NBA 2K26 Zen Script - Full Product Details & Features"
        description="Discover the Aries NBA 2K26 Zen Script with auto-green, button rhythm, defense assist, and automatic dribbling. Get instant access with lifetime updates and 24/7 support. The only working auto-green for NBA 2K26."
        keywords="NBA 2K26 Zen Script, Aries Script, NBA 2K26 Auto Green, Button Rhythm, Defense Assist, NBA 2K26 Cronus Zen, RS Auto Tempo, Automatic Dribbling, NBA 2K26 Features"
        canonical="/product"
        ogTitle="Aries NBA 2K26 Zen Script - Full Features & Details"
        ogDescription="The only working auto-green for NBA 2K26. Advanced features including button rhythm, defense assist, and automatic dribbling. $60 with lifetime updates."
        ogUrl="/product"
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img src="/nba2k.png" alt="NBA 2K Zen Scripts" className="h-10 md:h-12" />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-3 md:gap-6">
              <Link to="/" className="px-3 md:px-4 py-2 text-gray-700 text-xs md:text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">
                Home
              </Link>
              <a href="https://discord.gg/GzuXJzkZWT" target="_blank" rel="noopener noreferrer" className="px-3 md:px-4 py-2 text-gray-700 text-xs md:text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">
                Support
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero/Product Section */}
      <section className="max-w-7xl mx-auto px-4 py-6 md:py-12">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Left: Product Image - hidden on desktop, compact on mobile */}
          <div className="hidden md:flex items-center justify-center order-2 md:order-1">
            <div className="relative w-full max-w-sm">
              <img
                src="/ariesbox.png"
                alt="Aries NBA 2K26 Zen Script"
                className="w-full drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col order-1 md:order-2">
            {/* Mobile: Title with small product box */}
            <div className="flex items-end gap-4 mb-4 md:hidden">
              <div className="flex-shrink-0">
                <img
                  src="/ariesbox.png"
                  alt="Aries NBA 2K26 Zen Script"
                  className="w-20 drop-shadow-xl"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900">
                  Aries | 2k26
                </h1>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">4.92</span>
                  <span className="text-gray-500">| 1,936 Reviews</span>
                </div>
              </div>
            </div>

            {/* Desktop: Title without product box */}
            <div className="hidden md:block mb-4">
              <h1 className="text-5xl font-bold text-gray-900 mb-3">
                Aries | 2k26
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-gray-900">4.92 Stars</span>
                <span className="text-gray-500">| 1,936 Reviews</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-3 md:mb-4">
              <div className="flex items-baseline gap-2 md:gap-3 mb-2">
                <span className="text-4xl md:text-5xl font-black text-primary">$60.00</span>
                <span className="text-xl md:text-2xl text-gray-400 line-through">$100</span>
                <span className="bg-primary text-white text-xs md:text-sm font-bold px-2 md:px-3 py-1 rounded-full">40% OFF</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-primary to-red-600 text-white rounded-lg p-3 md:p-4 mb-4 md:mb-6">
              <div className="text-center">
                <p className="text-xs md:text-sm font-semibold mb-2">🔥 LIMITED TIME OFFER - USE CODE: 2K26</p>
                <div className="flex justify-center gap-3 md:gap-4 text-xl md:text-2xl font-bold">
                  <div>
                    <span className="text-2xl md:text-3xl">{String(hours).padStart(2, '0')}</span>
                  </div>
                  <span>:</span>
                  <div>
                    <span className="text-2xl md:text-3xl">{String(minutes).padStart(2, '0')}</span>
                  </div>
                  <span>:</span>
                  <div>
                    <span className="text-2xl md:text-3xl">{String(seconds).padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Limited Stock Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 md:p-3 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
              <span className="text-xl md:text-2xl">⚠️</span>
              <div>
                <p className="text-xs md:text-sm font-bold text-gray-900">Only 12 units left in stock!</p>
                <p className="text-xs text-gray-600">High demand - order now to secure yours</p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-4 md:mb-6">
              <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start">
                <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/visa.svg" alt="Visa" className="h-6 md:h-7 border border-gray-200 rounded px-2 py-1" />
                <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/mastercard.svg" alt="Mastercard" className="h-6 md:h-7 border border-gray-200 rounded px-2 py-1" />
                <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/american-express.svg" alt="American Express" className="h-6 md:h-7 border border-gray-200 rounded px-2 py-1" />
                <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/apm/paypal.svg" alt="PayPal" className="h-6 md:h-7 border border-gray-200 rounded px-2 py-1" />
                <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/wallets/apple-pay.svg" alt="Apple Pay" className="h-6 md:h-7 border border-gray-200 rounded px-2 py-1" />
                <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/wallets/google-pay.svg" alt="Google Pay" className="h-6 md:h-7 border border-gray-200 rounded px-2 py-1" />
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://whop.com/checkout/plan_8XxOORJLoXPYj?d2c=true"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary hover:bg-red-600 text-white font-bold py-3 md:py-4 rounded-lg text-center text-base md:text-lg transition-colors mb-3 md:mb-4"
            >
              BUY NOW - INSTANT ACCESS
            </a>

            {/* Support Callout */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 md:p-4">
              <div className="flex items-start gap-2 md:gap-3">
                <div className="text-2xl md:text-3xl">🛡️</div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm md:text-base text-gray-900 mb-1">Need Help With Setup? We'll Handle It.</h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-2">
                    <strong>1-on-1 Support</strong> - We'll hop on a live call, get your script optimized for your playstyle and be game-ready in minutes.
                  </p>
                  <a href="https://discord.gg/GzuXJzkZWT" target="_blank" rel="noopener noreferrer" className="text-primary text-xs md:text-sm font-semibold hover:underline">
                    Join Discord for Support →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase Sections */}
      <section className="bg-gray-50 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Feature 1: Shooting Made Simple */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-12 md:mb-20">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Shooting Made Simple</h2>
              <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">
                Transform your shooting game with our revolutionary <strong>Button Rhythm</strong> technology. Get excellent tempo with every shot, <strong>increasing green release up to 80% more</strong> compared to manual timing.
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                Button Rhythm converts button-press shots into rhythm shots with near-perfect accuracy every time. Our advanced algorithm handles the precision while you focus on positioning and strategy.
              </p>
              <p className="text-sm md:text-base text-gray-600">
                No more timing stress. No more missed shots due to lag or inconsistent releases. With Button Rhythm, green lights become your new normal - whether you're in Park, Pro-Am, or grinding MyCareer.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg aspect-video overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/button_rhythm.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Feature 2: Advanced Auto Green */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-12 md:mb-20">
            <div className="bg-gray-900 rounded-lg aspect-video overflow-hidden order-2 md:order-1">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/auto_green.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Advanced Auto Green</h2>
              <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">
                The <strong>only working auto-green for NBA 2K26</strong>. Once calibrated, green every shot from anywhere on the court with a single click.
              </p>
              <p className="text-sm md:text-base text-gray-600">
                Our proprietary timing engine adapts to your player's animations, release speeds, and court position. It's like having a built-in shooting coach that never misses.
              </p>
            </div>
          </div>

          {/* Feature 3: Enhanced Defense AI */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Enhanced Defense AI</h2>
              <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">
                Dominate both ends of the court with <strong>Defense Assist</strong> and <strong>Automatic Dribbling</strong>. Lock down opponents while maintaining fluid offensive movement.
              </p>
              <p className="text-sm md:text-base text-gray-600">
                Our AI-powered defensive system anticipates opponent movements and automatically positions you for steals and blocks. Combined with enhanced dribbling, you'll be unstoppable.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg aspect-video overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/quick_stop.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-4 md:px-6 py-3 md:py-4 text-left text-sm md:text-base font-semibold text-gray-900 hover:bg-gray-100 flex justify-between items-center transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className={`text-xl md:text-2xl text-primary transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 md:px-6 py-3 md:py-4 bg-white text-sm md:text-base text-gray-700 border-t border-gray-200">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Ready to Dominate NBA 2K26?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90">
            Join 1,936+ players using the Aries NBA 2K26 Zen script
          </p>
          <a href="https://whop.com/checkout/plan_8XxOORJLoXPYj?d2c=true" target="_blank" rel="noopener noreferrer" className="inline-block px-8 md:px-10 py-3 md:py-4 bg-white text-primary hover:bg-gray-100 rounded-lg font-bold text-base md:text-lg transition-colors">
            Buy Now - $60.00
          </a>
          <div className="mt-4 md:mt-6 text-xs md:text-sm opacity-90">
            ✓ Instant Access  ✓ Lifetime Updates  ✓ 24/7 Support  ✓ All Platforms
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="col-span-2 md:col-span-1">
              <img src="/nba2k.png" alt="NBA 2K Zen Scripts" className="h-8 md:h-10 mb-3 md:mb-4" />
              <p className="text-xs md:text-sm text-gray-400">
                Premium Cronus Zen scripts for NBA 2K26. Trusted by thousands.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm md:text-base mb-3 md:mb-4">Product</h3>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                <li><a href="/product" className="hover:text-white">Aries Script</a></li>
                <li><a href="/" className="hover:text-white">Features</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm md:text-base mb-3 md:mb-4">Support</h3>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                <li><a href="https://discord.gg/GzuXJzkZWT" target="_blank" rel="noopener noreferrer" className="hover:text-white">Discord Community</a></li>
                <li><a href="https://discord.gg/GzuXJzkZWT" target="_blank" rel="noopener noreferrer" className="hover:text-white">Installation Guide</a></li>
                <li><a href="https://discord.gg/GzuXJzkZWT" target="_blank" rel="noopener noreferrer" className="hover:text-white">Contact Us</a></li>
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
            <p>&copy; 2025 NBA2KZenScripts. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}

export default ProductPage
