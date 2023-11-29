// pages/detailJob/[id].js
'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const DetailJob = ({params: {id}}) => {

  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        // Gunakan axios.get untuk mengambil data dari API
        const response = await axios.get(`/api/job/[id]/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    if (id) {
      fetchJobDetails();
    }
  }, [id]);

  return (
    <div>
      <h1>Job Details</h1>
      {job ? (
        <div>
          <h2>{job.posisi_pekerjaan}</h2>
          <p>{job.deskripsi}</p>
          {/* Tambahkan tampilan detail pekerjaan sesuai kebutuhan */}
        </div>
      ) : (
        <p>Loading job details...</p>
      )}
    </div>
  );
};

export default DetailJob;