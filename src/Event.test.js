import { fireEvent, render, screen } from '@testing-library/react';
import Event from './Event';

test('renders learn react link', () => {
  render(<Event />);
  const linkElement = screen.getByText(50.00);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
    render(<Event />);
    const lookCap = screen.getByText("Capacity");
    expect(lookCap).toBeInTheDocument();
  });

test('test click button', () => {
    render(<Event />);
    const button = screen.getByRole('pricebtn');
    fireEvent.click(button);

    const linkElement = screen.getByText(100.00);
  });
