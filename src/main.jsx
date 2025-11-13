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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/what-is-cod-zen-script" element={<WhatIsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/setup-guide" element={<SetupGuidePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
