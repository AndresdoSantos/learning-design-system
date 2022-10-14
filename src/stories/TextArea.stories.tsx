import type { StoryObj, Meta } from '@storybook/react'
import { TextArea, ITextAreaProps, Box, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ITextAreaProps>

export const Primary: StoryObj<ITextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<ITextAreaProps> = {
  args: {
    disabled: true,
  },
}
