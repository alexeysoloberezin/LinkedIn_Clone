import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BtnAction from './btnAction';
import LikeIcon from "../icons/LikeIcon";
import CommentIcon from "../icons/CommentIcon";
import RepostIcon from "../icons/RepostIcon";
import SendIcon from "../icons/SendIcon";


export default {
  title: 'Components/BtnAction',
  component: BtnAction,
  argTypes: {
    onClick: { action: 'clicked' },
    width: {control: 'text'}
  },
} as ComponentMeta<typeof BtnAction>;

const Template: ComponentStory<typeof BtnAction> = (args) => <BtnAction {...args} />;

export const LikeButton = Template.bind({});
LikeButton.args = {
  label: 'Like',
  width: 'w-fit',
  Icon: <LikeIcon />,
};

export const CommentButton = Template.bind({});
CommentButton.args = {
  label: 'Comment',
  width: 'w-fit',
  Icon: <CommentIcon />,
};

export const RepostButton = Template.bind({});
RepostButton.args = {
  label: 'Repost',
  width: 'w-fit',
  Icon: <RepostIcon />,
};

export const SendButton = Template.bind({});
SendButton.args = {
  label: 'Send',
  width: 'w-fit',
  Icon: <SendIcon />,
};
