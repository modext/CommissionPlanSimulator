"use client";
// import { AppProvider } from "@shopify/polaris";
// import "@shopify/polaris/build/esm/styles.css";
// import type { AppProps } from "next/app";

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <AppProvider i18n={{}}>
//       <Component {...pageProps} />
//     </AppProvider>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";
import "@shopify/polaris/build/esm/styles.css";
import { AppProvider } from "@shopify/polaris";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <AppProvider i18n={{}}>
      <div lang="en">
        <body className="{inter.className}">{props.children}</body>
      </div>
    </AppProvider>
  );
}
