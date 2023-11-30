// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Subheadline from "../components/Atoms/Subhead/Subhead.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Subheadline> = {
  component: Subheadline,
  title: 'Component Library/Atoms/Subheadline',
};

export default meta;
type Story = StoryObj<typeof Subheadline>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    textnode: 'Headline 5'
  },
  name: 'Subheadline'
};


