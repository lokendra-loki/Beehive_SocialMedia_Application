import React from 'react'
import "./jobPostLg.scss"
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { format} from 'timeago.js';


function JobPostLg({ jobPost }) {
    return (
        <div className='jobPostLgCon' >
            <span className='jplTitle'>{jobPost.position}</span>
            <div className="jplCompanyIconName">
                <img className='jplImg' src={jobPost.companyProfileImg} alt="" />
                <div className="jplCompanyNameCon">
                    <span className="jplCompanyName">{jobPost.companyName}</span>
                    <span className="jplCompanyName">{jobPost.location} <span> ({jobPost.officeOrRemote === 1 ? "Office" : "Remote"})</span></span>
                </div>
            </div>

            <div className="dayAgoApplication">
                <span className='jplPostDay'>{format(jobPost.createdAt)} .</span>
                <span className='jplApplicantsNum'>5 applicants</span>
            </div>

            <div className="jplIconAndTxt">
                <BusinessCenterIcon className='jplIcon' />
                <span className='jplTxt'>Contract .</span>
                <span className='jplTxt2'>{jobPost.contractType === 1 ? "Intern" : jobPost.contractType === 2 ? "Junior" : jobPost.contractType === 3 ? "Mid-Senior" : jobPost.contractType === 4 ? "Senior" : jobPost.contractType === 5 ? "Manager" : "notMentioned"}</span>
            </div>

            <div className="jplIconAndTxt">
                <BusinessCenterIcon className='jplIcon' />
                <span className='jplTxt' >{jobPost.noOfEmployee} </span>
                <span className='jplTxt2'>{jobPost.copanyType }</span>
            </div>

            <div className="jplRecruiticonTxt">
                <TrackChangesIcon className='jplHiringIcon' />
                <span className='activelyRecruitTxt'>Actively recruiting</span>
            </div>

            <div className="jplApplySaveBut">
                <button className="jplApplyBtn">Apply  <SendOutlinedIcon className='jplButIcon' />  </button>
                <button className="jplSaveBtn">Save</button>
            </div>
            <hr className='jplHr' />

            {/* Job description===================================> */}
            <div className="jobDescCon">
                <span className="jobDescriptionTitleTxt">Job Description</span>
                <span className="aboutTheJob">AboutThe Job</span>
                <span className="jobDesc">{jobPost.aboutJob}</span>
                <span className="aboutTheJob"> About <span className='jplCompanyName'>{jobPost.companyName}</span></span>
                <span className="jobDesc">{jobPost.aboutCompany}</span>
                <span className="aboutTheJob">AboutThe Role</span>
                <span className="jobDesc">{jobPost.aboutRole}</span>
                <span className="aboutTheJob">Requirements</span>
                <ul className='requirementsUl'>
                    <li className='requirementLi jobDesc'>{jobPost.requirement1}</li>
                    <li className='requirementLi jobDesc'>{jobPost.requirement2}</li>
                    <li className='requirementLi jobDesc'>{jobPost.requirement3}</li>
                    <li className='requirementLi jobDesc'>{jobPost.requirement4}</li>
                    <li className='requirementLi jobDesc'>{jobPost.requirement5}</li>
                    <li className='requirementLi jobDesc'>{jobPost.requirement6}</li>
                    <li className='requirementLi jobDesc'>{jobPost.requirement7}</li>
                </ul>
            </div>
        </div>
    )
}

export default JobPostLg