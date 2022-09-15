import { render, screen } from '@testing-library/react';
import DatePanel from './DatePanel';

test('renders learn react link', () => {
  render(<DatePanel />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
