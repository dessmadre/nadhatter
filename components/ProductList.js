import Link from 'next/link';

import Product from './Product';

export default function ProductList({ products }) {
  if (!products) return null;

  // console.log(products.map((product) => product.name));

  const p = () => {};

  return (
    <ul>
      {products.map((product) => (
        <li key={product.permalink}>
          <Link href={`/products/${product.permalink}`}>
            <a>
              <Product
                img={product.media.source}
                name={product.name}
                price={product.price.formatted_with_symbol}
              />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
