'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

function BackToDashboard() {
  const router = useRouter();

  return (
    <div className='py-5 pl-16'>
      {/* Tambahkan navigasi ke halaman utama di sini */}
      <Link href="/" onClick={() => router.push('/')}>
        <div className='flex gap-2 hover:text-green-500'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <div>Back</div>
        </div>
      </Link>
    </div>
  );
}

export default BackToDashboard;
