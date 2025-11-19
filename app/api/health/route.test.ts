import { describe, it, expect } from 'vitest'
import { GET } from './route'

describe('Health Check API', () => {
  it('should return 200 OK status', async () => {
    const response = await GET()
    expect(response.status).toBe(200)
  })

  it('should return JSON with status and timestamp', async () => {
    const response = await GET()
    const data = await response.json()

    expect(data).toHaveProperty('status')
    expect(data).toHaveProperty('timestamp')
    expect(data.status).toBe('ok')
  })

  it('should have valid ISO-8601 timestamp', async () => {
    const response = await GET()
    const data = await response.json()

    expect(data.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
    expect(() => new Date(data.timestamp)).not.toThrow()
  })

  it('should have application/json content-type header', async () => {
    const response = await GET()
    const contentType = response.headers.get('content-type')

    expect(contentType).toContain('application/json')
  })
})
