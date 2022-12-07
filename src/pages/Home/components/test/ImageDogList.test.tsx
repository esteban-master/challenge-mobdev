import { describe, test, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import ImagesDogList from '../ImagesDogList'
import { DogContextProvider } from '../../../../context/dogContext'
import userEvent from '@testing-library/user-event';

describe('ImagesDogList test', () => {
  test('Change page', async () => {
    const user = userEvent.setup()
    render(<DogContextProvider>
      <ImagesDogList />
    </DogContextProvider>)

    const buttonPageTwo = await screen.findByRole('button', { name: /2/i })
    await user.click(buttonPageTwo)

    expect(screen.getByText(/página 2/i)).toBeDefined()
    
    const buttonPageFive = await screen.findByRole('button', { name: /5/i })
    await user.click(buttonPageFive)
    expect(screen.getByText(/página 5/i)).toBeDefined()
  })
})