'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft } from 'react-icons/rx';
import { RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';

import { IconButtonHelper } from '../helpers/IconButtonHelper';
import { ButtonHelper } from '../helpers/ButtonHelper';

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

function Header({ children, className }: HeaderProps) {
  const router = useRouter();
  const handleLogout = () => {
    //todo: handle user logout
  };

  return (
    <div
      className={twMerge(
        'h-fit bg-gradient-to-b from-amber-600 p-6',
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <IconButtonHelper icon={RxCaretLeft} onClick={() => router.back()} />
          <IconButtonHelper
            icon={RxCaretRight}
            onClick={() => router.forward()}
          />
        </div>

        <div className="flex md:hidden gap-x-2 items-center">
          <IconButtonHelper
            buttonClassName="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
            iconClassName="text-black"
            icon={HiHome}
            iconSize={20}
            onClick={() => {}}
          />

          <IconButtonHelper
            buttonClassName="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
            iconClassName="text-black"
            icon={BiSearch}
            iconSize={20}
            onClick={() => {}}
          />
        </div>

        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <ButtonHelper
                className="bg-transparent text-neutral-300 font-medium"
                onClick={() => {}}
              >
                Sign up
              </ButtonHelper>
            </div>
            <div>
              <ButtonHelper className="bg-white px-6 py-2" onClick={() => {}}>
                Log in
              </ButtonHelper>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Header;
