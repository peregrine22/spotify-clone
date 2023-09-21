import { useCallback, useMemo } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { PostgrestError } from '@supabase/supabase-js';
import useSWR from 'swr';

import { fetchSongs } from '../../queries/fetchSongs.query';

import { Song } from '../../types';

type FetchSongsSupabaseResponse = {
  data?: Song[] | null;
  error?: PostgrestError | null;
};

function useSongs() {
  const client = useSupabaseClient<Song>();
  const key = ['songs'];

  const handleQuery = useCallback<
    () => Promise<FetchSongsSupabaseResponse>
  >(async () => {
    const response = await fetchSongs(client);

    return response;
  }, [client]);

  const { data, isLoading, error } = useSWR<
    FetchSongsSupabaseResponse,
    PostgrestError | null
  >(key, handleQuery);

  const fetchedSongs = useMemo<Song[]>(() => {
    return data?.data || [];
  }, [data]);

  return {
    songs: fetchedSongs,
    songsLoading: isLoading,
    songsError: error
  };
}

export default useSongs;
