import type { StoryObj, Meta } from '@storybook/react'
import { Button, IButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    disabled: false,
    children: 'Send',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<IButtonProps>

export const Primary: StoryObj<IButtonProps> = {}

export const Secondary: StoryObj<IButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<IButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<IButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<IButtonProps> = {
  args: {
    children: (
      <>
        Next step
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<IButtonProps> = {
  args: {
    disabled: true,
  },
}
