// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import SecondaryText from "./SecondaryText.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SecondaryText> = {
  component: SecondaryText,
};

export default meta;
type Story = StoryObj<typeof SecondaryText>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    textnode: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor'
  },
};


