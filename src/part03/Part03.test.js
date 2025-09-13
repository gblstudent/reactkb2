import { render, screen, within , waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Parent03 from './Parent03';
import ChildCom03 from './ChildCom03';

describe('Component3 Testing : ', () => {

    test('Parent Text should update', async () => {
        var testPhrase = "test1";
        render(<Parent03 />);
        
        const inputElement = screen.getByTestId('inp1');
        await userEvent.type(inputElement, testPhrase);

        await waitFor(() => expect(screen.getByTestId("span1")).toHaveTextContent(testPhrase) );
    });

    test('Child Text should update', async () => {
        var testPhrase = "test123";
        render(<ChildCom03 pval={testPhrase} />);
        
        await waitFor(() => expect(screen.getByTestId("chspan1")).toHaveTextContent(testPhrase) );
    });

    test('Child text should update from Parent', async () => {
        var testPhrase = "testAbc";
        render(<Parent03 />);
        
        const inputElement = screen.getByTestId('inp1');
        await userEvent.type(inputElement, testPhrase);

        await waitFor(() => expect(screen.getByTestId("chspan1")).toHaveTextContent(testPhrase) );
    });

});