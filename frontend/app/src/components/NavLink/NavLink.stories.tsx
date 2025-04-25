import type { Meta, StoryObj } from '@storybook/react';
import { NavLink } from './NavLink';

const meta: Meta<typeof NavLink> = {
  title: 'Components/NavLink',
  component: NavLink,
  tags: ['autodocs'],
  argTypes: {
    to: { control: 'text' },
    active: { control: 'boolean' },
    children: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    to: '#',
    children: 'Home',
    active: false,
  },
};

export const Active: Story = {
  args: {
    to: '#',
    children: 'Dashboard',
    active: true,
  },
};
