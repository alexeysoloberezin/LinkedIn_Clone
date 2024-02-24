
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Search from './search';

export default {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Search...',
};

export const WithValue = Template.bind({});
WithValue.args = {
  ...Default.args,
  value: 'Initial text',
};
