import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Movie',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return <>{children}</>
}
