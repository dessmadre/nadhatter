import { useEffect } from 'react';
import useSWR from 'swr';

import Link from 'next/link';

import Meta from 'components/Meta';
import ProductGrid from 'components/ProductGrid';

import fetcher from 'utils/fetcher';

export default function ProductsPage() {
  const { data: products } = useSWR('/api/products', fetcher);

  return (
    <main>
      <Meta title='Shop' />
      <Link href='/'>
        <a className='text-3xl font-thin uppercase'>Home</a>
      </Link>
      {/* <Loader progress={emitProgress} /> */}
      <h1
        className='text-9xl font-bold lowercase'
        onClick={(e) => {
          e.preventDefault();
          window.location.reload();
        }}
      >
        Products
      </h1>
      <br className='my-10' />
      <section className='storegrid'>
        {products ? <ProductGrid products={products} /> : <p>Loading...</p>}
      </section>
    </main>
  );
}
