'use client'

import { HiPencil, HiTrash } from 'react-icons/hi';

function JobHistory() {
  return (
    <div className="border p-6 rounded-md shadow-md m-4 bg-white relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">Tokopedia</h2>
        <div className="flex space-x-2">
          <HiPencil
            className="cursor-pointer text-gray-500 hover:text-gray-700 transition duration-300 text-2xl"
            title="Edit"
          />
          <HiTrash
            className="cursor-pointer text-gray-500 hover:text-gray-700 transition duration-300 text-2xl"
            title="Delete"
          />
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-2">2020 - 2023</div>
      <div className="text-sm text-gray-600 mb-2">3 years</div>
      <div className="text-base text-gray-700">Skills: Javascript</div>
    </div>
  );
}

export default JobHistory;