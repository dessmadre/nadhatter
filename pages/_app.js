import '../styles/globals.css';

import { ThemeProvider } from 'next-themes';

import CartState from 'context/cart/CartState';
import CheckoutState from 'context/checkout/CheckoutState';

function MyApp({ Component, pageProps }) {
  return (
    <CheckoutState>
      <CartState>
        <ThemeProvider attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
      </CartState>
    </CheckoutState>
  );
}

export default MyApp;
