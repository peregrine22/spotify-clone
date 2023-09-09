import { Auth } from '@supabase/auth-ui-react';
import React, { useEffect } from 'react';
import { Modal } from '../Modal';
import { useAuthModal } from '../AuthModal/hooks/useAuthModal';

function SignUpModal() {
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
      title="Welcome to Spotify Clone!"
      description="Create your account"
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

export default SignUpModal;
