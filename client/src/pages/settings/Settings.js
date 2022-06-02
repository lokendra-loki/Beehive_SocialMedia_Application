import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import "./settings.scss";
import RightBar from "../../components/rightBar/RightBar";
import { AuthContext } from "../../context/authContext/AuthContext";

function Settings() {
  const { user } = useContext(AuthContext);

  const [showSettingEditCon, setShowSettingEditCon] = React.useState(false);

  return (
    <div className="settingsPage">
      <div className="spWrapper">
        <Navbar />
        <div className="spBeforeSplit">
          <div className="spLeftCon">
            <LeftBar />
          </div>

          <div className="spCenterCon">
            <div className="userCredentialEditCon">
              <div className="usiRow1">
                <span className="usiTitle">General Account Setting</span>
                <button
                  className="usiEditBut"
                  onClick={() => setShowSettingEditCon(!showSettingEditCon)}
                >
                  Edit
                </button>
              </div>

              <hr className="suiHr1" />
              <div className="usiItemCon">
                <span className="usiItemTitle">Username</span>
                <span className="usiItemTitleValue">{user.username}</span>
              </div>
              <hr className="suiHr2" />

              <div className="usiItemCon">
                <span className="usiItemTitle">Email</span>
                <span className="usiItemTitleValue">{user.email}</span>
              </div>
              <hr className="suiHr2" />

              <div className="usiItemCon">
                <span className="usiItemTitle">Password</span>
                <span className="usiItemTitleValue">*************</span>
              </div>
              <hr className="suiHr1" />
            </div>
            {/* --------------------------------- */}

            {/* User Credential Edit Mode Container */}
            {showSettingEditCon && (
              <form className="userCredentialEditForm">
                <div className="userCredentialEditModeCon">
                  <div className="ucemcRow1">
                    <span className="ucemcTitle">
                      Change Account Credentials
                    </span>
                    <button
                      className="ucemcCancelBut"
                      onClick={() => setShowSettingEditCon(!showSettingEditCon)}
                    >
                      Cancel
                    </button>
                  </div>

                  <hr className="ucemcHr1" />
                  <div className="ucemcItemCon">
                    <span className="ucemcItemTitle">Username</span>
                    <input
                      type="text"
                      className="ucemcItemTitleValueInput"
                      placeholder="New Username"
                    />
                  </div>
                  <hr className="ucemcHr2" />

                  <div className="ucemcItemCon">
                    <span className="ucemcItemTitle">Email</span>
                    <input
                      type="text"
                      className="ucemcItemTitleValueInput"
                      placeholder="New Email"
                    />
                  </div>
                  <hr className="ucemcHr2" />

                  <div className="ucemcItemCon">
                    <span className="ucemcItemTitle">Password</span>
                    <input
                      type="text"
                      className="ucemcItemTitleValueInput"
                      placeholder="New Password"
                    />
                  </div>
                  <hr className="ucemcHr1" />
                  <button className="ucemcSaveBut" type="submit">
                    Save
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="spRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
