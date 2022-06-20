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

type MyAppProps = {
  Component: React.ComponentType<any>;
  pageProps: any;
};

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{config.text.appName}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="shortcut icon" href="/assets/images/banner.png" type="image/png/ico" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
};

export default globalStore.wrapperStore.withRedux(MyApp);
