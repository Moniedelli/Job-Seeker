'use client'

import { HiPencil, HiTrash } from 'react-icons/hi';

function EducationHistory() {
  return (
    <div className="border p-5 rounded-md shadow-md m-4 bg-white relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">Educator</h2>
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
      <div className="text-sm text-gray-600 mb-2">2023 - 2024</div>
      <div className="text-sm text-gray-600 mb-2">Pengalaman Kerja</div>
      <div className="text-base text-gray-700">Keahlian: atrel</div>
    </div>
  );
}

export default EducationHistory;