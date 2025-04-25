import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import React from 'react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
    title: { control: 'text' },
    dismissible: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Information',
    children: 'This is an info alert.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success',
    children: 'Operation completed successfully!',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    children: 'Be careful with this action.',
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
    title: 'Error',
    children: 'Something went wrong.',
  },
};

export const Dismissible: Story = {
  render: (args) => {
    const [visible, setVisible] = React.useState(true);
    return visible ? <Alert {...args} onClose={() => setVisible(false)} dismissible /> : null;
  },
  args: {
    type: 'info',
    title: 'Dismissible',
    children: 'You can close this alert.',
  },
};
