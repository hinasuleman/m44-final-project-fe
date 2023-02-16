import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./DeleteUserModal.css";
import { deleteUser } from "../../../utilities/userfunctions";

const DeleteUserModal = () => {
  const [currentEmail, setCurrentEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);
  console.log("deleteuser functionality");
  const handleClose = () => {
    setShow(false);
    deleteUser(userName, currentEmail, password);
  };

  function submitHandler1(event) {
    event.preventDefault();
    console.log("deleteuser functionality");
    setShow(true);
  }

  return (
    <div className="deleteuserprofile">
      <form className="deleteForm" onSubmit={(event) => submitHandler1(event)}>
        <input
          id="currentEmailBox"
          placeholder="current email"
          onChange={(event) => setCurrentEmail(event.target.value)}
        />
        <input
          id="currentPasswordBox"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          id="usernameBox"
          placeholder="username"
          onChange={(event) => setUserName(event.target.value)}
        />
        <br></br>
        <button id="deleteBtn" type="submit">
          Delete my account
        </button>
      </form>

      <div className="confirmDeleteBtn">
        <Modal show={show}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="reConfirmDeleteBtn">
              {"Are you sure you want to delete your account?"}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="Danger" onClick={handleClose}>
              Yes delete my account
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default DeleteUserModal;
