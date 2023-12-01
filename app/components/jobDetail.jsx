'use client'

import { Button } from 'flowbite-react';

const JobDetail = ({ job }) => {
  return (
    <div className='p-10'>
      <h2 className='text-2xl font-bold'>{job.posisi_pekerjaan}</h2>
      <Button outline gradientDuoTone="greenToBlue">
        Apply
      </Button>
    </div>
  );
};

export default JobDetail;
