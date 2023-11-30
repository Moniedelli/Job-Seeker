'use client'

import { Button } from 'flowbite-react';
import React from 'react';

const JobDetail = ({ job }) => {
  const { posisi_pekerjaan, deskripsi, lokasi, gaji, jenis_pekerjaan, tgl_posting } = job;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
    <h2 className="text-3xl font-bold mb-4 text-blue-600">{posisi_pekerjaan}</h2>
    <p className="text-gray-600 mb-2">Location: {lokasi}</p>
    <p className="text-gray-600 mb-2">Salary: {gaji}</p>
    <p className="text-gray-600 mb-2">Job Type: {jenis_pekerjaan}</p>
    <p className="text-gray-600 mb-2">Posting Date: {tgl_posting}</p>
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2 text-blue-600">Job Description:</h3>
      <p className="text-gray-700 leading-relaxed">{deskripsi}</p>
    </div>
      <Button outline gradientDuoTone="greenToBlue">
        Apply
      </Button>
    </div>
  );
};

export default JobDetail;
