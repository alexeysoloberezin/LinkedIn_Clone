import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavList from './navList';

// This is the metadata for the component
export default {
  title: 'Components/NavList',
  component: NavList,
} as ComponentMeta<typeof NavList>;

// Template for the default view of the component
const Template: ComponentStory<typeof NavList> = (args) => <NavList {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  items: [
    { icon: 'home', label: 'Home' },
    { icon: 'jobs', label: 'Jobs' },
    { icon: 'messages', label: 'Messages' },
    { icon: 'network', label: 'Network' },
    { icon: 'notify', label: 'Notify' },
  ],
  notifications: 3,
};
