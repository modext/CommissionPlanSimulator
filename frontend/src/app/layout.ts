// src/pages/_app.tsx
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import type { AppProps } from 'next/app';
import enTranslations from "@shopify/polaris/locales/en.json";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider i18n={enTranslations}>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
