import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Component2 from './Component2';

describe('Component2 Testing : ', () => {

    test('Empty string should not be added to the list', async () => {
        render(<Component2 />);
        
        const btnElement = screen.getByTestId('addBtn1');
        userEvent.click(btnElement)

        const listElement = screen.getByTestId('itemList1'); 
        const listItems = within(listElement).queryAllByRole('listitem');
        expect(listItems).toHaveLength(0);
    });

    test('String should be added to the list', async () => {
        var testPhrase = "test1";
        render(<Component2 />);
        
        const inputElement = screen.getByTestId('inp1');
        await userEvent.type(inputElement, testPhrase);

        const btnElement = screen.getByTestId('addBtn1');
        userEvent.click(btnElement)

        expect(screen.getByText(testPhrase)).toHaveAttribute('data-testid', 'list-item-0');
    });

});