'use client';

import React from 'react';

import { useCurrentUser } from '../../../../auth/hooks/useCurrentUser';
import { useSongs } from '../../../hooks/useSongs';

import { Header } from '../../../components/Header';
import { ListItem } from '../../../components/ListItem';
import { SongsList } from '../../../library/components/SongsList';

export const revalidate = 0;

function HomePage() {
  const user = useCurrentUser();
  const { songs, songsLoading, songsError } = useSongs();

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        {user ? (
          <div className="mb-2">
            <h1 className="text-white text-3xl font-semibold">Welcome Back!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
              <ListItem
                image="/images/liked.png"
                name="Liked Songs"
                href="/liked"
              />
            </div>
          </div>
        ) : null}
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white  text-2xl font-semibold">
            Latest Releases
          </h1>
        </div>
        {songsLoading ? (
          <span>Loading...</span>
        ) : (
          <div>
            <SongsList songs={songs} />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
