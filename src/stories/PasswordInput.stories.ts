// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import PasswordInput from "../components/Atoms/Input/Password/PasswordInput";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    label: 'Password',
  },
  argTypes: {
  }
};


