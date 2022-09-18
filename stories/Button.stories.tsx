import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Icon } from '../src';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    leadingIcon: {
      options: Object.values(Icon),
      control: { type: 'select' },
    },
    trailingIcon: {
      options: Object.values(Icon),
      control: { type: 'select' },
    },
  },
};

export default meta;

const DefaultButton: Story = (args) => <Button {...args}>Default</Button>;
export const Default = DefaultButton.bind({
  variant: 'secondary-light',
});

const PillButton: Story = (args) => (
  <Button {...args} sx="rounded-full">
    Pill
  </Button>
);
export const Pill = PillButton.bind({});
