import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';
import { Box } from '../src';

expect.extend(toHaveNoViolations);

describe('Box', () => {
  it('should render a <div>', () => {
    const style = 'bg-red-5 p-5';

    render(<Box sx={style}>Box</Box>);
    const div = screen.getByRole('none');

    expect(div.textContent).toEqual('Box');
    expect(div.className).toEqual(style);
  });

  it('should have no axe violations', async () => {
    const { container } = render(<Box>Box</Box>);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
