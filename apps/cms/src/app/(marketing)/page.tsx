import Link from 'next/link'

export default function CmsHomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: '#f3f4f6',
        color: '#111827',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        padding: '2rem',
      }}
    >
      <section
        style={{
          width: 'min(42rem, 100%)',
          borderRadius: '1rem',
          border: '1px solid #d1d5db',
          background: '#ffffff',
          padding: '2rem',
          boxShadow: '0 12px 40px rgba(17, 24, 39, 0.08)',
        }}
      >
        <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>Payload CMS</p>
        <h1 style={{ marginTop: '0.75rem', marginBottom: '0.75rem', fontSize: '2rem' }}>
          Backend is online.
        </h1>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Use the admin panel to manage categories and products. The Astro frontend consumes the public REST API.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/admin">Open admin</Link>
          <Link href="/api/products">Open products API</Link>
        </div>
      </section>
    </main>
  )
}
