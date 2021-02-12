import React, { useState } from 'react'
import { Button, Modal, Dropdown } from 'react-bootstrap'

const App = () => {
	const [showModal, setShowModal] = useState(false)

	const handleClose = () => setShowModal(false)
	const handleShow = () => setShowModal(true)

	return (
		<div>
			<h1>Dropdown Test</h1>
			<Button onClick={handleShow}>Open Modal</Button>

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
