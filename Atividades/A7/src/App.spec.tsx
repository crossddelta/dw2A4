import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Component', () => {
    it('should render list items', () => {
        const{ getByText } = render(<App />)

        expect(getByText('Diego')).toBeInTheDocument();
        expect(getByText('Rodz')).toBeInTheDocument();
        expect(getByText('Mayk')).toBeInTheDocument();
    })

    it('should be able to add new item to the list', async () => {
        const { getByText, getByPlaceholderText } = render(<App />);

        const inputElement = getByPlaceholderText('Novo item');
        const addButton = getByText('Adicionar');

        await userEvent.type(inputElement, 'Novo')
        await userEvent.click(addButton)

        expect(getByText('Novo')).toBeInTheDocument();
    })
})