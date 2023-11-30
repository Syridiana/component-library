// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Title from "../components/Atoms/Title/Title.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Title> = {
  component: Title,
  title: 'Component Library/Atoms/Title',
  
};

export default meta;
type Story = StoryObj<typeof Title>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    textnode: 'Subtitle'
  },
  name: 'Title'
};


