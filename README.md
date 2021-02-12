## Describe the bug

I am having an issue with `react-bootstrap` Dropdowns/DropdownButtons in IE11. Everything seems to work fine opening and closing Dropdown buttons and menus normally. However, if you happen to have a Modal which you open and close, and then click on a Dropdown, the Dropdown will no longer open.

## To Reproduce

Open a Modal. Close a Modal. Then click on a Dropdown Menu.

### Dependencies

```
	"dependencies": {
		"bootstrap": "^4.6.0",
		"react": "^17.0.1",
		"react-app-polyfill": "^2.0.0",
		"react-bootstrap": "^1.4.3",
		"react-dom": "^17.0.1",
		"react-scripts": "^4.0.2"
	}
```

### index.js

```
import 'react-app-polyfill/ie11' // For IE 11 support
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
```

### App.js

```
import React, { useState } from 'react'
import { Button, Modal, DropdownButton, Dropdown } from 'react-bootstrap'
const App = () => {
	const [showModal, setShowModal] = useState(false)

	const handleClose = () => setShowModal(false)
	const handleShow = () => setShowModal(true)

	return (
		<div>
			<h1>Dropdown Test</h1>
			<Button onClick={handleShow}>Open Modal</Button>

			<DropdownButton
				id="dropdown-test"
				title="Dropdown Button"
				variant="secondary"
			>
				<Dropdown.Item>1</Dropdown.Item>
				<Dropdown.Item>2</Dropdown.Item>
				<Dropdown.Item>3</Dropdown.Item>
			</DropdownButton>

			<Modal show={showModal} onHide={handleClose} backdrop="static">
				<Modal.Header>Hiya!</Modal.Header>
				<Modal.Body>
					<Button onClick={handleClose}>Close</Button>
				</Modal.Body>
			</Modal>
		</div>
	)
}

export default App
```

Minimal example by using [CodeSandbox](https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic).

## Environment (please complete the following information)

- Operating System: Windows 10
- Browser - IE11
- React-Bootstrap Version 4.6.0

## Additional Information

After downgrading to react and react-dom to v16.14, I could then get the dropdown menus to open and close after opening/closing a modal.
