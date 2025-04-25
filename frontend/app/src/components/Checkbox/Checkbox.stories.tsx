import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'I agree to terms',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};
