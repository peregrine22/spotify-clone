'use client';

import React from 'react';

import { Song } from '../../../types';

import { useSongImage } from '../../../hooks/useSongImage';

import Image from 'next/image';
import { PlayButton } from '../PlayButton';

interface SongListItemProps {
  song: Song;
  onClick: (id: string) => void;
}

function SongListItem({ song, onClick }: SongListItemProps) {
  const imagePath = useSongImage({ song });

  return (
    <div
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-2"
      onClick={() => onClick(song.id)}
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={imagePath || '/images/liked.png'}
          alt={song.title}
          fill
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{song.title}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          By {song.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
}

export default SongListItem;
