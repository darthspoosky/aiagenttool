import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AnnouncementBar, { AnnouncementBarProps } from './AnnouncementBar';

const meta: Meta<typeof AnnouncementBar> = {
  title: 'Components/AnnouncementBar',
  component: AnnouncementBar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof AnnouncementBar>;

export const Info: Story = {
  args: {
    message: 'Welcome to PrepTalk! This is an info announcement.',
    variant: 'info',
  },
};

export const Success: Story = {
  args: {
    message: 'Your changes have been saved successfully!',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    message: 'Warning: Your session will expire soon.',
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    message: 'Error: Something went wrong!',
    variant: 'danger',
  },
};
