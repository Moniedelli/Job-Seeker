// pages/detailJob/[id].js
'use client'

import { useRouter } from 'next/navigation';
import axios from 'axios';
import useJobDetails from '@/app/hooks/useJobDetails';
import JobDetail from '@/app/components/jobDetail';

const DetailJob = ({params: {id}}) => {
  const job = useJobDetails(id);

  return (
    <div>
      {job ? (
        <div>
          <JobDetail job={job} />
        </div>
      ) : (
        <p>Loading job details...</p>
      )}
    </div>
  );
};

export default DetailJob;