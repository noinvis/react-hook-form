"use client"
import { useRouter } from 'next/navigation';
import { memo } from 'react';

const HeaderBtn = () => {
    const router = useRouter()
  return (
    <h2 className='text-[20px] font-medium cursor-pointer' onClick={() => router.replace("/")}>Dummy</h2>
  );
};

export default memo(HeaderBtn);