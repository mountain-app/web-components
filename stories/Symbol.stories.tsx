import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, Symbol } from '../src';

const meta: Meta = {
  title: 'Components/Symbol',
  component: Symbol,
  argTypes: {
    path: {
      options: Object.values(Icon),
      control: { type: 'select' },
    },
  },
};

export default meta;

const Template: Story = (args) => <Symbol path={Icon.BOOKMARK} {...args} />;
export const Default = Template.bind({});
