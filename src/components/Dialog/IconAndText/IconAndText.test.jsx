import { render, screen } from '@testing-library/react';
import IconAndText from './IconAndText';

test('renders text with icon', () => {
  render(<IconAndText icon="🔥" text="Hot" />);
  expect(screen.getByText('🔥')).toBeInTheDocument();
  expect(screen.getByText('Hot')).toBeInTheDocument();
});

test('renders text without icon', () => {
  render(<IconAndText text="Only Text" />);
  expect(screen.getByText('Only Text')).toBeInTheDocument();
});
