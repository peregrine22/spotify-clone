'use client';

import React from 'react';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

import { Song } from '../../types';

import { SongListItem } from '../SongListItem';

interface SongsListProps {
  songs: Song[];
}

function SongsList({ songs }: SongsListProps) {
  if (isEmpty(songs)) {
    return <div>No songs availabe</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {map(songs, (song) => (
        <SongListItem key={song.id} song={song} onClick={() => {}} />
      ))}
    </div>
  );
}

export default SongsList;
