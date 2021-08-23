import type { AppProps } from 'next/app'
import Provider from 'components/Provider';
import '../styles/globals.css'
import Cursor from 'components/Cursor';
import { CursorContextProvider } from 'context/cursor';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <CursorContextProvider>
        <Component {...pageProps}/>
        <Cursor/>
      </CursorContextProvider>
    </Provider>
  )
}
export default MyApp
