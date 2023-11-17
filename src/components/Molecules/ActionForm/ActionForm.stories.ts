// YourComponent.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import ActionForm from "./ActionForm.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ActionForm> = {
  component: ActionForm,
};

export default meta;
type Story = StoryObj<typeof ActionForm>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    primarybtn: 1,
    textnodebtn: 'LOG IN',
    primary: 0,
    textnode: 'SIGN UP',
  },
};

