import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from './avatar';

// Here we define the metadata for the component in Storybook
export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: { type: 'text' },
    },
    classes: {
      control: { type: 'text' },
    },
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Avatar>;

// Template for the default view of the component
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

// Default story for the Avatar
export const Default = Template.bind({});
Default.args = {
  src: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
  alt: 'User avatar',
  status: "HRing",
  classes: '',
  size: '30',
};


