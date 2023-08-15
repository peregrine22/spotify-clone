'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { ButtonHelper } from '../helpers/ButtonHelper';
import { FaPlay } from 'react-icons/fa';

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}
function ListItem({ image, name, href }: ListItemProps) {
  const router = useRouter();
  const handlePushRoute = () => {
    //todo: add auth before push
    router.push(href);
  };

  return (
    <button
      onClick={handlePushRoute}
      className="relative group flex items-center rounded-md  overflow-hidden gap-x-4 bg-neutral-100/10 cursor-pointer hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" src={image} alt={image} fill />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-amber-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" size={20} />
      </div>
    </button>
  );
}

export default ListItem;
