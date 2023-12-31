// YourComponent.stories.ts|tsx
import avatar from "../assets/avatar.png";
import hero from "../assets/hero.png";
import favoriteIcon from "../assets/Favorite.svg";
import type { Meta, StoryObj } from "@storybook/react";

import Card from "../components/Organisms/Card/Card.tsx";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Card> = {
  component: Card,
  title: "Component Library/Organisms/Card",
};

export default meta;
type Story = StoryObj<typeof Card>;

export const MediaCard: Story = {
  args: {
    //👇 The args you need here will depend on your component
    avatar: avatar,
    titlecontent: "Headline 5",
    subheadcontent: "Subtitle",
    hero: hero,
    secondarytext:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor",
    icon: favoriteIcon,
    btnOne: "Action 1",
    btnTwo: "Action 2",
  },
};

export const SimpleCard: Story = {
  args: {
    //👇 The args you need here will depend on your component
    avatar: avatar,
    titlecontent: "Headline 5",
    subheadcontent: "Subtitle",
    secondarytext:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor",
    icon: favoriteIcon,
    btnOne: "Action 1",
    btnTwo: "Action 2",
  },
};
