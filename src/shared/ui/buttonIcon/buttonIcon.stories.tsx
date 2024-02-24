import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageIcon from "../icons/ImageIcon";
import ButtonIcon from "./buttonIcon";
import AddIcon from "../icons/AddIcon";

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    onClick: { action: 'clicked' },
    classes: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => <ButtonIcon {...args} />;

export const ImageBtn = Template.bind({});
ImageBtn.args = {
  children: <ImageIcon fill={"#000"} />,
  classes: '',
};

export const AddBtn = Template.bind({});
AddBtn.args = {
  children: <AddIcon fill={'#000'} />,
  classes: '',
};


