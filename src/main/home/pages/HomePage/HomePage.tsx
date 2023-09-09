'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { Header } from '../../../components/Header';
import { ListItem } from '../../../components/ListItem';
import { useCurrentUser } from '../../../../auth/hooks/useCurrentUser';

function HomePage() {
  const router = useRouter();
  const { user } = useCurrentUser();

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
        <div>List of Songs</div>
      </div>
    </div>
  );
}

export default HomePage;
