// vendors
import { Toaster } from 'react-hot-toast';

// components
import Layout from '@/components/Layout';
import { ModalProvider } from '@/components/Modal/Modal.context';

// styles
import GlobalStyle from '@/styles/global';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <ModalProvider>
        <Layout>
          <Toaster position="bottom-right" />

          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
    </>
  );
}

export default App;
