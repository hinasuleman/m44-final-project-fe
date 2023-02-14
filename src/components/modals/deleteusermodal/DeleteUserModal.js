import React from "react"
import { useState } from "react";
import { Modal, Button } from "react";

const DeleteUserModal = () => {
  console.log("deleteuser functionality");
}
return (
  <div className="deleteuserprofile">
    <form onSubmit={(event) => submitHandler1(event)}>
      <input placeholder="current email" onChange={(event) => changehandler(event, setCurrentEmail, currentEmail)} />
      <input placeholder="current password" onChange={(event) => changehandler(event, setCurrentPassword, currentPassword)} />
    </form>
    <br></br>
    <button>Delete user</button>
  </div>
)

export default DeleteUserModal;