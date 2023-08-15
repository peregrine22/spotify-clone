import React from 'react';
import { AppProps } from 'next/app';
import { ErrorProps } from 'next/error';
import { RootLayout } from '../app/AppLayout/RootLayout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps, err }: AppProps & { err: ErrorProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} err={err} />
    </RootLayout>
  );
}

export default MyApp;
