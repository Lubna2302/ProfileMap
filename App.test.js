import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page text', () => {
  render(<App />);
  const linkElement = screen.getByText(/home page/i); // Update with your content
  expect(linkElement).toBeInTheDocument();
});
