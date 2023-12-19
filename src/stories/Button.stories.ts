// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Button from "../components/Atoms/Button/Button.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Component Library/Atoms/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    //👇 The args you need here will depend on your component
    primary: 1,
    textnode: 'Log In'
  },
};



export const Secondary: Story = {
  args: {
    //👇 The args you need here will depend on your component
    primary: 0,
    textnode: 'Sign Up'
  },
};
