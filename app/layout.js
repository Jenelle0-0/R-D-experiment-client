import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

const siteUrl = 'https://r-d-experiment-client.vercel.app/'
const siteTitle = 'R-D Experiment: Pre-rendering vs Client-side Rendering Demo'
const siteDescription = 'This experiment demonstrates the differences between pre-rendering and client-side rendering using Next.js. This website is the client-side rendered version.'

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  viewport: 'width=device-width, initial-scale=1',
  other: {
    "google-site-verification": "oEKr8HfUMuU5I5jRnd7RnUfRIzFWHknTTUBVaiYn0jQ",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/images/nextjs3.avif`,
        width: 1200,
        height: 630,
        alt: 'R-D Experiment preview image',
      },
    ],
  },
}

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
