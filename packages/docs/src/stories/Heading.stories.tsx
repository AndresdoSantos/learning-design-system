import type { StoryObj, Meta } from '@storybook/react'
import { Heading, IHeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Example title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<IHeadingProps>

export const Primary: StoryObj<IHeadingProps> = {}

export const CustomTag: StoryObj<IHeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the heading is always a `h2`, but we can change this with property `as`',
      },
    },
  },
}
