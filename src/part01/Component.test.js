import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Component1 from './Component1';

describe('Component1 Testing : ', () => {

    test('should update input value when user types', async () => {
        var testPhrase = "test1";
        render(<Component1 />);
        
        const inputElement = screen.getByTestId('inp1');
        await userEvent.type(inputElement, testPhrase);

        expect(screen.getByText(testPhrase)).toHaveAttribute('data-testid', 'span1');
    });

});