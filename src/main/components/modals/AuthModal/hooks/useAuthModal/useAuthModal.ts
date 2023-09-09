import { useModal } from '../useModal';
import {
  useSupabaseClient,
  useSessionContext
} from '@supabase/auth-helpers-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

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

function useAuthModal() {
  const { onClose, onOpen, isOpen } = useModal();

  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();

  const handleOnChangeModal = useCallback<(open: boolean) => void>(
    (open) => {
      if (!open) {
        onClose();
      }
    },
    [onClose]
  );
  return {
    supabaseClient,
    router,
    session,
    handleOnChangeModal,
    onClose,
    onOpen,
    isOpen,
    authAppearance
  };
}

export default useAuthModal;
