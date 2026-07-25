import { M_PLUS_Rounded_1c } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';
import { cn } from '@/lib/utils';

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ['400', '700'], // 必要な太さだけ指定
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'rrc-web',
    template: '%s | rrc-web',
  },
  description: 'rrc-web',
};

type props = { children: React.ReactNode };

const RootLayout = ({ children }: props) => {
  return (
    <html
      className={cn(
        'h-full',
        'antialiased',
        mPlusRounded.variable,
        'font-sans',
      )}
      lang='ja'
    >
      <body className='flex min-h-full flex-col'>{children}</body>
    </html>
  );
};

export default RootLayout;
