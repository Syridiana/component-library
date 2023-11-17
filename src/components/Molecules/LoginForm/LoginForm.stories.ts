// YourComponent.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from "./LoginForm.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    subheadcontent: 'Please complete Email and Password',
    emailtype: 'email',
    emaillabel: 'Email',
    passlabel: 'Password',
    passtype: 'password',
  },
};

