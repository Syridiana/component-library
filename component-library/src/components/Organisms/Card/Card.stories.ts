// YourComponent.stories.ts|tsx
import avatar from '../../../assets/avatar.png';
import hero from '../../../assets/hero.png';
import favoriteIcon from '../../../assets/Favorite.svg';
import type { Meta, StoryObj } from '@storybook/react';

import Card from "./Card.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    avatar: avatar,
    titleContent: 'Headline 5',
    subheadContent: 'Subtitle',
    hero: hero,
    secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor',
    icon: favoriteIcon
  },
};

