import { useState } from 'react'
import { Link } from 'react-router-dom'
import useTimer from './useTimer'
import LazyVideo from './LazyVideo'
import './App.css'

function App() {
  const { hours, minutes, seconds } = useTimer()
  const [openFaq, setOpenFaq] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      title: 'NEW Auto Tracking Aim Assist',
      desc: 'Introducing the all-new Auto Tracking Aim Assist - powered by an upgraded system with over 250 adaptive boosters built to match every playstyle. This next-generation design reads your movement patterns in real time, delivering unmatched precision, smoother lock-ons, and effortless target control in every fight.',
      badge: 'NEW'
    },
    {
      title: 'Perfect Anti Recoil',
      desc: 'Master Perfect Recoil Control — The Apollo Cronus Zen Script introduces a next-gen recoil management system featuring over 100 anti recoil boosters. Built from the ground up for competitive consistency, it dynamically balances weapon feedback, ensuring every shot lands steady, smooth, and perfectly on target.',
      badge: 'HOT'
    },
    {
      title: 'Rapid Fire',
      desc: 'Built for Speed — The Apollo Cronus Zen Script introduces Advanced Rapid Fire 2.0, engineered for seamless timing across all weapons. Turning semi automatic weapons to full automatic to help you dominate with any loadout.',
      badge: null
    },
    {
      title: 'Auto Ping',
      desc: 'Stay Locked and Aware — The Apollo Cronus Zen Script\'s Auto Ping system instantly tags enemies the moment they\'re detected — allowing you to track them through walls! Maintain constant awareness of enemy locations at all times.',
      badge: 'NEW'
    },
    {
      title: 'Maximum Aim Assist Boost',
      desc: 'Lock On Instantly — The Apollo Cronus Zen Script\'s Precision Aim Engine amplifies every movement, syncing with your stick input to create unmatched responsiveness. Expect smoother tracking, sharper snaps, and total target control.',
      badge: null
    },
    {
      title: 'Advanced Features',
      desc: 'This is just the surface! Apollo Zen Script contains many more advanced features including No Delay, Headshot Assist, Hipfire Assist & More!',
      badge: 'PREMIUM'
    }
  ]

  const testimonials = [
    {
      name: 'Ethan',
      game: 'Warzone Player',
      rating: 5,
      text: "Just got this setup for Warzone and it's ridiculous how smooth everything feels. Auto Aim locks perfectly and the Anti-Recoil actually works across every weapon I've tested. Setup took under 5 minutes and the support team was spot on. Easily the best Zen setup I've used."
    },
    {
      name: 'Noah',
      game: 'Ranked Player',
      rating: 5,
      text: "The tracking on this thing is wild. Sticky Aim feels natural but deadly accurate, and I'm beaming people across the map without even trying. Rapid Fire runs clean, no lag, no shake. If you play ranked or pubs, this gives you a real edge."
    },
    {
      name: 'Ryan',
      game: 'COD Veteran',
      rating: 5,
      text: "Hands down the smoothest experience I've had with a COD script. The customization options are crazy, I tuned the sensitivity and timing perfectly for my setup. Everything just clicks now. 10/10."
    }
  ]

  const stats = [
    { percentage: '98%', text: 'Felt instant improvements in their accuracy and kill counts across Warzone and Multiplayer.' },
    { percentage: '92%', text: 'Said setup was easier and faster than any other script provider they\'ve used.' },
    { percentage: '96%', text: 'Reported winning more gunfights and ranking up faster consistently.' }
  ]

  const faqs = [
    {
      question: 'Why choose this Call of Duty Zen Script?',
      answer: 'Unlike generic scripts that keep you waiting and offer no personalization, our COD Zen script is fully customizable and delivers instantly. We use advanced systems to ensure only our verified clients\' scripts are activated properly. Security and quality come first, with dedicated support available 24/7 via Discord.'
    },
    {
      question: 'How do I receive my COD Zen script?',
      answer: 'After purchase, you\'ll instantly receive download instructions via email and Discord. Simply load the script onto your Cronus Zen device following our step-by-step guide, and you\'re ready to dominate any COD lobby in minutes.'
    },
    {
      question: 'What platforms does this COD Zen script support?',
      answer: 'Our COD Zen script works seamlessly on PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One, and PC. Full cross-platform compatibility for all Call of Duty players using Cronus Zen devices.'
    },
    {
      question: 'Can I get banned using this COD Zen script?',
      answer: 'Our script operates at the hardware level through Cronus Zen, making it virtually undetectable. We\'ve served 18,000+ users with zero confirmed bans. The script mimics natural human input patterns and doesn\'t modify game files, ensuring the highest level of security.'
    },
    {
      question: 'What makes this better than other COD scripts?',
      answer: 'Our COD Zen script features weekly updates specifically optimized for the latest patches, over 250 AI aim boosters that competitors don\'t have, and full customization that adapts to YOUR playstyle. Plus, we offer lifetime support and regular feature additions at no extra cost.'
    },
    {
      question: 'Do you offer refunds for the COD Zen script?',
      answer: 'Due to the digital nature of our COD Zen script, all sales are final. However, we offer comprehensive 24/7 support to ensure you get maximum value from your purchase. Check our 4.9/5 rating from 18,000+ satisfied customers.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo - smaller on mobile */}
            <div className="flex-shrink-0">
              <img src="/cod-logo.png" alt="COD Zen Scripts" className="h-8 md:h-12" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-2">
              <a href="#" className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-dark transition-colors">
                Home
              </a>
              <a href="https://discord.gg/codzenscript" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">
                Support
              </a>
            </nav>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-3 pb-2 flex flex-col gap-2">
              <a href="#" className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-dark transition-colors">
                Home
              </a>
              <a href="https://discord.gg/codzenscript" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">
                Support
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Promo Banner */}
      <div className="bg-primary text-white text-center py-2">
        <p className="text-xs font-medium mb-1">
          🔥 Only 12 Spots Left at $60 — Price Increases to $100 in:
        </p>
        <div className="text-base md:text-lg font-bold">
          {String(hours).padStart(2, '0')} : {String(minutes).padStart(2, '0')} : {String(seconds).padStart(2, '0')}
        </div>
      </div>

      {/* Product Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 py-4 md:py-12">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Left: Video Player */}
          <div className="flex items-start justify-center order-1 md:order-1">
            <div className="relative w-full max-w-md md:max-w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl border-2 border-gray-300 bg-black">
                <LazyVideo
                  src="/gameplay.mp4"
                  className="w-full"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                />
              </div>
              <p className="text-center text-gray-600 mt-2 text-xs md:text-sm font-semibold">
                ⬆️ Dominate any lobby in Warzone, Multiplayer or Ranked
              </p>

              {/* Trust badges below video */}
              <div className="mt-4 space-y-3 hidden md:block">
                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                    <div className="text-xl mb-1">✓</div>
                    <div className="text-xs font-semibold text-gray-800">Instant Access</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                    <div className="text-xl mb-1">🔒</div>
                    <div className="text-xs font-semibold text-gray-800">Secure Checkout</div>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-2">
                    <div className="text-xl mb-1">🛡️</div>
                    <div className="text-xs font-semibold text-gray-800">Zero Bans</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col order-2 md:order-2">
            {/* Mobile: Title */}
            <div className="mb-4 md:hidden">
              <h1 className="text-3xl font-bold text-gray-900">
                Apollo | COD Script
              </h1>
              <div className="flex items-center gap-2 mt-2 text-sm">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-gray-900">4.9</span>
                <span className="text-gray-500">| 2,150 Reviews</span>
              </div>
            </div>

            {/* Desktop: Title */}
            <div className="hidden md:block mb-4">
              <h1 className="text-5xl font-bold text-gray-900 mb-3">
                Apollo | COD Script
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-gray-900">4.9 Stars</span>
                <span className="text-gray-500">| 2,150 Reviews</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-4 md:mb-6">
              <div className="flex items-baseline gap-2 md:gap-3">
                <span className="text-4xl md:text-5xl font-black text-primary">$60.00</span>
                <span className="text-xl md:text-2xl text-gray-400 line-through">$100</span>
              </div>
            </div>

            {/* Urgency Alert */}
            <div className="mb-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
              <p className="text-sm font-semibold text-yellow-800 flex items-center gap-2">
                <span>⚠️</span>
                <span>15 people are viewing this right now</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
              <a
                href="https://whop.com/checkout/plan_kX0heL2LtwAlP?d2c=true"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 md:py-4 rounded-lg text-center text-base md:text-lg transition-all transform hover:scale-[1.02] shadow-lg"
              >
                🔥 GET INSTANT ACCESS — $60
              </a>
              <Link
                to="/product"
                className="block w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 md:py-4 rounded-lg text-center text-base md:text-lg transition-colors border-2 border-gray-300"
              >
                View Full Details
              </Link>
              <div className="text-center mt-2">
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="font-semibold text-green-700">52 sold in last 24 hours</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-4 md:mb-6">
              <p className="text-xs text-center md:text-left text-gray-600 mb-2">
                Secure payment with:
              </p>
              <div className="flex flex-wrap gap-1.5 md:gap-2 items-center justify-center md:justify-start">
                <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/visa.svg" alt="Visa" className="h-6 md:h-7 border border-gray-200 rounded px-1.5 md:px-2 py-0.5 md:py-1" />
                <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/mastercard.svg" alt="Mastercard" className="h-6 md:h-7 border border-gray-200 rounded px-1.5 md:px-2 py-0.5 md:py-1" />
                <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/american-express.svg" alt="American Express" className="h-6 md:h-7 border border-gray-200 rounded px-1.5 md:px-2 py-0.5 md:py-1" />
                <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/apm/paypal.svg" alt="PayPal" className="h-6 md:h-7 border border-gray-200 rounded px-1.5 md:px-2 py-0.5 md:py-1" />
                <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/wallets/apple-pay.svg" alt="Apple Pay" className="h-6 md:h-7 border border-gray-200 rounded px-1.5 md:px-2 py-0.5 md:py-1" />
                <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/wallets/google-pay.svg" alt="Google Pay" className="h-6 md:h-7 border border-gray-200 rounded px-1.5 md:px-2 py-0.5 md:py-1" />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
              The best Cronus Zen script for <strong>Call of Duty</strong>, trusted by top-tier players chasing domination. Apollo has the perfect mod combination to help you dominate any lobby from Warzone to Ranked.
            </p>

            {/* Key Features */}
            <div className="mb-4 md:mb-6">
              <ul className="space-y-1.5 md:space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm md:text-base text-gray-700">Optimized for all COD games including the latest gameplay mechanics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm md:text-base text-gray-700">250+ AI Aim Boosters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm md:text-base text-gray-700">Perfect Anti Recoil Control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm md:text-base text-gray-700">Auto Ping, No Delay, Headshot Assist & More!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm md:text-base text-gray-700">Lifetime updates & 24/7 support</span>
                </li>
              </ul>
            </div>

            {/* Support Callout */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
              <div className="flex items-start gap-2 md:gap-3">
                <div className="text-2xl md:text-3xl">🛡️</div>
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">Need Help With Setup? We'll Handle It.</h3>
                  <p className="text-xs md:text-sm text-gray-700 mb-2">
                    <strong>1-on-1 Support</strong> - We'll hop on a live call, get your script optimized for your playstyle and be game-ready in minutes.
                  </p>
                  <a href="https://discord.gg/codzenscript" target="_blank" rel="noopener noreferrer" className="text-primary text-xs md:text-sm font-semibold hover:underline">
                    Join Discord for Support →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Banner */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white rounded-xl shadow-md p-3 text-center border border-gray-100">
            <div className="text-2xl font-black text-primary mb-1">250+</div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">AI Aim Boosters</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-3 text-center border border-gray-100">
            <div className="text-2xl font-black text-primary mb-1">18K+</div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">Active Users</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-3 text-center border border-gray-100">
            <div className="text-2xl font-black text-primary mb-1">4.9/5</div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">Rating</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-3 text-center border border-gray-100">
            <div className="text-2xl font-black text-primary mb-1">0</div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">Ban Reports</div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Dominate any lobby in Warzone, Multiplayer or Ranked
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how the Apollo Zen Script keeps your aim locked and every shot laser-straight in live combat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-gray-300 bg-black">
                <LazyVideo
                  src="/auto-tracking.mp4"
                  className="w-full"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                />
              </div>
              <div className="mt-4 bg-white rounded-lg p-4 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">🎯 Perfect Auto Tracking</h3>
                <p className="text-sm text-gray-600">
                  Magnetized tracking that follows movement flawlessly. Your crosshair never lets go.
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-gray-300 bg-black">
                <LazyVideo
                  src="/anti-recoil.mp4"
                  className="w-full"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                />
              </div>
              <div className="mt-4 bg-white rounded-lg p-4 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">⚡ Flawless Anti Recoil Control</h3>
                <p className="text-sm text-gray-600">
                  Laser Accuracy - Built-in recoil correction for every weapon.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Below Videos */}
          <div className="max-w-lg mx-auto mt-12 text-center">
            <div className="bg-primary rounded-xl p-6 shadow-2xl">
              <p className="text-white text-sm font-semibold mb-3">
                ⚠️ WARNING: Only 12 spots left at $60
              </p>
              <a
                href="https://whop.com/checkout/plan_kX0heL2LtwAlP?d2c=true"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-primary hover:bg-gray-100 font-black py-4 rounded-lg text-center text-lg transition-all transform hover:scale-[1.02]"
              >
                CLAIM YOUR SPOT NOW
              </a>
              <p className="text-white text-xs mt-3 opacity-90">
                Price increases to $100 when timer hits zero
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4">
            <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
              ⭐ VERIFIED REVIEWS
            </div>
          </div>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Loved by 18K+ users</h2>
          <p className="text-center text-gray-600 mb-12">Don't take it from us — here's what our clients have to say about our COD Zen scripts</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow-md border-2 border-gray-200 hover:border-primary transition-colors">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{testimonial.name} Testimonial</h4>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.game}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Real Results. Real Players.</h2>
        <p className="text-center text-gray-600 mb-12">Based on over 18,000+ users across all platforms</p>
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-primary flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">{stat.percentage}</span>
              </div>
              <p className="text-gray-700">{stat.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">Measured after a week of regular play with recommended settings</p>
      </section>

      {/* Comparison Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Apollo vs. Other Scripts</h2>
          <div className="relative pt-4">
            <div className="bg-white rounded-2xl shadow-2xl overflow-visible border border-gray-200">
              <div className="grid md:grid-cols-3 divide-x divide-gray-200">
                {/* Competitor 1 */}
                <div className="p-6 text-center bg-gray-50">
                  <h3 className="font-bold text-lg mb-4 text-gray-600">Generic Scripts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className="text-red-500">✗</span>
                      <span>Basic Aim Assist</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className="text-red-500">✗</span>
                      <span>Limited Support</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className="text-red-500">✗</span>
                      <span>Few Features</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className="text-red-500">✗</span>
                      <span>No Customization</span>
                    </div>
                  </div>
                  <div className="mt-6 text-2xl font-bold text-gray-400">$75+</div>
                </div>

                {/* Elite - Featured */}
                <div className="p-6 pt-8 text-center bg-primary text-white relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap z-10">
                    BEST CHOICE
                  </div>
                  <h3 className="font-bold text-xl mb-4">Apollo Script</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-300">✓</span>
                      <span className="font-semibold">250+ AI Aim Boosters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-300">✓</span>
                      <span className="font-semibold">24/7 Live Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-300">✓</span>
                      <span className="font-semibold">6+ Premium Features</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-300">✓</span>
                      <span className="font-semibold">Full Customization</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="text-3xl font-black">$60</div>
                    <div className="text-xs opacity-90 line-through">$100</div>
                  </div>
                </div>

                {/* Manual Play */}
                <div className="p-6 text-center bg-gray-50">
                  <h3 className="font-bold text-lg mb-4 text-gray-600">Manual Play</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className="text-red-500">✗</span>
                      <span>Inconsistent Aim</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className="text-red-500">✗</span>
                      <span>No Assistance</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className="text-red-500">✗</span>
                      <span>Hours of Practice</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className="text-red-500">✗</span>
                      <span>More Deaths</span>
                    </div>
                  </div>
                  <div className="mt-6 text-2xl font-bold text-gray-400">Free</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Below Comparison */}
          <div className="text-center mt-8">
            <a
              href="https://whop.com/checkout/plan_kX0heL2LtwAlP?d2c=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              Choose The Winning Script — $60
            </a>
            <p className="text-sm text-gray-500 mt-3">Join 18,000+ players who made the smart choice</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Everything You Need</h2>
          <p className="text-center text-gray-600 mb-12">Powerful features designed for Call of Duty domination</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md relative">
                {feature.badge && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                    {feature.badge}
                  </div>
                )}
                <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Simple, Transparent Pricing</h2>

        <div className="bg-white rounded-2xl shadow-xl border-2 border-primary p-8 relative max-w-2xl mx-auto">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
            BEST VALUE
          </div>

          <div className="max-w-xl mx-auto">
            {/* Pricing Info */}
            <div>
              <div className="mb-6 text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  $60.00
                  <span className="text-2xl text-gray-400 line-through ml-2">$100</span>
                </div>
                <p className="text-gray-600">One-time payment. Instant access.</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Auto Tracking & Anti Recoil</div>
                    <div className="text-sm text-gray-600">250+ AI aim boosters with perfect recoil control</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Rapid Fire & Auto Ping</div>
                    <div className="text-sm text-gray-600">Advanced rapid fire with enemy tracking</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Premium Features & More</div>
                    <div className="text-sm text-gray-600">No Delay, Headshot Assist, Hipfire & more</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Lifetime Updates & 24/7 Support</div>
                    <div className="text-sm text-gray-600">Always up-to-date with Discord support</div>
                  </div>
                </div>
              </div>

              <a
                href="https://whop.com/checkout/plan_kX0heL2LtwAlP?d2c=true"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary-dark transition-all transform hover:scale-[1.02] text-lg mb-4 text-center shadow-lg"
              >
                🔥 SECURE YOUR SPOT — $60
              </a>

              <div className="text-center text-sm text-gray-500">
                🔒 Secure checkout · Instant delivery · All payment methods accepted
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center transition-colors"
                >
                  <span>{faq.question}</span>
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Dominate Call of Duty?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 18,000+ players using the #1 rated COD Zen script
          </p>
          <a href="https://whop.com/checkout/plan_kX0heL2LtwAlP?d2c=true" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-white text-primary hover:bg-gray-100 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
            🎯 JOIN 18K+ WINNERS — $60
          </a>
          <div className="mt-6 text-sm opacity-90">
            ✓ Instant Access  ✓ Lifetime Updates  ✓ 24/7 Support  ✓ Zero Ban Risk
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/cod-logo.png" alt="COD Zen Scripts" className="h-10 mb-4" />
              <p className="text-sm text-gray-400">
                Premium Cronus Zen scripts for Call of Duty. Trusted by thousands since 2019.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://discord.gg/codzenscript" target="_blank" rel="noopener noreferrer" className="hover:text-white">Discord Community</a></li>
                <li><a href="https://discord.gg/codzenscript" target="_blank" rel="noopener noreferrer" className="hover:text-white">Installation Guide</a></li>
                <li><a href="https://discord.gg/codzenscript" target="_blank" rel="noopener noreferrer" className="hover:text-white">Contact Us</a></li>
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

export default App
