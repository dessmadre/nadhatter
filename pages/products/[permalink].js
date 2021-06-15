import Link from 'next/link';
import Image from 'next/image';

import commerce from 'lib/commercejs';

export default function ProductPage(product) {
  const p = product.product;

  return (
    <>
      <Link href='/products'>
        <a className='text-3xl font-thin uppercase'>&larr; Back</a>
      </Link>
      {product ? (
        <div>
          {/* There is a current issue with node 16 which causes the project 
              to crash when trying to load an image with next-image using Apple M1 chip.
              Only seems to be a problem in development and not in production */}
          {/* <Image src={p.media.source} width={1280} height={720} /> */}
          <img src={p.media.source} />
          <p className='text-6xl font-semibold lowercase'>{p.name}</p>
          <p className='text-4xl font-semibold'>
            {p.price?.formatted_with_symbol}{' '}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}
