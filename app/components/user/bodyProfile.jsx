
'use client';

import ButtonEducation from '../buttonEducation';
import ButtonJob from '../buttonJob';
import EducationHistory from '../educationHistories';
import JobHistory from '../jobHistories';

function BodyProfile() {
  return (
    <div className="flex gap-3">
      <div className='p-10 w-1/2 text-sm'>
        <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus laudantium repellendus perferendis, atque tempora dolore dolorum! Nulla accusantium ex eveniet dolorem a? Modi assumenda possimus nisi ipsa voluptatibus. Sit, cumque!
        </div>
        <EducationHistory />
        <JobHistory />
      </div>
      <div className='w-1/2 p-5'>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mt-4">Edit Data</h2>
        <div>
          <ButtonEducation/>
          <ButtonJob />
        </div>
      </div>
    </div>
  );
}

export default BodyProfile;