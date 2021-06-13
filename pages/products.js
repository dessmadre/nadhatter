import useSWR from 'swr';
import { useState } from 'react';

import Meta from 'components/Meta';
import fetcher from 'utils/fetcher';
import ProductsList from 'components/ProductList';
import axios from 'axios';

export default function ProductsPage() {
  const [progress, emitProgress] = useState(null);

  const { data: products } = useSWR('/api/products', (url) =>
    axios
      .request({
        method: 'GET',
        url,
        onDownloadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          emitProgress(percentCompleted);
        },
      })
      .then((res) => {
        return res.data.data;
      })
  );

  return (
    <>
      <Meta title='NAD Hats | Shop' />
      <h1 className='text-7xl font-bold lowercase'>Products</h1>
      {products ? <ProductsList products={products} /> : <p>Loading...</p>}
    </>
  );
}
