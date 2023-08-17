'use client';

import React, { ReactNode } from 'react';
import { MyUserContextProvider } from '../../src/auth/hooks/useCurrentUser';

interface UserProviderProps {
  children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
}

export default UserProvider;
