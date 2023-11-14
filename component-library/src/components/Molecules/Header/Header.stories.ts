// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Header from "./Header.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    primary: true,
    children: 'LOG IN'
  },
};

