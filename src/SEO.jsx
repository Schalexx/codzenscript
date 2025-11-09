import { useEffect } from 'react'

function SEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl
}) {
  useEffect(() => {
    // Update document title if provided
    if (title) {
      document.title = title
    }
  }, [title])

  // SEO is primarily handled in index.html
  // This component allows for dynamic page titles on sub-pages
  return null
}

export default SEO
