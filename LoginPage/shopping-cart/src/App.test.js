import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './Login';
import * as test from "node:test";

test('renders learn react link', () => {
  render(<App />);
  render(<Login />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
