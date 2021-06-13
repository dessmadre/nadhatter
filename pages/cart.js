import useSWR from 'swr';

import fetcher from 'utils/fetcher';

export default function Cart() {
  const { data: cart } = useSWR('/api/cart/getCart', fetcher);

  return (
    <div>
      {cart ? <pre>{JSON.stringify(cart, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
