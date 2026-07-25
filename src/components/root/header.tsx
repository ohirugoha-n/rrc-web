'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Header = () => {
  const _router = useRouter();
  const menu_items: { name: string; href: string }[] = [
    { name: 'ホーム', href: '/' },
    { name: 'チーム', href: '/teams' },
    { name: 'ブログ', href: '/blogs' },
  ];
  return (
    <header className='space-between sticky top-0 flex h-20 w-screen flex-row items-center justify-between bg-slate-700 px-2'>
      <Link
        className='flex h-16 w-16 flex-col items-center justify-center rounded-3xl bg-white pb-3 leading-1'
        href='/'
      >
        <p className='font-bold text-xl'>RRC</p>
        <p className='font-bold text-md'>TMCIT</p>
      </Link>
      <div className='flex flex-row space-x-4 pr-4'>
        {menu_items.map((item) => (
          <Link
            className={cn(
              buttonVariants(),
              'bg-transparent',
              'h-12 rounded-md hover:scale-105 hover:bg-slate-500',
              'font-bold text-lg text-white',
            )}
            href={item.href}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};
