import { useSupabaseClient } from '@supabase/auth-helpers-react';

import { useQuery } from '@tanstack/react-query';
import { fetchSongs } from '../../queries/fetchSongs.query';
import { Song } from '../../types';
import useSWR from 'swr';

function useSongs() {
  const client = useSupabaseClient<Song>();
  const key = ['songs'];

  const { data, isLoading, error } = useSWR(key, async () => {
    return fetchSongs(client).then((result) => result.data);
  });

  return {
    songs: data,
    isLoading,
    error
  };
}

export default useSongs;
