import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from './List'

describe('List Component', () => {
    it('should render list items', () => {
        const{ getByText } = render(<List initialItems={['Diego', 'Rodz', 'Mayk']} />)

        expect(getByText('Diego')).toBeInTheDocument();
        expect(getByText('Rodz')).toBeInTheDocument();
        expect(getByText('Mayk')).toBeInTheDocument();
    })

    it('should be able to add new item to the list', () => {
        const { getByText, getByPlaceholderText, findByText } = render(<List initialItems={[]} />);

        const inputElement = getByPlaceholderText('Novo item');
        const addButton = getByText('Adicionar');

        userEvent.type(inputElement, 'Novo');
        userEvent.click(addButton);

        waitFor( async () => {
            expect(await findByText('Novo')).toBeInTheDocument();
        })
    })

    it('should be able to add new item to the list', () => {
        const { getByText, getAllByText, getByPlaceholderText, findByText } = render(<List initialItems={['Diego']} />);

        const addButton = getByText('Adicionar');

        userEvent.click(addButton);
        const removeButtons = getAllByText('Remover');

        userEvent.click(removeButtons[0])

        waitFor( async () => {
            expect(await findByText('Diego')).not.toBeInTheDocument();
        })
    })
})