// YourComponent.stories.ts|tsx
import favorite from '../assets/Favorite.svg';
import type { Meta, StoryObj } from '@storybook/react';

import Action from "../components/Molecules/Action/Action.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Action> = {
  title: 'Component Library/Molecules/Action',
  component: Action,
};

export default meta;
type Story = StoryObj<typeof Action>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    favouriteicon: favorite
  },
  name: 'Action'
};

