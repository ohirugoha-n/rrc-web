'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export const Header = () => {
  const router = useRouter();
  const menu_items: { name: string; href: string }[] = [
    { name: 'ダミー1', href: '/dummy1' },
    { name: 'ダミー2', href: '/dummy2' },
    { name: 'ダミー3', href: '/dummy3' },
    { name: 'ダミー4------', href: '/dummy4' },
  ];
  return (
    <header className='space-between sticky top-0 flex h-20 w-screen flex-row items-center justify-between bg-slate-700 px-2'>
      <div className='flex h-16 w-16 flex-col items-center justify-center rounded-3xl bg-white pb-3 leading-1'>
        <p className='font-bold text-xl'>RRC</p>
        <p className='font-bold text-md'>TMCIT</p>
      </div>
      <div className='flex flex-row space-x-4'>
        {menu_items.map((item) => (
          <Button
            className='h-12 rounded-md bg-slate-500 font-bold text-lg text-white hover:scale-105 hover:bg-slate-400'
            key={item.name}
            onClick={() => router.push(item.href)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </header>
  );
};
