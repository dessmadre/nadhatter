import { useRef, useEffect, useState } from 'react';

import Link from 'next/link';

import Product from './Product';

export default function ProductGrid({ products }) {
  const gridRef = useRef(null);
  const product2 = useRef(null);
  const product5 = useRef(null);
  const product8 = useRef(null);
  const product11 = useRef(null);

  const handleScroll = () => {
    const offsetY = window.pageYOffset;

    product2.current.style.transform = `
    translateY(${offsetY * 0.095}px)
    `;
    product5.current.style.transform = `
    translateY(${offsetY * 0.1}px)
    `;
    product8.current.style.transform = `
    translateY(${offsetY * 0.1}px)
    `;
    product11.current.style.transform = `
    translateY(${offsetY * 0.1}px)
    `;
  };
  useEffect(() => {
    product2.current = gridRef.current.children[1];
    product5.current = gridRef.current.children[4];
    product8.current = gridRef.current.children[7];
    product11.current = gridRef.current.children[10];

    console.log(typeof window.innerWidth);
    console.log('Window size:', window.innerWidth);

    if (window.innerWidth >= 900) {
      window.addEventListener('scroll', handleScroll, false);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, []);

  if (!products) return null;

  return (
    <section className='productgrid' ref={gridRef}>
      {products &&
        products.map((product) => (
          <figure key={product.permalink} className='product'>
            <Link href={`/products/${product.permalink}`}>
              <a>
                <Product
                  img={product.media.source}
                  name={product.name}
                  price={product.price.formatted_with_symbol}
                />
              </a>
            </Link>
          </figure>
        ))}
    </section>
  );
}
