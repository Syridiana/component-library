// YourComponent.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import Modal from "../components/Organisms/Modal/Modal.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Component Library/Organisms/Modal',
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    titlecontent: 'Welcome Back',
    primarybtn: 1,
    textnodebtn1: 'Log In',
    primary: 0,
    textnodebtn2: 'Sign Up',
    subheadcontent: 'Please complete Email and Password',
    emaillabel: 'Email',
    passlabel: 'Password',
  },
  name: 'Modal'
};


