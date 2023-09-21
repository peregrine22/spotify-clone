'use client';

import { ReactNode, useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import isEqual from 'lodash/isEqual';
import map from 'lodash/map';

import { usePathname } from 'next/navigation';

import { Box } from '../MainSidebar/components/Box';
import { SidebarItem } from '../MainSidebar/components/SidebarItem';
import { LibraryContent } from '../../../library/LibraryContent';

import { MainPath } from '../../../MainPath';

interface MainSidebarProps {
  children: ReactNode;
}
function MainSidebar({ children }: MainSidebarProps) {
  const pathname = usePathname();

  const links = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: !isEqual(pathname, '/search'),
        href: MainPath.index()
      },
      {
        label: 'Search',
        icon: BiSearch,
        active: isEqual(pathname, '/search'),
        href: MainPath.search()
      }
    ],
    [pathname]
  );

  return (
    <div className="flex h-screen">
      <div className="hidden md:flex flex-col gap-y-2 bg-black w-[300px] pl-2 pt-2 pb-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {map(links, (item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <LibraryContent />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto p-2">{children}</main>
    </div>
  );
}

export default MainSidebar;
