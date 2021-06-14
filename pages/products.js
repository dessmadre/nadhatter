import useSWR from 'swr';
import { useState } from 'react';
import axios from 'axios';

import Meta from 'components/Meta';
import ProductsList from 'components/ProductList';
import Loader from 'components/Loader';

export default function ProductsPage() {
  const [progress, emitProgress] = useState(0);

  const { data: products } = useSWR('/api/products', (url) => {
    return axios
      .get(url, {
        headers: { 'Access-Control-Allow-Headers': 'content-length' },
        onDownloadProgress: (e) => {
          emitProgress((e.loaded * 100) / e.total);
          console.log(e);
          console.log(e.loaded);
        },
      })
      .then((res) => {
        console.log(res.headers);
        console.log(progress);
        return res.data.data;
      });
  });
  //   axios
  //     .request({
  //       method: 'GET',
  //       url,
  //       onDownloadProgress: (progressEvent) => {
  //         progressEvent.srcElement.getResponseHeader('content-length');
  //         console.log('Progress Event: ', progressEvent);
  //         console.log(
  //           'Progress',
  //           (progressEvent.loaded * 100) / progressEvent.total
  //         );
  //         const percentCompleted = Math.round(
  //           (progressEvent.loaded * 100) / progressEvent.total
  //         );
  //         emitProgress(percentCompleted);
  //       },
  //     })
  //     .then((res) => {
  //       return res.data.data;
  //     })
  // );

  return (
    <>
      <Meta title='NAD Hats | Shop' />
      {/* <Loader progress={emitProgress} /> */}
      <h1 className='text-7xl font-bold lowercase'>Products</h1>
      {products ? <ProductsList products={products} /> : <p>Loading...</p>}
    </>
  );
}
