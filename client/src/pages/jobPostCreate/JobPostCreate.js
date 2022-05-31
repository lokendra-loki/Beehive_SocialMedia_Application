import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import RightBar from "../../components/rightBar/RightBar";
import axios from "axios";
import "./jobPostCreate.scss";

function JobSearchFeed() {
  //Create Job Post
  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [noOfEmployee, setNoOfEmployee] = useState("");
  const [contractType, setContractType] = useState("");
  const [jobType, setJobType] = useState("");
  const [aboutJob, setAboutJob] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [aboutRole, setAboutRole] = useState("");
  const [requirement1, setRequirement1] = useState("");
  const [requirement2, setRequirement2] = useState("");
  const [requirement3, setRequirement3] = useState("");
  const [requirement4, setRequirement4] = useState("");
  const [requirement5, setRequirement5] = useState("");
  const [requirement6, setRequirement6] = useState("");
  const [requirement7, setRequirement7] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJob = {
      position,
      companyName,
      location,
      salaryRange,
      companyType,
      noOfEmployee,
      contractType,
      jobType,
      aboutJob,
      aboutCompany,
      aboutRole,
      requirement1,
      requirement2,
      requirement3,
      requirement4,
      requirement5,
      requirement6,
      requirement7,
    };
    console.log(newJob);
    try {
      await axios.post("jobPosts/create", newJob);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="jobPostCreate">
      <div className="jpcWrapper">
        <Navbar />
        <div className="jpcBeforeSplit">
          <div className="jpcLeftCon">
            <LeftBar />
          </div>

          <div className="jpcCenterCon">
            <div className="jpcHeader">This is header Title</div>

            <div className="jpcWholeContainer">
              <span className="jpcTitle">Post job requirements here!</span>
              <hr className="jpcHr" />
              <img src="/assets/cover.jpeg" alt="" className="jpcImg" />
              <label className="jpcIconAndTxt" htmlFor="fileInput">
                <ImageSearchOutlinedIcon className="jpcImgIcon" />
                <span className="jpcSelectImgTxt">
                  Select company logo Image
                </span>
              </label>
              <input type="file" id="fileInput" style={{ display: " none" }} />

              <form className="jpcColumnCon" onSubmit={handleSubmit}>
                <span className="jpcCompanyName jpc">Position</span>
                <input
                  type="text"
                  className="jpcCompanyNameInput jpcInput jpcInput2"
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="FullStack Developer"
                />
                <span className="jpcCompanyName jpc">Company Name</span>
                <input
                  type="text"
                  className="jpcCompanyNameInput jpcInput jpcInput2"
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="ABC company"
                />
                <span className="jpcCompanyLocation jpc">Company Location</span>
                <input
                  type="text"
                  className="jpcCompanyLocationInput jpcInput jpcInput2"
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Bangalore"
                />
                <span className="jpcCompanyLocation jpc">Salary Range</span>
                <input
                  type="text"
                  className="jpcCompanyLocationInput jpcInput jpcInput2"
                  onChange={(e) => setSalaryRange(e.target.value)}
                  placeholder="40k-50k"
                />
                <span className="jpcCompanyLocation jpc">Company Type</span>{" "}
                <input
                  type="text"
                  className="jpcCompanyLocationInput jpcInput jpcInput2"
                  onChange={(e) => setCompanyType(e.target.value)}
                  placeholder="WebApp and MobilApp Development"
                />
                <span className="jpcNoOfEmployee jpc">No of Employee</span>{" "}
                <input
                  type="text"
                  className="jpcNoOfEmployeeInput jpcInput jpcInput2"
                  onChange={(e) => setNoOfEmployee(e.target.value)}
                  placeholder="65"
                />
                <span className="jpcNoOfEmployee jpc">Contract Type</span>{" "}
                <input
                  type="number"
                  className="jpcNoOfEmployeeInput jpcInput"
                  onChange={(e) => setContractType(e.target.value)}
                />
                <span className="jpcNoOfEmployee jpc">Job Type</span>{" "}
                <input
                  type="number"
                  className="jpcNoOfEmployeeInput jpcInput"
                  onChange={(e) => setJobType(e.target.value)}
                />
                <span className="jpcAboutTheJob jpc">About The Job</span>{" "}
                <textarea
                  type="text"
                  className="jpcAboutTheJobInput jpcInputTextArea jpcInput2"
                  onChange={(e) => setAboutJob(e.target.value)}
                  placeholder="Describe about the job"
                />
                <span className="jpcAboutTheCompany jpc">
                  About The Company
                </span>{" "}
                <textarea
                  type="text"
                  className="jpcAboutTheCompanyInput jpcInputTextArea jpcInput2"
                  onChange={(e) => setAboutCompany(e.target.value)}
                  placeholder="Describe about the Company"
                />
                <span className="jpcAboutTheRole jpc">About The Role</span>{" "}
                <textarea
                  type="text"
                  className="jpcAboutTheRoleInput jpcInputTextArea jpcInput2"
                  onChange={(e) => setAboutRole(e.target.value)}
                  placeholder="Describe about the Role"
                />
                <span className="jpcRequirements jpc">Requirement1</span>{" "}
                <input
                  type="text"
                  className="jpcRequirementsInput jpcInput"
                  onChange={(e) => setRequirement1(e.target.value)}
                  placeholder="&#9679;"
                />
                <span className="jpcRequirements jpc">Requirement2</span>{" "}
                <input
                  type="text"
                  className="jpcRequirementsInput jpcInput"
                  onChange={(e) => setRequirement2(e.target.value)}
                  placeholder="&#9679;"
                />
                <span className="jpcRequirements jpc">Requirement3</span>{" "}
                <input
                  type="text"
                  className="jpcRequirementsInput jpcInput"
                  onChange={(e) => setRequirement3(e.target.value)}
                  placeholder="&#9679;"
                />
                <span className="jpcRequirements jpc">Requirement4</span>{" "}
                <input
                  type="text"
                  className="jpcRequirementsInput jpcInput"
                  onChange={(e) => setRequirement4(e.target.value)}
                  placeholder="&#9679;"
                />
                <span className="jpcRequirements jpc">Requirement5</span>{" "}
                <input
                  type="text"
                  className="jpcRequirementsInput jpcInput"
                  onChange={(e) => setRequirement5(e.target.value)}
                  placeholder="&#9679;"
                />
                <span className="jpcRequirements jpc">Requirement6</span>{" "}
                <input
                  type="text"
                  className="jpcRequirementsInput jpcInput"
                  onChange={(e) => setRequirement6(e.target.value)}
                  placeholder="&#9679;"
                />
                <span className="jpcRequirements jpc">Requirement7</span>{" "}
                <input
                  type="text"
                  className="jpcRequirementsInput jpcInput"
                  onChange={(e) => setRequirement7(e.target.value)}
                  placeholder="&#9679;"
                />
                <button className="jpcPostBut" type="submit">
                  Create Job
                </button>
              </form>
            </div>
          </div>

          <div className="jpcRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSearchFeed;
