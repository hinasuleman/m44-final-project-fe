import { useState } from "react";
import "./userprofilePage.css";
import DeleteUserModal from '../../components/modals/deleteusermodal/DeleteUserModal'

export default function UserprofilePage() {
  const [currentEmail, setCurrentEmail] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  function changehandler(event, setter, state) {
    setter(event.target.value)
    console.log(state)

  }
  function submitHandler1(event) {
    event.preventDefault()
    console.log("userprofile functionality");
  }
  function submitHandler2(event) {
    event.preventDefault()
    console.log("userprofile functionality");
  }

  return (
    <div className="userprofile">

      {/* imagetag */}
      <form onSubmit={(event) => submitHandler1(event)}>
        <input placeholder="current email" onChange={(event) => changehandler(event, setCurrentEmail, currentEmail)} />
        <input placeholder="new email" onChange={(event) => changehandler(event, setNewEmail, newEmail)} />
        <button type="submit">Update email!</button>
      </form>
      <form onSubmit={(event) => submitHandler2(event)}>
        <input placeholder="current password" onChange={(event) => changehandler(event, setCurrentPassword, currentPassword)} />
        <input placeholder="new password" onChange={(event) => changehandler(event, setNewPassword, newPassword)} />
        <button type="submit">Update password</button>
        <br></br>
        <div>
          <button type="submit" onClick={toggleDeleteModal}>Delete user</button>
        </div>
      </form>
      <div>
        {showDeleteUserModal && <DeleteUserModal />}
      </div>
    </div>
  );
}

export default UserprofilePage;
