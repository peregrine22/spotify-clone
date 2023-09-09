'use client';

import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  useSessionContext,
  useSupabaseClient
} from '@supabase/auth-helpers-react';

import { Modal } from '../Modal';
import { Auth } from '@supabase/auth-ui-react';

import { useAuthModal } from './hooks/useAuthModal';

function AuthModal() {
  const {
    isOpen,
    handleOnChangeModal,
    supabaseClient,
    authAppearance,
    session,
    router,
    onClose
  } = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, onClose, router]);

  return (
    <Modal
      title="Welcome back!"
      description="Login to your account"
      isOpen={isOpen}
      onChange={handleOnChangeModal}
    >
      <Auth
        providers={['github']}
        theme="dark"
        supabaseClient={supabaseClient}
        appearance={authAppearance}
        magicLink
      />
    </Modal>
  );
}

export default AuthModal;
