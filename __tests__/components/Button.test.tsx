import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import { Button } from '../../src/components';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  it('should not have axe violations', async () => {
    const { container } = render(<Button>Button</Button>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
