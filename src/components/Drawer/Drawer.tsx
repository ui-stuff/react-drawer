import React from 'react'
import { DrawerProps } from './Drawer.types'

const Drawer = ({ children }: DrawerProps) => {
    return (
        <div>{children}</div>
    )
}

export default Drawer
