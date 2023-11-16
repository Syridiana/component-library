// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Subhead from "./Subhead.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Subhead> = {
  component: Subhead,
};

export default meta;
type Story = StoryObj<typeof Subhead>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    textnode: 'Headline 5'
  },
};


