# react-drawer
React Drawer component


## Install

```bash
npm install --save @ui-stuff/react-drawer
```

## Usage

```tsx
import {Drawer} from "@ui-stuff/react-drawer"
import {useState} from "react"

const App = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button type={"button"} onClick={() => setIsOpen(true)}>Open</button>
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
                Some Content
            </Drawer>
        </>
    )
}

export default App

```

## API

| name          | type        | required | default | value                   | description                         |
|---------------|-------------|----------|---------|-------------------------|-------------------------------------|
| children      | `string`    | no       |         | ReactNode               | Content of the drawer               |
| isOpen        | `boolean`   | yes      | false   | true  \| false          | Show or hide the drawer             |
| onClose       | `function`  | yes      |         | any executable function | Function called to close the drawer |
| position      | `string`    | no       | "right" | "right" \| "left"       | Position of the drawer              |

