import type { Metadata } from 'next';

import { Header } from '@/components/root/header';

type props = { children: React.ReactNode };
const RootLayout = ({ children }: props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default RootLayout;

export const metadata: Metadata = {
  title: 'ロボカップ研究部HP',
};
