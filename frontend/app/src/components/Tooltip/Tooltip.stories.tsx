import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import React from 'react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    content: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    content: 'Tooltip on top',
    position: 'top',
    children: <button>Hover me</button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    position: 'bottom',
    children: <button>Hover me</button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    position: 'left',
    children: <button>Hover me</button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    position: 'right',
    children: <button>Hover me</button>,
  },
};
