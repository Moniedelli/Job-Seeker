'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';

const useJobDetails = (id) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`/api/job/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    if (id) {
      fetchJobDetails();
    }
  }, [id]);

  return job;
};

export default useJobDetails;