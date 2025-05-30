import { render, screen } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

test('renders children inside ButtonGroup', () => {
  render(<ButtonGroup><div>Child</div></ButtonGroup>);
  expect(screen.getByText('Child')).toBeInTheDocument();
});
