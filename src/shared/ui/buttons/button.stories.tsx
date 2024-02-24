import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    outlined: {
      control: { type: 'boolean' },
    },
    classes: {
      control: { type: 'text' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    variant: {
      type: 'select',
      options: ['primary', 'secondary'],
    },
    rounded: {
      type: 'select',
      options: ['full', 'md', 'lg', ''],
    },
    notifyCount: {
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary',
  rounded: 'md',
  classes: '',
  outlined: false,
  loading: false,
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary',
  classes: '',
  outlined: false,
  rounded: 'full',
  loading: false,
  variant: 'secondary',
};

