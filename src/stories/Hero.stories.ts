// YourComponent.stories.ts|tsx
import hero from '../assets/hero.png'
import type { Meta, StoryObj } from '@storybook/react';

import Hero from "../components/Atoms/HeroImage/Hero.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Hero> = {
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    hero: hero
  },
};

