import Head from 'next/head'

export default function SEO() {
  const site = 'https://acf.hardiksoni.dev/'
  const title = 'Hardik Soni — ACF Expert - Full‑Stack Developer'
  const desc = 'Portfolio of Hardik Soni: Wordpress Next.js, React, etc.'
  const preview = `${site}/preview.png`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hardik Soni",
    url: site,
    jobTitle: "Advanced Custom Fields (ACF) Developer",
    sameAs: ["https://github.com/hardiksdev/"]
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={preview} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Head>
  )
}
