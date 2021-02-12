import React, { useState } from 'react'
import { Button, Modal, Dropdown, DropdownButton } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

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
				<DropdownItem>1</DropdownItem>
				<DropdownItem>2</DropdownItem>
				<DropdownItem>3</DropdownItem>
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
