import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Profile({ setModalOpen }) {
  return (
    <div
      className="profile-icon"
      onClick={e => {
        e.preventDefault();
        setModalOpen(true);
      }}
    >
      <FontAwesomeIcon icon={faUserCircle} />
      <NotificationIcon number={5} />
    </div>
  );
}

function NotificationIcon({ number }) {
  return <span className="notify">{number}</span>;
}

export default Profile;
