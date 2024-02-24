import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarList from "./avatarList";

// Here we define the metadata for the component in Storybook
export default {
  title: 'Components/AvatarList',
  component: AvatarList,
  argTypes: {
    size: {
      control: { type: 'text' },
    },
    classes: {
      control: { type: 'text' },
    },
    items: {
      control: { type: 'object' },
    },
  },
} as ComponentMeta<typeof AvatarList>;

// Template for the default view of the component
const Template: ComponentStory<typeof AvatarList> = (args) => <AvatarList {...args} />;

// Default story for the Avatar
export const Default = Template.bind({});
Default.args = {
  items: [
    { src: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png' },
    { src: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png' },
    { src: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png' },
    { src: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png' },
  ]
};


