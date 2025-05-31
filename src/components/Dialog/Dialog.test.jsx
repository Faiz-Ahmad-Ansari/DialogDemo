import { render } from '@testing-library/react';
import Dialog from './Dialog';

describe('Dialog', () => {
  it('does not render when isOpen is false', () => {
    const { container } = render(<Dialog isOpen={false} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders header, content, and footer when open', () => {
    const { getByText } = render(
      <Dialog
        isOpen={true}
        onClose={() => {}}
        header={{
          title: 'Test Dialog',
          icon: '💬',
          buttons: [<button key="x">X</button>]
        }}
        content={<p>Hello Dialog</p>}
        footer={{
          info: 'Footer Info',
          buttons: [<button key="close">Close</button>]
        }}
      />
    );

    expect(getByText('Test Dialog')).toBeInTheDocument();
    expect(getByText('Hello Dialog')).toBeInTheDocument();
    expect(getByText('Footer Info')).toBeInTheDocument();
    expect(getByText('Close')).toBeInTheDocument();
  });
});
