import { render } from '@testing-library/react';
import React from 'react';
import { ProductState } from "../context/state";

import App from '../App';

describe('<App />', () => {
    test('should render correctly', ()=> {
        const appComponent = render(<ProductState><App /></ProductState>);
        expect(appComponent).toMatchSnapshot();
    })
})