// YourComponent.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import ActionForm from "../components/Molecules/ActionForm/ActionForm.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ActionForm> = {
  component: ActionForm,
  title: 'Component Library/Molecules/ActionForm',
};

export default meta;
type Story = StoryObj<typeof ActionForm>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    primarybtn: 1,
    textnodebtn1: 'LOG IN',
    primary: 0,
    textnodebtn2: 'SIGN UP',
  },
  name: 'ActionForm'
};

