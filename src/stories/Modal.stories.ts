// YourComponent.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import Modal from "./Modal.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    titlecontent: 'Welcome Back',
    primarybtn: 1,
    textnodebtn1: 'LOG IN',
    primary: 0,
    textnodebtn2: 'SIGN UP',
    subheadcontent: 'Please complete Email and Password',
    emaillabel: 'Email',
    passlabel: 'Password',
  },
};


