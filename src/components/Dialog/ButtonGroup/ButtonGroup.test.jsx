import { render } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

describe('ButtonGroup', () => {
  it('renders children inside a div with className "button-group"', () => {
    const { container, getByText } = render(
      <ButtonGroup>
        <button>One</button>
        <button>Two</button>
      </ButtonGroup>
    );
    expect(container.firstChild).toHaveClass('button-group');
    expect(getByText('One')).toBeInTheDocument();
    expect(getByText('Two')).toBeInTheDocument();
  });
});
