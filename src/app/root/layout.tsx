import type { Metadata } from 'next';

type props = { children: React.ReactNode };
const RootLayout = ({ children }: props) => {
  return <div>{children}</div>;
};
export default RootLayout;

export const metadata: Metadata = {
  title: 'ロボカップ研究部HP',
};
