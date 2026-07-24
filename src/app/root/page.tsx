import Image from 'next/image';

import { Button } from '@/components/ui/button';

const Page = () => {
  return (
    <div>
      <h1 className='bg-sky-200'>rrcsangi.com</h1>
      <div className='h-30 w-screen bg-sky-400'>aa</div>
      <div className='flex h-30 w-screen flex-row items-center justify-center bg-sky-600'>
        <div className='h-10 w-10 bg-sky-800'>bb</div>
        <div className='h-10 w-10 bg-sky-900'>cc</div>
      </div>
      <Image alt='img' height='100' src='/root/img.webp' width='100' />
      <Button className='h-40 w-100 rounded-md text-2xl'>ボタン</Button>
    </div>
  );
};

export default Page;
