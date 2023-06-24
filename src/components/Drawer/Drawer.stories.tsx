import { Meta, StoryObj } from '@storybook/react'
import Drawer from './Drawer'

const meta: Meta<typeof Drawer> = {
    component: Drawer,
}
export default meta
type Story = StoryObj<typeof Drawer>

export const RightDrawer: Story = {
    args: {},
}

export const LeftDrawer: Story = {
    args: {},
}
