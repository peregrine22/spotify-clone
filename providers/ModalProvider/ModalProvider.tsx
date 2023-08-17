'use client';

import React, { useEffect, useState } from 'react';
import { AuthModal } from '../../src/main/components/modals/AuthModal';

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
    </>
  );
}

export default ModalProvider;
