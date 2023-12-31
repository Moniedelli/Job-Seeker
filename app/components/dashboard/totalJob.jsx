'use client'

import { useEffect, useState } from 'react';
import getTotalJobs from '@/pages/api/job/getTotalJob';

const TotalJob = () => {
  const [totalJobs, setTotalJobs] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/job/getTotalJob');
      const data = await response.json();
      setTotalJobs(data.totalJobs);
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Found {totalJobs} jobs</p>
    </div>
  );
};

export default TotalJob;
