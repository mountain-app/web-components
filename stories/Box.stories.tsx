import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, Button, Icon, Symbol } from '../src';

const meta: Meta = {
  title: 'Components/Box',
  component: Box,
};

export default meta;

const Template: Story = (args) => (
  <Box {...args} sx="border border-white p-4 rounded-lg">
    <Symbol path={Icon.SUN} />
    <Box sx="ml-2 border rounded-lg p-5">
      <Button variant="secondary-light">Click me</Button>
    </Box>
  </Box>
);
export const Default = Template.bind({});
