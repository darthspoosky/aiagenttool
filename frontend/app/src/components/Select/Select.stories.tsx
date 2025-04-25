import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const options = [
  { value: '', label: 'Choose an option' },
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options,
    label: 'Fruit',
  },
};

export const Disabled: Story = {
  args: {
    options,
    label: 'Fruit',
    disabled: true,
  },
};
