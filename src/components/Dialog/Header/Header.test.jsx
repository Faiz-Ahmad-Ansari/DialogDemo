import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders icon, title, and optional buttons', () => {
    const button = <button>Close</button>;
    const { getByText } = render(
      <Header title="My Title" icon="ℹ️" buttons={[button]} />
    );

    expect(getByText('My Title')).toBeInTheDocument();
    expect(getByText('ℹ️')).toBeInTheDocument();
    expect(getByText('Close')).toBeInTheDocument();
  });
});
