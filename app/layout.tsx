import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Nihal Machhi',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: '#0d0d0d', minHeight: '100vh' }}>
        <CustomCursor />
        {/*
          Navbar already renders its own 72px height spacer div inside itself
          so <main> needs NO paddingTop — the spacer is already in the flow.
        */}
        <Navbar />
        <main style={{
          background: '#0d0d0d',
          minHeight: 'calc(100vh - 72px)',
          /* No paddingTop here — Navbar spacer handles it */
        }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}