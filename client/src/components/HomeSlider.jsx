import React from 'react'
import '../css/Home.slides.css';
import cybersecurity from '../assets/cybersecurity.png'
import training from '../assets/Training.png'
import projectmanagement from '../assets/projectmanagement.png'
import internship from '../assets/internship.png'

const HomeSlider = () => {
  return (
    <div className="container">
    <div className="slide-wrapper">
        <div className="image-list mx-auto">
            <div className="page1-div bg-white items-center justify-center p-2 py-5">
                <img src="https://omsoftsolution.com/wp-content/uploads/2023/07/hm03-1-e1689741602280.webp" alt="" className='mx-auto' />
                <h3 className='text-center'>WEB DEVELOPMENT</h3>
            </div>
            <div className="page1-div bg-white mx-auto p-2 py-5">
                <img src="https://omsoftsolution.com/wp-content/uploads/2023/07/hm02-1-e1689741567859.webp" alt="" className='mx-auto'/>
                <h3 className='text-center'>
                    WEB DESIGN</h3>
            </div>
            <div className="page1-div bg-white items-center p-2 py-5">
                <img src="https://omsoftsolution.com/wp-content/uploads/2023/07/hm04-e1686026304907-1.webp" alt="" className='mx-auto'/>
                <h3 className='text-center'>
                    SEO SERVICES</h3>
            </div>
            <div className="page1-div bg-white items-center p-2 py-5">
                <img src="https://omsoftsolution.com//wp-content/uploads/2023/05/hm05-e1686026365357.webp" alt="" className='mx-auto'/>
                <h3 className='text-center'>
                    APP DEVELOPMENT</h3>
            </div>
            <div className="page1-div bg-white items-center p-2 py-5">
                <img src="https://omsoftsolution.com//wp-content/uploads/2023/05/hm06-e1686026415227.webp" alt="" className='mx-auto'/>
                <h3 className='text-center'>DIGITAL MARKETING</h3>
            </div>
            <div className="page1-div bg-white items-center p-2 py-5">
                <img src="https://omsoftsolution.com//wp-content/uploads/2023/05/hm07-e1686026451998.webp" alt="" className='mx-auto' />
                <h3 className='text-center'>SOFTWARE SERVICES</h3>
            </div>
            <div className="page1-div bg-white items-center p-2 py-3">
                <img src={cybersecurity} alt=""  className='mx-auto h-[85px] w-[85px]' />
                <h3 className='text-center mt-1'>CYBER SECURITY</h3>
            </div>
            <div className="page1-div bg-white items-center p-2 py-3">
                <img src={training} alt=""  className='mx-auto h-[85px] w-[85px]'/>
                <h3 className='text-center'>TRAINING</h3>
            </div>
            <div className="page1-div bg-white items-center p-2 py-3">
                <img src={projectmanagement } alt=""  className='mx-auto h-[75px] w-[75px]'/>
                <h3 className='text-center '>PROJECT MANAGEMENT</h3>
            </div>
            <div className="page1-div bg-white items-center p-2 py-3">
                <img src={internship} alt="" className='mx-auto h-[75px] w-[75px]'/>
                <h3 className='text-center'>INTERNSHIP</h3>
            </div>

        </div>
    </div>
</div>
  )
}

export default HomeSlider