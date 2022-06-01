import React, { useEffect } from "react";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./jobPostEdit.scss";

function JobPostEdit() {
  //Fetching data from URL id
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);

  const [jobPost, setJobPost] = React.useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/jobPosts/get/${path}`);
      setJobPost(res.data);
    };
    fetchData();
  }, [path]);
  console.log(jobPost);

  return (
    <div className="jobPostEditCon">
      <span className="jpecTitle">Post job requirements here!</span>
      <hr className="jpecHr" />
      {/* <img src="/assets/cover.jpeg" alt="" className="jpecImg" /> */}
      <label className="jpecIconAndTxt" htmlFor="fileInput">
        <ImageSearchOutlinedIcon className="jpecImgIcon" />
        <span className="jpecSelectImgTxt">Select company logo Image</span>
      </label>
      <input type="file" id="fileInput" style={{ display: " none" }} />

      <form className="jpecColumnCon">
        <span className="jpecCompanyName jpec">Position</span>
        <input
          type="text"
          className="jpecCompanyNameInput jpecInput jpecInput2"
          //   onChange={(e) => setPosition(e.target.value)}
          defaultValue={jobPost.position}
        />
        {/* == */}
        <span className="jpecCompanyName jpec">Company Name</span>
        <input
          type="text"
          className="jpecCompanyNameInput jpecInput jpecInput2"
          //   onChange={(e) => setCompanyName(e.target.value)}
          defaultValue={jobPost.companyName}
        />
        {/* ==*/}
        <span className="jpecCompanyLocation jpec">Company Location</span>
        <input
          type="text"
          className="jpecCompanyLocationInput jpecInput jpecInput2"
          //   onChange={(e) => setLocation(e.target.value)}
          defaultValue={jobPost.location}
        />
        {/* == */}
        <span className="jpecNoOfEmployee jpec">Salary Range</span>{" "}
        <select
          className="jpecNoOfEmployeeInput jpecInput"
          //   onChange={(e) => setSalaryRange(e.target.value)}
        >
          <option value="1">5k-10k</option>
          <option value="2">10k-15k</option>
          <option value="3">15k-20k</option>
          <option value="4">20k-30k</option>
          <option value="5">30k-40k</option>
          <option value="6">40k-50k</option>
          <option value="7">50k-60k</option>
          <option value="8">60k-70k</option>
          <option value="9">70k-80k</option>
          <option value="10">Negotiate</option>
        </select>
        {/* == */}
        <span className="jpecCompanyLocation jpec">Company Type</span>{" "}
        <input
          type="text"
          className="jpecCompanyLocationInput jpecInput jpecInput2"
          //   onChange={(e) => setCompanyType(e.target.value)}
          placeholder="WebApp and MobilApp Development"
        />
        {/* == */}
        <span className="jpecNoOfEmployee jpec">Required Number</span>{" "}
        <select
          className="jpecNoOfEmployeeInput jpecInput"
          //   onChange={(e) => setNoOfEmployee(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">More than 10</option>
        </select>
        {/* == */}
        {/* <span className="jpecCompanyLocation jpec">Company Type</span>{" "}
        <input
          type="text"
          className="jpecCompanyLocationInput jpecInput jpecInput2"
          //   onChange={(e) => setCompanyType(e.target.value)}
          placeholder="WebApp and MobilApp Development"
        /> */}
        {/* == */}
        <span className="jpecNoOfEmployee jpec">Contract Type</span>{" "}
        <select
          className="jpecNoOfEmployeeInput jpecInput"
          //   onChange={(e) => setContractType(e.target.value)}
          name="contractType"
        >
          <option disabled selected={true}>
            Select
          </option>
          <option value="1">Intern</option>
          <option value="2">Junior</option>
          <option value="3">Mid-Senior</option>
          <option value="4">Senior</option>
        </select>
        {/* == */}
        <span className="jpecNoOfEmployee jpec">Job Type</span>{" "}
        <select
          className="jpecNoOfEmployeeInput jpecInput"
          //   onChange={(e) => setJobType(e.target.value)}
        >
          <option value="1">Full Time</option>
          <option value="2">Part Time</option>
        </select>
        {/* == */}
        <span className="jpecAboutTheJob jpec">About The Job</span>{" "}
        <textarea
          type="text"
          className="jpecAboutTheJobInput jpecInputTextArea jpecInput2"
          //   onChange={(e) => setAboutJob(e.target.value)}
          placeholder="Describe about the job"
        />
        <span className="jpecAboutTheCompany jpec">About The Company</span>{" "}
        <textarea
          type="text"
          className="jpecAboutTheCompanyInput jpecInputTextArea jpecInput2"
          //   onChange={(e) => setAboutCompany(e.target.value)}
          placeholder="Describe about the Company"
        />
        <span className="jpecAboutTheRole jpec">About The Role</span>{" "}
        <textarea
          type="text"
          className="jpecAboutTheRoleInput jpecInputTextArea jpecInput2"
          //   onChange={(e) => setAboutRole(e.target.value)}
          placeholder="Describe about the Role"
        />
        <span className="jpecRequirements jpec">Requirement1</span>{" "}
        <input
          type="text"
          className="jpecRequirementsInput jpecInput"
          //   onChange={(e) => setRequirement1(e.target.value)}
          placeholder="&#9679;"
          defaultValue={jobPost.requirement1}
        />
        {/* == */}
        <span className="jpecRequirements jpec">Requirement2</span>{" "}
        <input
          type="text"
          className="jpecRequirementsInput jpecInput"
          //   onChange={(e) => setRequirement2(e.target.value)}
          placeholder="&#9679;"
          defaultValue={jobPost.requirement2}
        />
        {/* == */}
        <span className="jpecRequirements jpec">Requirement3</span>{" "}
        <input
          type="text"
          className="jpecRequirementsInput jpecInput"
          //   onChange={(e) => setRequirement3(e.target.value)}
          placeholder="&#9679;"
          defaultValue={jobPost.requirement3}
        />
        {/* == */}
        <span className="jpecRequirements jpec">Requirement4</span>{" "}
        <input
          type="text"
          className="jpecRequirementsInput jpecInput"
          //   onChange={(e) => setRequirement4(e.target.value)}
          placeholder="&#9679;"
          defaultValue={jobPost.requirement4}
        />
        {/* == */}
        <span className="jpecRequirements jpec">Requirement5</span>{" "}
        <input
          type="text"
          className="jpecRequirementsInput jpecInput"
          //   onChange={(e) => setRequirement5(e.target.value)}
          placeholder="&#9679;"
          defaultValue={jobPost.requirement5}
        />
        {/* == */}
        <span className="jpecRequirements jpec">Requirement6</span>{" "}
        <input
          type="text"
          className="jpecRequirementsInput jpecInput"
          //   onChange={(e) => setRequirement6(e.target.value)}
          placeholder="&#9679;"
          defaultValue={jobPost.requirement6}
        />
        {/* == */}
        <span className="jpecRequirements jpec">Requirement7</span>{" "}
        <input
          type="text"
          className="jpecRequirementsInput jpecInput"
          //   onChange={(e) => setRequirement7(e.target.value)}
          placeholder="&#9679;"
          defaultValue={jobPost.requirement7}
        />
        <button className="jpecPostBut" type="submit">
          Create Job
        </button>
      </form>
    </div>
  );
}

export default JobPostEdit;
