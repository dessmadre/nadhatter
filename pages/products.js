import useSWR from 'swr';
import { useState } from 'react';
import Link from 'next/link';

import Meta from 'components/Meta';
import ProductsList from 'components/ProductList';
import Loader from 'components/Loader';
import fetcher from 'utils/fetcher';

export default function ProductsPage() {
  const { data: products } = useSWR('/api/products', fetcher);

  return (
    <>
      <Meta title='NAD Hats | Shop' />
      <Link href='/'>
        <a className='text-3xl font-thin uppercase'>Home</a>
      </Link>
      {/* <Loader progress={emitProgress} /> */}
      <h1 className='text-7xl font-bold lowercase'>Products</h1>
      {products ? <ProductsList products={products} /> : <p>Loading...</p>}
    </>
  );
}
