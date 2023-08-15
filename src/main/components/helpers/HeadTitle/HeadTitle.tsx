import React from 'react';
import Head from 'next/head';

interface HeadTitleProps {
  text: string;
}

function HeadTitle({ text }: HeadTitleProps) {
  return (
    <Head>
      <title>{text}</title>
    </Head>
  );
}

export default HeadTitle;
