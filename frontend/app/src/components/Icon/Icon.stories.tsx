import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['check', 'close', 'info', 'warning', 'user', 'edit', 'delete'],
    },
    size: { control: 'number' },
    color: { control: 'color' },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Check: Story = {
  args: { name: 'check' },
};
export const Close: Story = {
  args: { name: 'close', color: '#dc2626' },
};
export const Info: Story = {
  args: { name: 'info', color: '#2563eb' },
};
export const Warning: Story = {
  args: { name: 'warning', color: '#f59e42' },
};
export const User: Story = {
  args: { name: 'user', color: '#16a34a' },
};
export const Edit: Story = {
  args: { name: 'edit', color: '#a21caf' },
};
export const Delete: Story = {
  args: { name: 'delete', color: '#b91c1c' },
};
