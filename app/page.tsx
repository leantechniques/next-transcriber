import type { Metadata } from 'next'

// Phase 4: Testing CI pipeline workflow execution
export const metadata: Metadata = {
  title: 'Home - Next Transcriber',
  description: 'Transcribe YouTube videos locally with Next Transcriber',
}

export default function Page() {
  // Test 1: Type error - this should fail type-check
  const x: string = 123

  return (
    <main>
      <h1>Welcome to Next Transcriber</h1>
      <p>Transcribe YouTube videos using local transcription libraries</p>
    </main>
  )
}
