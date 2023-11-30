// YourComponent.stories.ts|tsx
import avatar from '../assets/avatar.png'
import type { Meta, StoryObj } from '@storybook/react';

import Avatar from "../components/Atoms/Avatar/Avatar.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Component Library/Atoms/Avatar',
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    avatar: avatar
  },
  name: 'Avatar'
};

