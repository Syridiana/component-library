// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Button from "./Button.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    //👇 The args you need here will depend on your component
    primary: 1,
    textnode: 'LOG IN'
  },
};



export const SecondaryButton: Story = {
  args: {
    //👇 The args you need here will depend on your component
    primary: 0,
    textnode: 'SIGN UP'
  },
};
