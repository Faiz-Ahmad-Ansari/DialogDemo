import { render } from '@testing-library/react';
import IconAndText from './IconAndText';

describe('IconAndText', () => {
  it('renders text and icon', () => {
    const { getByText, getByTestId } = render(
      <IconAndText icon={<span data-testid="icon">🔥</span>} text="Hot" />
    );
    expect(getByText('Hot')).toBeInTheDocument();
    expect(getByTestId('icon')).toBeInTheDocument();
  });

  it('renders text only if icon is not provided', () => {
    const { queryByTestId, getByText } = render(<IconAndText text="Text Only" />);
    expect(getByText('Text Only')).toBeInTheDocument();
    expect(queryByTestId('icon')).not.toBeInTheDocument();
  });
});
