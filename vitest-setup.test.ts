import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

describe('TC-002: Vitest Configuration', () => {
  it('should load vitest.config.ts successfully', () => {
    const configPath = resolve(process.cwd(), 'vitest.config.ts')
    const configContent = readFileSync(configPath, 'utf-8')

    expect(configContent).toContain('defineConfig')
    expect(configContent).toContain('jsdom')
    expect(configContent).toContain('@vitejs/plugin-react')
  })

  it('should have path alias configured', () => {
    const configPath = resolve(process.cwd(), 'vitest.config.ts')
    const configContent = readFileSync(configPath, 'utf-8')

    expect(configContent).toContain('@')
    expect(configContent).toContain('resolve')
  })

  it('should have jsdom environment configured', () => {
    const configPath = resolve(process.cwd(), 'vitest.config.ts')
    const configContent = readFileSync(configPath, 'utf-8')

    expect(configContent).toContain('environment')
    expect(configContent).toContain('jsdom')
  })
})
