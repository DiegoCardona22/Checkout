/* eslint-disable react/jsx-props-no-spreading */
// @packages
import Head from 'next/head';

// @scripts
import MainLayout from 'components/templates/main-layout';
import { config } from 'src/config';
import { store as globalStore } from 'src/core';

// @styles
import 'src/styles/_variables.scss';
import 'src/styles/global.scss';

const MyApp = (props: any) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{config.text.appName}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
};

export default globalStore.wrapperStore.withRedux(MyApp);
