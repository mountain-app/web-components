import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconButton } from '../src';

const meta: Meta = {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <IconButton {...args} icon="!" />;

export const Default = Template.bind({});

Default.args = {};
