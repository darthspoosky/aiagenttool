import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'color' },
  },
};
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const CustomColor: Story = {
  args: { color: '#dc2626' },
};
