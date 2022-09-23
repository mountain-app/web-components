import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from '../src';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  it('should render a <button>', () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole('button');

    expect(button.textContent).toEqual('Default');
  });

  it('should have no axe violations', async () => {
    const { container } = render(<Button>Click here</Button>);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should preserve the "onClick" prop', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Noop</Button>);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
