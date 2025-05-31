import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders info and buttons if provided', () => {
    const { getByText } = render(
      <Footer
        info="Footer Info"
        buttons={[
          <button key="ok">OK</button>,
          <button key="cancel">Cancel</button>,
        ]}
      />
    );

    expect(getByText('Footer Info')).toBeInTheDocument();
    expect(getByText('OK')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
  });
});
