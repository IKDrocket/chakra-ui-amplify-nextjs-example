import '@aws-amplify/ui-react/styles.css';

import { translations, withAuthenticator } from '@aws-amplify/ui-react';
import { ChakraProvider } from '@chakra-ui/react';
import { Amplify, I18n } from 'aws-amplify';
import type { AppProps } from 'next/app';

I18n.putVocabularies(translations);
I18n.setLanguage('ja');

I18n.putVocabularies({
  ja: {
    'Sign In': 'サインイン',
    'Sign Up': 'サインアップ',
  },
});
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Layout } from '@/components/Layout';

import config from '../aws-exports';
Amplify.configure(config);

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

// @ts-ignore
export default withAuthenticator(MyApp);
