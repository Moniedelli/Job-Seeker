
'use client';

import EducationHistory from '../educationHistories';
import AddEducation from '../formEducation';
import AddJob from '../formJob';
import JobHistory from '../jobHistories';

function BodyProfile() {
  return (
    <>
      <div className='p-5 text-sm'>
        <div className='py-5'>
        Dedicated and results-driven IT professional with over 8 years of experience in full-stack web development. Proven track record of delivering high-quality software solutions for diverse clients. Skilled in frontend and backend technologies, with a passion for clean and efficient code. Committed to staying current with emerging technologies and industry trends.
        </div>
        <div className='pr-5'>
          <AddEducation />
        </div>
        <EducationHistory />
          <AddJob />
          <JobHistory />
      </div>
    </>
  );
}

export default BodyProfile;