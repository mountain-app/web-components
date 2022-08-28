import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import { Spinner } from '../../src/components';
import { SpinnerProps } from '../../src/components/Spinner/Spinner.styles';

expect.extend(toHaveNoViolations);

describe('Spinner', () => {
  it('should not have axe violations', async () => {
    const { container } = render(<Spinner />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should respect size arguments', () => {
    const expectSize = (
      input: SpinnerProps['size'] | undefined,
      expectedSize: string
    ) => {
      const { container } = render(<Spinner size={input} />);
      const svg = container.querySelector('svg')!;
      expect(svg.getAttribute('width')).toEqual(expectedSize);
      expect(svg.getAttribute('height')).toEqual(expectedSize);
    };

    // default: medium
    expectSize(undefined, '32px');
    expectSize('small', '16px');
    expectSize('medium', '32px');
    expectSize('large', '64px');
  });
});
