// YourComponent.stories.ts|tsx
import favouriteIcon from '../assets/Favorite.svg'
import type { Meta, StoryObj } from '@storybook/react';

import Icon from "../components/Atoms/Favorite/Icon.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Component Library/Atoms/Icon',
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    favouriteicon: favouriteIcon,
    color: '#A8A29D'
  },
  name: 'Icon'
};
