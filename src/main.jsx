import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ProductPage from './ProductPage.jsx'
import WhatIsPage from './WhatIsPage.jsx'
import FAQPage from './FAQPage.jsx'
import SetupGuidePage from './SetupGuidePage.jsx'
import ThankYouPage from './ThankYouPage.jsx'
import TermsPage from './TermsPage.jsx'
import PrivacyPage from './PrivacyPage.jsx'
import RefundPage from './RefundPage.jsx'
import ScrollToTop from './ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/what-is-cod-zen-script" element={<WhatIsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/setup-guide" element={<SetupGuidePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/refund-policy" element={<RefundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
