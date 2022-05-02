import React from 'react'
import "./jobPostLg.scss"
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


function JobPostLg() {
    return (
        <div className='jobPostLgCon' >
            <span className='jplTitle'>Senior Blockchain developer</span>
            <div className="jplCompanyIconName">
                <img className='jplImg' src="/assets/profile.jpeg" alt="" />
                <div className="jplCompanyNameCon">
                    <span className="jplCompanyName">Topal</span>
                    <span className="jplCompanyName">Cornwall,PE <span>(Remote)</span></span>
                </div>
            </div>

            <div className="dayAgoApplication">
                <span className='jplPostDay'>2 days ago .</span>
                <span className='jplApplicantsNum'>5 applicants</span>
            </div>

            <div className="jplIconAndTxt">
                <BusinessCenterIcon className='jplIcon' />
                <span className='jplTxt'>Contract .</span>
                <span className='jplTxt2'>Mid-Senior level</span>
            </div>

            <div className="jplIconAndTxt">
                <BusinessCenterIcon className='jplIcon' />
                <span className='jplTxt' >1000-5000 </span>
                <span className='jplTxt2'>Internet Publishing </span>
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

            {/* Job description=======> */}
            <div className="jobDescCon">
            <span className="jobDescriptionTitleTxt">Job Description</span>
            <span className="aboutTheJob">AboutThe Job</span>
            <span className="jobDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla at voluptatibus beatae illo magni ipsam temporibus, suscipit, quo exercitationem adipisci porro in! Ipsam ex suscipit, voluptas asperiores odio praesentium ratione nobis, ab similique corrupti neque dolores aperiam iusto eligendi velit doloremque iste deserunt reiciendis? Aperiam commodi maiores modi accusantium veritatis sit quo, atque, obcaecati voluptatem natus vero, velit eius rerum? Aspernatur, beatae architecto laborum neque adipisci eos magnam! Quidem reprehenderit, ipsam quas voluptatum laboriosam quibusdam cum minus alias deleniti sapiente.</span>
            <span className="aboutTheJob"> About <span className='jplCompanyName'>Topal</span></span>
            <span className="jobDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis consequuntur enim fuga, corporis, dignissimos delectus perspiciatis odio molestiae minima tenetur saepe, necessitatibus error. Asperiores reprehenderit veniam quibusdam, ullam sint sed, vel repellendus quaerat, fuga laboriosam animi fugit nesciunt at. Quas, consequatur sunt. Optio animi, neque nobis sint odit incidunt laudantium!</span>
            <span className="aboutTheJob">AboutThe Role</span>
            <span className="jobDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis consequuntur enim fuga, corporis, dignissimos delectus perspiciatis odio molestiae minima tenetur saepe, necessitatibus error. Asperiores reprehenderit veniam quibusdam, ullam sint sed, vel repellendus quaerat, fuga laboriosam animi fugit nesciunt at. Quas, consequatur sunt. Optio animi, neque nobis sint odit incidunt laudantium!</span>
            <span className="aboutTheJob">Requirements</span>
            <ul className='requirementsUl'>
               <li className='requirementLi jobDesc'>Bachelors and/or Masters degree in Computer Science, Computer Engineering or related technical discipline</li>
               <li className='requirementLi jobDesc'>5+ years of professional software development experience</li>
               <li className='requirementLi jobDesc'>Proficiency in Java or C++, and object-oriented design skills</li>
               <li className='requirementLi jobDesc'>Experience in development of distributed/scalable systems and high-volume transaction applications</li>
               <li className='requirementLi jobDesc'>Experience in development of distributed/scalable systems and high-volume transaction applications</li>
               <li className='requirementLi jobDesc'>nowledge of professional software engineering and best practices for the full software development life cycle, including coding standards</li>
               <li className='requirementLi jobDesc'>Experience in development of distributed/scalable systems and high-volume transaction applications</li>
            </ul>

            </div>
        </div>
    )
}

export default JobPostLg