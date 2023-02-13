import React from "react"
import "./DeleteUserModal.css";
import { useState } from "react";
import {Modal, Button} from "react";

export default function UserprofilePage() {
    const [currentEmail, setCurrentEmail] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")

    function changehandler(event, setter, state) {
        setter(event.target.value)
        console.log(state)
    }
    function submitHandler1(event) {
      event.preventDefault()
      console.log("userprofile functionality");
    }
    return (
      <div className="userprofile"> 
          {/* imagetag */}
        <form onSubmit={(event) => submitHandler1(event)}>
          <input placeholder="current email" onChange={(event) => changehandler(event,setCurrentEmail,currentEmail)} />
          <input placeholder= "current password" onChange={(event) => changehandler(event,setCurrentPassword,currentPassword)} />
          </form>
          <br></br>

const DeleteConfirmation = ({showModal, hideModal, confirmModal, id, type, message}) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
            <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">{Are you sure you want to delete your account? Enter details to confirm}
</div></Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={() => confirmModal (type, id) }>
                Delete
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default DeleteConfirmation;