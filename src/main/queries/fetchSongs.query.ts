import { SupabaseClient } from '@supabase/auth-helpers-react';

import { Song } from '../types';

export function fetchSongs(client: SupabaseClient<Song>) {
  return client
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false });
}
