import React from 'react';
import { render } from 'react-native-testing-library';
import App from './App';

describe('Testing "App"', () => {
	it('should render', () => {
		render(<App />);
	});
});
