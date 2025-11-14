import { Link } from 'react-router-dom'
import SEO from './SEO'

function SetupGuidePage() {
  return (
    <>
      <SEO
        title="Call of Duty Zen Script Setup Guide - PS5, Xbox & PC Installation"
        description="Complete step-by-step installation guide for Call of Duty Zen Script. Learn how to install, configure, and optimize your Cronus Zen script for PS5, PlayStation 4, Xbox Series X/S, Xbox One, and PC."
        keywords="COD Zen Script setup, How to install Zen Script, Cronus Zen installation, Call of Duty setup guide, Zen Script PS5 setup, Xbox Zen Script installation, COD configuration"
        canonical="/setup-guide"
        ogTitle="Call of Duty Zen Script Setup Guide - Easy Installation for All Platforms"
        ogDescription="Step-by-step installation and configuration guide for Call of Duty Zen Script. Works on PS5, Xbox Series X/S, and PC. Get started in minutes."
        ogUrl="/setup-guide"
      />
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

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">How to Install Call of Duty Zen Script</h1>
          <p className="text-xl opacity-90">
            Complete step-by-step guide for PS5, Xbox, and PC
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Installing the <strong>Apollo Call of Duty Zen Script</strong> is quick and easy. This comprehensive guide will walk you through everything you need to get up and running in under 15 minutes. Whether you're on PS5, Xbox, or PC, we've got you covered.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2 text-gray-900">⏱️ Time Required: 10-15 minutes</h3>
            <h3 className="font-bold text-lg mb-2 text-gray-900">💻 Requirements:</h3>
            <ul className="space-y-1 text-gray-700">
              <li>• Cronus Zen device</li>
              <li>• Windows PC (for initial setup only)</li>
              <li>• USB cable</li>
              <li>• Your gaming controller</li>
              <li>• Apollo Call of Duty Zen Script (purchased from us)</li>
            </ul>
          </div>
        </section>

        {/* What You Need */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What You Need Before Starting</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">1. Cronus Zen Device</h3>
              <p className="text-gray-700 mb-2">
                If you don't already have one, purchase a <strong>Cronus Zen</strong> from the official Cronus website or authorized retailers (Amazon, GameStop, etc.). Price is typically $100-120.
              </p>
              <p className="text-gray-600 text-sm">
                Note: Make sure you get the authentic Cronus Zen, not cheaper knockoffs that won't work properly.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">2. Cronus Zen Studio Software</h3>
              <p className="text-gray-700">
                Download the free <strong>Cronus Zen Studio</strong> software from the official Cronus website. This is the program you'll use to load scripts onto your device. Available for Windows only.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">3. Apollo Call of Duty Script File</h3>
              <p className="text-gray-700">
                After purchasing our script, you'll receive download links via email and Discord. Save the .gpc script file to your computer in an easy-to-find location.
              </p>
            </div>
          </div>
        </section>

        {/* Step by Step Instructions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Step-by-Step Installation Guide</h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Install Cronus Zen Studio</h3>
                  <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                    <li>Download Cronus Zen Studio from the official Cronus website</li>
                    <li>Run the installer and follow the on-screen prompts</li>
                    <li>Launch Cronus Zen Studio after installation completes</li>
                    <li>If prompted, allow Windows firewall access</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Connect Your Cronus Zen</h3>
                  <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                    <li>Connect your Cronus Zen to your PC using a USB cable (use the PROG port)</li>
                    <li>Wait for Windows to recognize the device</li>
                    <li>The Cronus Zen Studio should automatically detect your device</li>
                    <li>If not detected, try a different USB port or cable</li>
                  </ol>
                  <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded p-3">
                    <p className="text-sm text-gray-700"><strong>⚠️ Important:</strong> Use the PROG port on the Cronus Zen for PC connection, not the console port.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Update Firmware (If Needed)</h3>
                  <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                    <li>In Cronus Zen Studio, check if a firmware update is available</li>
                    <li>If an update is available, click "Update Firmware"</li>
                    <li>Wait for the update to complete (do not disconnect during this process)</li>
                    <li>The device will restart automatically when done</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Load the Apollo Call of Duty Script</h3>
                  <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                    <li>In Cronus Zen Studio, click on the "Programmer" tab</li>
                    <li>Click "Open" and navigate to where you saved the Apollo script (.gpc file)</li>
                    <li>Select the Apollo_COD.gpc file</li>
                    <li>Click "Program Device" to load the script onto your Cronus Zen</li>
                    <li>Wait for the "Programming Complete" message</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Connect to Your Console/PC</h3>
                  <p className="text-gray-700 mb-3">Now you can disconnect from your PC and set up for gaming:</p>
                  <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                    <li>Disconnect the Cronus Zen from your PC</li>
                    <li>Connect your controller to the Cronus Zen (CONTROLLER port)</li>
                    <li>Connect the Cronus Zen to your console/PC (OUTPUT port)</li>
                    <li>Power on your controller and console</li>
                    <li>Launch Call of Duty</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Configure Script Settings</h3>
                  <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                    <li>In Call of Duty, go to a private match or firing range</li>
                    <li>Use the script's button combinations to access the settings menu</li>
                    <li>Calibrate the auto tracking and anti-recoil for your weapons</li>
                    <li>Adjust tracking speed and sensitivity settings to your preference</li>
                    <li>Save your configuration</li>
                  </ol>
                  <div className="mt-3 bg-blue-50 border border-blue-200 rounded p-3">
                    <p className="text-sm text-gray-700"><strong>💡 Tip:</strong> Detailed configuration instructions are included in your purchase email. Join our Discord for 1-on-1 setup help!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform-Specific Guides */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Platform-Specific Setup Notes</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 flex items-center gap-2">
                <span>🎮</span> PlayStation 5 / PS4
              </h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Make sure your DualSense/DualShock is fully charged</li>
                <li>On PS5, use the USB-C cable that came with your controller</li>
                <li>Enable "Communication with Cronus Zen" when prompted on PS5</li>
                <li>The PS button on your controller will work normally through the Cronus Zen</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 flex items-center gap-2">
                <span>🎮</span> Xbox Series X/S / Xbox One
              </h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Xbox controllers work wirelessly through the Cronus Zen</li>
                <li>Connect the Xbox Wireless Adapter to the Cronus Zen if using wireless</li>
                <li>For wired setup, use a USB cable from controller to Cronus Zen</li>
                <li>The Xbox button will function normally</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 flex items-center gap-2">
                <span>💻</span> PC (Steam)
              </h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Works with any controller (PS5, PS4, Xbox, etc.)</li>
                <li>Connect Cronus Zen to PC via USB</li>
                <li>Steam will recognize the controller automatically</li>
                <li>Configure Steam Input settings if needed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Troubleshooting Common Issues</h2>

          <div className="space-y-4">
            <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">Cronus Zen not detected by software</summary>
              <div className="mt-3 text-gray-700">
                <p className="mb-2">Try these solutions:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Use a different USB cable (data cable, not charging-only)</li>
                  <li>Try a different USB port on your PC</li>
                  <li>Restart Cronus Zen Studio</li>
                  <li>Reinstall the Cronus Zen drivers</li>
                </ul>
              </div>
            </details>

            <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">Script not working in-game</summary>
              <div className="mt-3 text-gray-700">
                <p className="mb-2">Check these items:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Verify the script was successfully programmed to the device</li>
                  <li>Make sure you're using the correct button combinations to activate features</li>
                  <li>Calibrate the auto-green feature in practice mode first</li>
                  <li>Check that your controller is properly connected</li>
                </ul>
              </div>
            </details>

            <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">Controller not responding</summary>
              <div className="mt-3 text-gray-700">
                <p className="mb-2">Solutions:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Ensure controller is connected to the CONTROLLER port</li>
                  <li>Check that the Cronus Zen is connected to the OUTPUT port on console</li>
                  <li>Power cycle everything (controller, Cronus Zen, console)</li>
                  <li>Make sure controller is charged/has batteries</li>
                </ul>
              </div>
            </details>

            <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">Auto tracking or anti-recoil not working accurately</summary>
              <div className="mt-3 text-gray-700">
                <p className="mb-2">Calibration tips:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Recalibrate in firing range with your exact weapon loadout</li>
                  <li>Adjust the tracking speed and recoil intensity in script settings</li>
                  <li>Make sure your in-game sensitivity matches script configuration</li>
                  <li>Different weapons require different anti-recoil profiles</li>
                </ul>
              </div>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-white p-8 rounded-lg text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Need Help With Setup?</h2>
          <p className="text-xl mb-6 opacity-90">
            Our support team is available 24/7 on Discord. We offer 1-on-1 setup calls to get you up and running perfectly!
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
              Buy Apollo Script - $60
            </Link>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What's Next?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/faq" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
              <div className="text-4xl mb-3">❓</div>
              <h3 className="font-bold text-gray-900 mb-2">View FAQ</h3>
              <p className="text-sm text-gray-600">Common questions answered</p>
            </Link>
            <Link to="/what-is-cod-zen-script" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-bold text-gray-900 mb-2">Learn More</h3>
              <p className="text-sm text-gray-600">Understanding Zen scripts</p>
            </Link>
            <a href="https://discord.gg/DkRgEDmP" target="_blank" rel="noopener noreferrer" className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-bold text-gray-900 mb-2">Get Support</h3>
              <p className="text-sm text-gray-600">Join our community</p>
            </a>
          </div>
        </section>

      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/cod-logo.png" alt="Call of Duty Zen Scripts Logo" className="h-10 mb-4" />
              <p className="text-sm text-gray-400">
                Premium Cronus Zen scripts for Call of Duty. Trusted by thousands.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/product" className="hover:text-white">Apollo Script</Link></li>
                <li><Link to="/setup-guide" className="hover:text-white">Setup Guide</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://discord.gg/DkRgEDmP" target="_blank" rel="noopener noreferrer" className="hover:text-white">Discord Community</a></li>
                <li><Link to="/setup-guide" className="hover:text-white">Installation Guide</Link></li>
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
              <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/visa.svg" alt="Visa Payment Method" className="h-6 border border-gray-600 rounded px-2 py-1 bg-white" />
              <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/mastercard.svg" alt="Mastercard Payment Method" className="h-6 border border-gray-600 rounded px-2 py-1 bg-white" />
              <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/american-express.svg" alt="American Express Payment Method" className="h-6 border border-gray-600 rounded px-2 py-1 bg-white" />
              <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/apm/paypal.svg" alt="PayPal Payment Method" className="h-6 border border-gray-600 rounded px-2 py-1 bg-white" />
              <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/wallets/apple-pay.svg" alt="Apple Pay Payment Method" className="h-6 border border-gray-600 rounded px-2 py-1 bg-white" />
              <img src="https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/wallets/google-pay.svg" alt="Google Pay Payment Method" className="h-6 border border-gray-600 rounded px-2 py-1 bg-white" />
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default SetupGuidePage
