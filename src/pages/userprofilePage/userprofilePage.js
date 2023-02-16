import { useState } from "react";
import "./userprofilePage.css";
import DeleteUserModal from "../../components/modals/deleteusermodal/DeleteUserModal";
import user from "../../../src/images/icons/user.png";

function UserprofilePage() {
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showDeleteUserModal, setDeleteUserModal] = useState(false);

  const toggleDeleteModal = () => {
    setDeleteUserModal(true);
  };

  function changehandler(event, setter, state) {
    setter(event.target.value);
    console.log(state);
  }
  function submitHandler1(event) {
    event.preventDefault();
    console.log("userprofile functionality");
  }
  function submitHandler2(event) {
    event.preventDefault();
    console.log("userprofile functionality");
  }

  return (
    <div className="userprofile_container">
      <form onSubmit={(event) => submitHandler1(event)}>
        <input
          id="currentEmailBox1"
          placeholder="current email"
          onChange={(event) =>
            changehandler(event, setCurrentEmail, currentEmail)
          }
        />
        <input
          id="newEmailBox"
          placeholder="new email"
          onChange={(event) => changehandler(event, setNewEmail, newEmail)}
        />
        <button id="updateEmailBtn" type="submit">
          Update email
        </button>
      </form>
      <form onSubmit={(event) => submitHandler2(event)}>
        <input
          id="currentPasswordBox1"
          placeholder="current password"
          onChange={(event) =>
            changehandler(event, setCurrentPassword, currentPassword)
          }
        />
        <input
          id="newPasswordBox"
          placeholder="new password"
          onChange={(event) =>
            changehandler(event, setNewPassword, newPassword)
          }
        />
        <button id="updatePasswordBtn" type="submit">
          Update password
        </button>
        <br></br>
        <div>
          <button id="deleteUserBtn" type="submit" onClick={toggleDeleteModal}>
            Delete user
          </button>
        </div>
      </form>
      <div>{showDeleteUserModal && <DeleteUserModal />}</div>
      <div className="box2">
        <img src={user} alt="" />
      </div>
    </div>
  );
}

export default UserprofilePage;
