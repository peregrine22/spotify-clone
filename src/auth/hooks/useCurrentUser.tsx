import { User } from '@supabase/auth-helpers-nextjs';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import {
  useSessionContext,
  useUser as useSupabaseUser
} from '@supabase/auth-helpers-react';

import { Subscription, UserDetails } from '../../main/types';

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
  subscription: Subscription | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface UserContextProps {
  [propsName: string]: any;
}

export const MyUserContextProvider = (props: UserContextProps) => {
  const { session, isLoading, supabaseClient } = useSessionContext();

  const user = useSupabaseUser();

  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  const getUserDetails = useCallback(
    () => supabaseClient.from('users').select('*').single(),
    [supabaseClient]
  );

  const getSubscription = useCallback(
    () =>
      supabaseClient
        .from('subscriptions')
        .select('*, prices(*, products(*))')
        .in('status', ['trial', 'active'])
        .single(),
    [supabaseClient]
  );

  useEffect(() => {
    if (user && !isLoadingData && !userDetails && !subscription) {
      setIsLoadingData(true);

      Promise.allSettled([getUserDetails(), getSubscription()]).then(
        (results) => {
          const userDetailsPromise = results[0];
          const subscriptionPromise = results[1];
          if (userDetailsPromise.status === 'fulfilled') {
            setUserDetails(userDetailsPromise.value.data as UserDetails);
          }
          if (subscriptionPromise.status === 'fulfilled') {
            setSubscription(subscriptionPromise.value.data as Subscription);
          }

          setIsLoadingData(false);
        }
      );
    } else if (!user && !isLoadingData && !isLoading) {
      setUserDetails(null);
      setSubscription(null);
    }
  }, [isLoading, user]);

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoading || isLoadingData,
    subscription
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useCurrentUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      'useCurrentUser must be use within a MyUserContextProvider'
    );
  }

  return context.user;
};
