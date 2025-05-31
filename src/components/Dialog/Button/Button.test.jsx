import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders child text', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('passes extra props to the button', () => {
    const { getByRole } = render(<Button type="submit" aria-label="submit">Send</Button>);
    const button = getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('aria-label', 'submit');
  });
});
