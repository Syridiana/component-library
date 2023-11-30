// YourComponent.stories.ts|tsx
import avatar from '../assets/avatar.png'
import type { Meta, StoryObj } from '@storybook/react';

import Header from "../components/Molecules/Header/Header.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Component Library/Molecules/Header',
};

export default meta;
type Story = StoryObj<typeof Header>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    avatar: avatar,
    titlecontent: 'Headline 5',
    subheadcontent: 'Subtitle'
  },
  name: 'Header'
};

