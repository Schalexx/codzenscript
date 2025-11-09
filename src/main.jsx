import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import ProductPage from './ProductPage.jsx'
import WhatIsPage from './WhatIsPage.jsx'
import FAQPage from './FAQPage.jsx'
import SetupGuidePage from './SetupGuidePage.jsx'
import ThankYouPage from './ThankYouPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/what-is-nba-2k26-zen-script" element={<WhatIsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/setup-guide" element={<SetupGuidePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
