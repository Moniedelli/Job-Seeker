
'use client';

import EducationHistory from '../educationHistories';
import AddEducation from '../formEducation';
import AddJob from '../formJob';
import JobHistory from '../jobHistories';

function BodyProfile() {
  return (
    <>
      <div className='p-5 text-sm'>
        <h2 className="font-semibold text-xl">Education Histories</h2>
        <div className='flex justify-end pr-5'>
          <AddEducation />
        </div>
        <EducationHistory />
        <h2 className="font-semibold text-xl pt-10">Job Histories</h2>
        <div className='flex justify-end pr-5'>
          <AddJob />
        </div>
        <JobHistory />
      </div>
    </>
  );
}

export default BodyProfile;