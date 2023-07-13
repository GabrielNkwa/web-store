'use client';
import 'swiper/swiper.min.css';
import { Navbar } from '../../components/Navbar/NavBar';
import { theme } from '@/theme';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import AppContextProvider from '../../context/AppContext';
import { Footer } from '../../components/Footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Web Store</title>
        <meta title="description" content="Online Shopping made easy" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="shopping_cart.png"
        />
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <AppContextProvider>
              <Navbar />
              {children}
              <Footer />
            </AppContextProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
