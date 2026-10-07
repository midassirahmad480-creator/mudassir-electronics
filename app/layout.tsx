import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Mudassir Electronics Repairing Shop | 24/7 Repair in Gilgit',
  description:
    '24/7 professional home appliances & electronics repairing in Gilgit. Shop visit, doorstep home service, or live video call guidance. Airport Road, Kashrote. Call 03469559167.',
  keywords: [
    'electronics repair Gilgit',
    'washing machine repair Gilgit',
    'LED TV repair',
    'UPS inverter repair',
    'home service Gilgit',
  ],
  icons: {
    icon: [{ url: '/mudassir-profile.jpg', type: 'image/jpeg' }],
    shortcut: '/mudassir-profile.jpg',
    apple: '/mudassir-profile.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1120',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
