import { render } from '@testing-library/react';
import Content from './Content';

describe('Content', () => {
  it('renders children in dialog-content container', () => {
    const { getByText, container } = render(<Content><p>Hello World</p></Content>);
    expect(getByText('Hello World')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('dialog-content');
  });
});
