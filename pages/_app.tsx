import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/layouts/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="app-root">
      <Component {...pageProps} />
    </div>
  );
}
