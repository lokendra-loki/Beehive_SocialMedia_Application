import React from "react";
import "./deleteAlert.scss";

function DeleteAlert() {
  return (
    <div className="deleteAlertContainer">
      <span className="areYouSure">Are you sure ?</span>
      <div className="dacButton">
        <button className="dacYes">Yes</button>
        <button className="dacYes">No</button>
      </div>
    </div>
  );
}

export default DeleteAlert;
