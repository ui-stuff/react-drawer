import React from 'react'
import { DrawerProps } from './Drawer.types'
import './Drawer.css'

const Drawer = ({ children }: DrawerProps) => {
    return <div className={'drawer'}>test{children}</div>
}

export default Drawer
