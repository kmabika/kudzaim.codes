import type { AppProps } from 'next/app'
import {AnimatePresence,motion} from 'framer-motion'
import Provider from 'components/Provider';
import '../styles/globals.css'
import Cursor from 'components/Cursor'
import { CursorContextProvider } from 'context/cursor'


const pageVariants = {
  pageInitial: {
    opacity: 0
  },
  pageAnimate: {
    backgroundColor: 'transparent',
    opacity: 1
  },
  pageExit: {
    opacity: 0
  }
}

const pageMotionProps = {
  initial: 'pageInitial',
  animate: 'pageAnimate',
  exit: 'pageExit',
  variants: pageVariants
}


function MyApp({ Component, pageProps,router }: AppProps) {
  return (
    <Provider>
      <CursorContextProvider>
      <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
       >
         <motion.div key={router.route} {...pageMotionProps}>
          <Component {...pageProps}/>
         </motion.div>
        </AnimatePresence>
        <Cursor/>
      </CursorContextProvider>
    </Provider>
  )
}
export default MyApp
