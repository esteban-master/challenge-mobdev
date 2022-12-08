import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App';

describe('App test', () => {
  test('Render app', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /challenge mobdev/i })).toBeDefined()
    expect(screen.getByRole('heading', { name: /dog api/i })).toBeDefined()
  })
})