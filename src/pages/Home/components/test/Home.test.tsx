import { describe, test, expect } from 'vitest'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Home from '../..';
import { DogContextProvider } from '../../../../context/dogContext';
import { data } from '../../../../mocks/data';

describe('Home test', () => {
  test('Render Home', async () => {
    const defaultBreed = 'bulldog'

    render(<DogContextProvider>
      <Home />
    </DogContextProvider>)
    
    expect(await screen.findByText(new RegExp(defaultBreed, 'i'))).toBeDefined()
    expect(await screen.findByRole('heading', { name: `${data.images[defaultBreed].message.length} imágenes`})).toBeDefined()
  })
  test('Search filter breed autocomplete', async () => {
    const user = userEvent.setup()

    render(<DogContextProvider>
      <Home />
    </DogContextProvider>)
    await user.type(await screen.findByLabelText(/razas/i), 'afri')
    await user.click(await screen.findByText(/african/i))

    expect(screen.getByRole('button', { name: 'African' })).toBeDefined()
  })
  test('Should show images african', async () => {
    const countPerPage = 10
    const user = userEvent.setup()
    
    render(<DogContextProvider>
      <Home />
    </DogContextProvider>)
    await user.click(within(screen.getByRole('button', { name: 'Bulldog'} )).getByTestId('CancelIcon'))

    await user.type(await screen.findByLabelText(/razas/i), 'afri')
    await user.click(await screen.findByText(/african/i))

    await waitFor(() => {
      expect(screen.getAllByText('Raza: African').length).toBe(countPerPage)
    })
  })
})