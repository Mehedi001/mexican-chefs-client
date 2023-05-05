import React from 'react';

const Training = () => {
    return (
        <div className='container mt-28 mb-28 mx-auto'>
            <img className='mx-auto' src="https://media.gettyimages.com/id/1213708732/video/modern-welcome-line-icon-animation-on-white-background.jpg?s=640x640&k=20&c=fqKx5N8uiHN0agngMJ9EnZd0S-qtbjXBNYIsi6m9f80=" alt="" />
            <div className=' flex flex-col lg:flex-row justify-center gap-6 mt-12'>
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-title">Successfully learn</div>
                        <div className="stat-value">7,500+ Student</div>
                        <div className="stat-desc">750+ last month</div>
                    </div>

                </div>


                
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-title">Worked In</div>
                        <div className="stat-value">70+ Company</div>
                        <div className="stat-desc">$7,000/month</div>
                    </div>

                </div>
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-title">Free Internship</div>
                        <div className="stat-value">3 month</div>
                        <div className="stat-desc">with our professional team</div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Training;