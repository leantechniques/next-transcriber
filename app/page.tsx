import type { Metadata } from 'next'
import { NonExistent } from '@/fake-module'

export const metadata: Metadata = {
  title: 'Home - Next Transcriber',
  description: 'Transcribe YouTube videos locally with Next Transcriber',
}

export default function Page() {
  return (
    <main>
      <h1>Welcome to Next Transcriber</h1>
      <p>Transcribe YouTube videos using local transcription libraries</p>
    </main>
  )
}
