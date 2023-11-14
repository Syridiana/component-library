// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import InputComponent from "./InputComponent.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof InputComponent> = {
  component: InputComponent,
};

export default meta;
type Story = StoryObj<typeof InputComponent>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    type: 'email',
    label: 'Email'
  },
};


