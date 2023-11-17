// YourComponent.stories.ts|tsx
import avatar from './avatar.png'
import type { Meta, StoryObj } from '@storybook/react';

import Avatar from "./Avatar.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    avatar: avatar
  },
};

