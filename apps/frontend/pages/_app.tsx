import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';
import { FC } from 'react';

const CustomApp: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
        <link rel="icon" type={'image'} href="/favicon.ico" />
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default CustomApp;
