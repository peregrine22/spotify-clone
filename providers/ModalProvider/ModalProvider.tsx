'use client';

import React, { useEffect, useState } from 'react';
import { AuthModal } from '../../src/main/components/modals/AuthModal';
import { UploadToLibraryModal } from '../../src/main/components/modals/UploadToLibraryModal';

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
      <UploadToLibraryModal />
    </>
  );
}

export default ModalProvider;
