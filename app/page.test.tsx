import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import Page from './page'

describe('Home Page', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render without crashing (TC-005)', () => {
    expect(() => render(<Page />)).not.toThrow()
  })

  it('should contain a main landmark for accessibility (TC-006)', () => {
    render(<Page />)
    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()
  })

  it('should display welcome content (TC-007)', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Next Transcriber|Welcome/i)
  })
})
