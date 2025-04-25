import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    fallback: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: '',
    alt: 'User',
    fallback: 'U',
    size: 'md',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
    alt: 'John Doe',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    alt: 'Jane Doe',
    size: 'lg',
  },
};

export const SmallFallback: Story = {
  args: {
    fallback: 'A',
    size: 'sm',
  },
};
