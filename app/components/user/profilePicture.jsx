
'use client';

import { Avatar } from 'flowbite-react';

function ProfilePicture() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2 pl-16 pt-10">
        <Avatar img="/images/profilePicture.jpg" rounded size="xl" bordered color="gray" />
        <div className="flex flex-col items-start pl-5">
          <div className="text-2xl font-bold">Jese Leos</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
        </div>
      </div>
      <div className='py-5 px-5 text-sm'>
        Dedicated and results-driven IT professional with over 8 years of experience in full-stack web development. Proven track record of delivering high-quality software solutions for diverse clients. Skilled in frontend and backend technologies, with a passion for clean and efficient code. Committed to staying current with emerging technologies and industry trends.
      </div>
      <hr className="my-1 border-t-1 mx-5 border-gray-300" />
    </div>
  );
}

export default ProfilePicture;