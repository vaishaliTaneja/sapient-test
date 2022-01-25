import { render } from '@testing-library/react';
import React from 'react';
import { ProductState } from "../../../context/state";

import Cart from '../Cart';

describe('<Cart />', () => {
    test('should render correctly', ()=> {
        const appComponent = render(<ProductState><Cart /></ProductState>);
        expect(appComponent).toMatchSnapshot();
    })
})