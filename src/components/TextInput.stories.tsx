import { Meta, StoryObj } from '@storybook/react';
import { TextInputComp, TextInputProps, TextInputRootProps } from "./TextInput";
import { Envelope } from "phosphor-react";

export default {
  title: 'Components/TextInput',
  component: TextInputComp.Root,
  args: {
    children: [
      <TextInputComp.Icon >
        <Envelope />
      </TextInputComp.Icon>,
      <TextInputComp.Input placeholder='Type your email address' />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children:<TextInputComp.Input placeholder='Type your email address' />
  }
}