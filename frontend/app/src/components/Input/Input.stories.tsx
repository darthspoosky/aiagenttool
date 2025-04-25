import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['input', 'textarea'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
    type: 'text',
  },
};

export const Email: Story = {
  args: {
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Password',
    type: 'password',
  },
};

export const Textarea: Story = {
  args: {
    as: 'textarea',
    placeholder: 'Multiline text...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};
