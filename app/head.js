const siteUrl = 'https://r-d-experiment-client.vercel.app/'
const siteTitle = 'R-D Experiment: Pre-rendering vs Client-side Rendering Demo'
const siteDescription = 'This experiment demonstrates the differences between pre-rendering and client-side rendering using Next.js. This website is the client-side rendered version.'

export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}/images/nextjs3.avif`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="R-D Experiment preview image" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": siteTitle,
            "url": siteUrl,
            "logo": `${siteUrl}images/nextjs3.avif`,
            "sameAs": [
              "https://github.com/Jenelle0-0",
              "https://twitter.com/",
              "https://www.linkedin.com/",
              "https://www.instagram.com/",
              "https://www.facebook.com/"
            ]
          })
        }}
      />
    </>
  )
}
