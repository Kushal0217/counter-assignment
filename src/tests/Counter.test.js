import { render, screen, fireEvent } from '@testing-library/react';
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterElement = screen.getByText('Counter');
  expect(counterElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  const countValue = screen.getByTestId('count');

  fireEvent.click(incrementButton);
  expect(countValue).toHaveTextContent('1');

  fireEvent.click(incrementButton);
  expect(countValue).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  const countValue = screen.getByTestId('count');

  fireEvent.click(decrementButton);
  expect(countValue).toHaveTextContent('-1');

  fireEvent.click(decrementButton);
  expect(countValue).toHaveTextContent('-2');
});
