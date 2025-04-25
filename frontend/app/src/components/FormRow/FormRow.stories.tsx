import type { Meta, StoryObj } from '@storybook/react';
import { FormRow } from './FormRow';
import React from 'react';

const meta: Meta<typeof FormRow> = {
  title: 'Components/FormRow',
  component: FormRow,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof FormRow>;

export const Default: Story = {
  render: (args) => (
    <FormRow {...args} htmlFor="input-id">
      <input id="input-id" type="text" />
    </FormRow>
  ),
  args: {
    label: 'Label',
    error: '',
  },
};

export const WithError: Story = {
  render: (args) => (
    <FormRow {...args} htmlFor="input-id">
      <input id="input-id" type="text" />
    </FormRow>
  ),
  args: {
    label: 'Label',
    error: 'This field is required.',
  },
};
