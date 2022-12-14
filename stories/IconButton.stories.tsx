import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, IconButton } from '../src';

const meta: Meta = {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      options: Object.values(Icon),
      control: { type: 'select' },
    },
  },
};

export default meta;

const Template: Story = (args) => <IconButton icon={Icon.BOOKMARK} {...args} />;
export const Default = Template.bind({});
