// YourComponent.stories.ts|tsx
import favorite from '../../../assets/Favorite.svg';
import type { Meta, StoryObj } from '@storybook/react';

import Action from "./Action.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Action> = {
  component: Action,
};

export default meta;
type Story = StoryObj<typeof Action>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    favouriteicon: favorite
  },
};

