// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import TextInput from "../components/Atoms/Input/TextInput/TextInput.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: 'Component Library/Atoms/Input/Text',
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    type: 'email',
    label: 'Email'
  },
  name: 'Text'
};


