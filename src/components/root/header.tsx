export const Header = () => {
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
      <div className='flex flex-row'>
        {menu_items.map((item) => (
          <a
            className='mx-2 rounded-md bg-slate-500 px-2 py-1 font-bold text-lg text-white hover:bg-slate-400'
            href={item.href}
            key={item.name}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
};
