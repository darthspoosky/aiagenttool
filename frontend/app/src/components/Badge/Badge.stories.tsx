import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning'],
    },
    children: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    color: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    color: 'danger',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    color: 'warning',
  },
};
