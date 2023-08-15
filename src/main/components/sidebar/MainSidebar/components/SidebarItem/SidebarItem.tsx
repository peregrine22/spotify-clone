import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
  icon: IconType;
  label: string;
  href: string;
  active?: boolean;
}
function SidebarItem({ icon: Icon, label, href, active }: SidebarItemProps) {
  return (
    <Link
      className={twMerge(
        'flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1',
        active && 'text-white'
      )}
      href={href}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
}

export default SidebarItem;
