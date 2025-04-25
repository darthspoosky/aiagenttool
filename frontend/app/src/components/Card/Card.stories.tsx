import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined'],
    },
    children: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a default card.',
    variant: 'default',
  },
};

export const Elevated: Story = {
  args: {
    children: 'This is an elevated card.',
    variant: 'elevated',
  },
};

export const Outlined: Story = {
  args: {
    children: 'This is an outlined card.',
    variant: 'outlined',
  },
};
