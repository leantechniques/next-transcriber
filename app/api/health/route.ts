import { NextResponse } from 'next/server'

interface HealthResponse {
  status: string
  timestamp: string
}

export async function GET(): Promise<NextResponse<HealthResponse>> {
  const response: HealthResponse = {
    status: 'ok',
    timestamp: new Date().toISOString()
  }

  return NextResponse.json(response)
}
