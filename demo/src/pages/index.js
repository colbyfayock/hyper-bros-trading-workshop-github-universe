import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Fuse from 'fuse.js'

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import products from '@data/products.json';

import styles from '@styles/Home.module.scss'

export default function Home() {
  const [query, setQuery] = useState();

  let activeProducts = products;

  const fuse = new Fuse(activeProducts, {
    keys: [
      'title',
      'allegiance'
    ]
  });

  if ( query ) {
    const results = fuse.search(query);
    activeProducts = results.map(({ item }) => item);
  }

  function handleOnSearch(event) {
    const value = event.currentTarget.value;
    setQuery(value);
  }

  return (
    <Layout>
      <Head>
        <title>Hyper Bros Trading</title>
        <meta name="description" content="Your favorite trading cards delivered!" />
      </Head>

      <Container>
        <h1 className="sr-only">Hyper Bros. Trading Cards</h1>

        <div className={styles.discover}>
          <div className={styles.search}>
            <h2>Search</h2>
            <form>
              <input onChange={handleOnSearch} type="search" />
            </form>
          </div>
        </div>

        <h2 className="sr-only">Available Cards</h2>
        <ul className={styles.products}>
          {activeProducts.map(product => {
            return (
              <li key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <a>
                    <div className={styles.productImage}>
                      <Image width="864" height="1200" src={product.image} alt={product.title} />
                    </div>
                    <h3 className={styles.productTitle}>
                      { product.title }
                    </h3>
                    <p className={styles.price}>
                      ${ product.price }
                    </p>
                  </a>
                </Link>
                <p>
                  <Button
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-url={`/product/${product.id}`}
                    data-item-image={product.image}
                    data-item-name={product.title}
                  >
                    Add to Cart
                  </Button>
                </p>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}