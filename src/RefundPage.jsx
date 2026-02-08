import { Link } from 'react-router-dom'

function RefundPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">No Refund Policy</h2>
          <p className="text-gray-700 mb-4">
            Due to the digital nature of our Call of Duty Zen Script product, <strong>all sales are final and non-refundable</strong>. 
            Once you complete your purchase and receive access to the script files, downloads, and license information, we 
            cannot offer refunds, exchanges, or credits.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why No Refunds?</h2>
          <p className="text-gray-700 mb-4">
            Digital products like our Call of Duty Zen Script are delivered instantly upon purchase. Unlike physical goods, digital 
            files cannot be "returned" once accessed. To protect our intellectual property and prevent abuse, we maintain 
            a strict no-refund policy on all purchases.
          </p>
          <p className="text-gray-700 mb-4">
            This policy is clearly stated during the checkout process, and by completing your purchase, you acknowledge and 
            accept these terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Before You Purchase</h2>
          <p className="text-gray-700 mb-4">
            We strongly encourage you to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Review all product information, features, and system requirements carefully</li>
            <li>Watch demonstration videos and read customer testimonials</li>
            <li>Verify that you own a Cronus Zen device (required to use the script)</li>
            <li>Confirm that our Call of Duty Zen Script is compatible with your gaming platform</li>
            <li>Join our Discord server to ask questions before purchasing</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Our support team is available 24/7 via Discord to answer any pre-purchase questions and help you make an 
            informed decision.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Technical Support</h2>
          <p className="text-gray-700 mb-4">
            While we do not offer refunds, we are committed to ensuring your Call of Duty Zen Script works as intended. If you 
            experience technical issues, our support team will assist you with:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Installation and setup guidance</li>
            <li>Configuration and optimization for your specific setup</li>
            <li>Troubleshooting common issues</li>
            <li>Script updates and compatibility fixes</li>
          </ul>
          <p className="text-gray-700 mb-4">
            We offer lifetime technical support to all customers via our Discord community. Most setup issues can be 
            resolved within minutes with our 1-on-1 assistance.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Chargebacks</h2>
          <p className="text-gray-700 mb-4">
            Initiating a chargeback or dispute after receiving your Call of Duty Zen Script files is considered fraudulent and may 
            result in:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Immediate revocation of your license and access to the script</li>
            <li>Permanent ban from all our services and future purchases</li>
            <li>Reporting to fraud prevention networks</li>
            <li>Legal action to recover costs and damages</li>
          </ul>
          <p className="text-gray-700 mb-4">
            If you have concerns about your purchase, please contact our support team first. We are committed to resolving 
            issues fairly and promptly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Exceptions</h2>
          <p className="text-gray-700 mb-4">
            In rare cases, we may consider exceptions to this policy at our sole discretion, such as:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Duplicate purchases made by mistake (within 24 hours)</li>
            <li>Technical issues that prevent product delivery (not compatibility issues)</li>
            <li>Errors in pricing or product description (verified cases only)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Any refund requests must be submitted within 48 hours of purchase through our Discord support server. All 
            requests will be reviewed on a case-by-case basis, and our decision is final.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Acknowledgment</h2>
          <p className="text-gray-700 mb-4">
            By purchasing our Call of Duty Zen Script, you explicitly acknowledge that:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>You have read and understood this Refund Policy</li>
            <li>You accept that all sales are final and non-refundable</li>
            <li>You will not initiate chargebacks or payment disputes</li>
            <li>You will contact support for any issues before taking other action</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Support</h2>
          <p className="text-gray-700 mb-4">
            If you have questions about this Refund Policy or need assistance with your purchase, please reach out to our 
            support team via Discord. We're here to help ensure you have the best experience with our Call of Duty Zen Script.
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

export default RefundPage
