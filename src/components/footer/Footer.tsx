import { memo } from 'react';

const Footer = () => {
  return (
    <footer className='bg-blue-500'>
        <div className='container flex items-center justify-between text-white py-[70px]'>
            <p className='text-[20px]'>Footer</p>
            <p>Lorem ipsum dolor sit amet</p>
        </div>
    </footer>
  );
};

export default memo(Footer);