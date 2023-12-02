// pages/AboutUs.js

import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-full border p-6 rounded-md shadow-md my-8 ">
      {/* Header */}
      <div className="mb-8 bg-green-200 text-black text-center py-10 px-10 rounded-t-md ">
        <h1 className="mb-8 bg-green-200 text-4xl font-bold">DeaLink</h1>
        <p className="text-black-800 text-center">Selamat datang di Dealink, tempat terbaik untuk menemukan peluang karir yang sesuai dengan impian Anda.</p>
      </div>

      {/* Mengapa Memilih Dealink? */}
<div className="mb-8 bg-white-200 p-6 rounded-md">
  <h3 className="text-2xl font-bold text-gray-800 mb-4">Mengapa Memilih Dealink?</h3>
  <p className="text-lg text-black-400 leading-7 mb-4">
    Kami memahami betapa pentingnya pencarian kerja bagi kehidupan Anda, dan kami berkomitmen untuk memberikan pengalaman yang memadai dan informatif. Kami terus berusaha untuk meningkatkan dan menyempurnakan platform kami agar selalu relevan dengan perkembangan terkini di dunia kerja. Kami percaya pada keterbukaan dan transparansi dalam setiap langkah. Kami berusaha untuk memberikan informasi yang jelas dan akurat kepada para pengguna kami.
  </p>
</div>

{/* Visi Misi */}
<div className="mb-8 bg-white-200 p-6 rounded-md">
  <h2 className="text-2xl font-bold text-black-800 mb-4">Visi Misi</h2>

  <div className="mb-8 bg-white-200 p-6 rounded-md">
    <h3 className="text-2xl font-bold text-black-800 mb-2">Visi</h3>
    <p className="text-lg text-black-400 leading-6">
      Menciptakan sebuah platform yang memungkinkan setiap individu mengejar dan mencapai karir impian mereka.
    </p>
  </div>

  <div className="mb-8 bg-white-200 p-6 rounded-md">
    <h3 className="text-2xl font-bold text-black-800 mb-2">Misi</h3>
    <p className="text-lg text-black-700 leading-7">
      Memberdayakan para pencari kerja dengan alat dan sumber daya yang mereka butuhkan untuk mengambil langkah berikutnya dalam karir mereka.
    </p>
  </div>
</div>
      {/* Footer */}
      <div className="text-center text-gray-700 bg-green-200 py-10 px-10 rounded-b-md">
        <p>
    &copy; 2023 DeaLink. All rights reserved.
  </p>

      </div>
    </div>
    

  );
};

export default AboutUs;
