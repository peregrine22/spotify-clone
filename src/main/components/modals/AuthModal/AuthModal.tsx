'use client';

import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  useSessionContext,
  useSupabaseClient
} from '@supabase/auth-helpers-react';

import { Modal } from '../Modal';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useAuthModal } from '../hooks/useAuthModal';

const authAppearance = {
  theme: ThemeSupa,
  variables: {
    default: {
      colors: {
        brand: '#404040',
        brandAccent: '#f59e0b'
      }
    }
  }
};

function AuthModal() {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, onClose, router]);

  const handleOnChangeModal = useCallback<(open: boolean) => void>(
    (open) => {
      if (!open) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <Modal
      title="Welcome back!"
      description="Login to your account"
      isOpen={isOpen}
      onChange={handleOnChangeModal}
    >
      <Auth
        providers={['github']}
        magicLink
        theme="dark"
        supabaseClient={supabaseClient}
        appearance={authAppearance}
      />
    </Modal>
  );
}

export default AuthModal;
