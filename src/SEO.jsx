import { Helmet } from 'react-helmet-async'

function SEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl
}) {
  const siteUrl = 'https://nba2kzenscripts.com'
  const defaultTitle = 'NBA 2K26 Zen Script | Premium Cronus Zen Scripts for NBA 2K26'
  const defaultDescription = 'Get the best NBA 2K26 Zen Scripts for Cronus Zen. Premium NBA 2K26 scripts with auto-greens, aimbot, and defensive assists. Dominate NBA 2K26 with our exclusive Zen scripts.'
  const defaultKeywords = 'NBA 2K26 Zen Script, NBA Zen Script, 2K26 Zen Script, Cronus Zen Script NBA, NBA 2K26 Scripts, Cronus Zen NBA 2K26, NBA 2K26 Aimbot, NBA 2K26 Auto Green'

  const pageTitle = title || defaultTitle
  const pageDescription = description || defaultDescription
  const pageKeywords = keywords || defaultKeywords
  const pageCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl
  const pageOgTitle = ogTitle || pageTitle
  const pageOgDescription = ogDescription || pageDescription
  const pageOgUrl = ogUrl ? `${siteUrl}${ogUrl}` : pageCanonical

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />

      {/* Open Graph */}
      <meta property="og:title" content={pageOgTitle} />
      <meta property="og:description" content={pageOgDescription} />
      <meta property="og:url" content={pageOgUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageOgTitle} />
      <meta name="twitter:description" content={pageOgDescription} />

      {/* Canonical */}
      <link rel="canonical" href={pageCanonical} />
    </Helmet>
  )
}

export default SEO
