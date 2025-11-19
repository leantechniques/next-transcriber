import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next Transcriber',
  description: 'Transcribe YouTube videos using local transcription libraries',
  keywords: ['transcription', 'youtube', 'video', 'audio', 'local transcription'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
