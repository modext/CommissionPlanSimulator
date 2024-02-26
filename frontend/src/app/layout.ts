import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider i18n={{}}>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
