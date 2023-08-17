'use client';

import { Toaster } from 'react-hot-toast';

const toasterOptions = {
  style: {
    background: '#333',
    color: '#fff'
  }
};

function ToasterProvider() {
  return <Toaster toastOptions={toasterOptions} />;
}

export default ToasterProvider;
