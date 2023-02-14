import React from "react"
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './DeleteUserModal.css'
import { deleteUser } from "../../../utilities/utilities";

const DeleteUserModal = () => {
  const [currentEmail, setCurrentEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName,setUserName] = useState ("")
  const [show,setShow] = useState (false)
  console.log("deleteuser functionality");
  const handleClose = () => {
    setShow (false)
  deleteUser(userName,currentEmail,password)
  }


  function changehandler(event, setter, state) {
    setter(event.target.value)
    console.log(state)
  }

  function submitHandler1(event) {
    event.preventDefault()
    console.log("deleteuser functionality");
    setShow(true)

  }


  return (
    <div className="deleteuserprofile">
      <form className="deleteForm" onSubmit={(event) => submitHandler1(event)}>
        <input placeholder="current email" onChange={(event) => setCurrentEmail(event.target.value)} />
        <input placeholder="password" onChange={(event) => setPassword(event.target.value)} />
        <input placeholder="username" onChange={(event) => setUserName(event.target.value)} />
        <br></br>
        <button type="submit">Hello I am the delete modal button</button>
        </form>


      <div>
        <Modal show={show} >
          <Modal.Header closeButton>
            <Modal.Title>Delete Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body><div className="alert alert-danger">
            {'Are you sure you want to delete your account? Enter details to confirm'}
          </div></Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}
export default DeleteUserModal;