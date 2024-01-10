import React, { ComponentType } from 'react';
import '@/styles/index.css';
import '../uno.css';

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: ComponentType<any>;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}
