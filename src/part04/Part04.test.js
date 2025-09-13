import { render, screen, within , waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Parent04 from './Parent04';

describe('Child to Parent Testing : ', () => {

    test('Child Text should update', async () => {
        var testPhrase = "test1";
        render(<Parent04 />);
        
        const inputElement = screen.getByTestId('inp1');
        await userEvent.type(inputElement, testPhrase);

        await waitFor(() => expect(screen.getByTestId("span1")).toHaveTextContent(testPhrase) );
    });

    test('parent Text should update', async () => {
        var testPhrase = "test2";
        render(<Parent04 />);
        
        const inputElement = screen.getByTestId('inp1');
        await userEvent.type(inputElement, testPhrase);

        await waitFor(() => expect(screen.getByTestId("parentspan1")).toHaveTextContent(testPhrase) );
    });
    

});