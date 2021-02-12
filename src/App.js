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

			<Modal
				animation={false}
				show={showModal}
				onHide={handleClose}
				backdrop="static"
			>
				<Modal.Header>Hiya!</Modal.Header>
				<Modal.Body>
					<Button onClick={handleClose}>Close</Button>
				</Modal.Body>
			</Modal>
		</div>
	)
}

export default App
