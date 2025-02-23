import { render, screen } from '@testing-library/react';
import App from './App';

test('renders company name', () => {
  render(<App />);
  const companyNameElement = screen.getByText(/Enoylity Media Creations Private Limited/i);
  expect(companyNameElement).toBeInTheDocument();
});