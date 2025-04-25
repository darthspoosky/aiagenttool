import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Option 1',
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
