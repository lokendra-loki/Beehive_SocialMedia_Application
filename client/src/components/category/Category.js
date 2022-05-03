import React from 'react'
import "./category.scss"
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

function Category() {
    return (
        <div className='categoryListContainer'>

            <span className="categoryContainerTitle">Categories</span>
              <hr className="clcHr" />
            <div className='categoryList'>
                <CategoryOutlinedIcon className='clcKey' />
                <span className="clcValue">programming</span>
            </div>


            <div className='categoryList'>
                <CategoryOutlinedIcon className='clcKey' />
                <span className="clcValue">Data Science & Engineering</span>
            </div>

            <div className='categoryList'>
                <CategoryOutlinedIcon className='clcKey' />
                <span className="clcValue">Cloud Computing</span>
            </div>

            <div className='categoryList'>
                <CategoryOutlinedIcon className='clcKey' />
                <span className="clcValue">AI & Machine Learning</span>
            </div>

            <div className='categoryList'>
                <CategoryOutlinedIcon className='clcKey' />
                <span className="clcValue">Web Development</span>
            </div>

            <div className='categoryList'>
                <CategoryOutlinedIcon className='clcKey' />
                <span className="clcValue">Tech News</span>
            </div>
        </div>
    )
}

export default Category