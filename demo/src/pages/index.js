import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import products from '@data/products.json';

import styles from '@styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hyper Bros Trading</title>
        <meta name="description" content="Your favorite trading cards delivered!" />
      </Head>

      <Container>
        <h1 className="sr-only">Hyper Bros. Trading Cards</h1>

        <h2 className="sr-only">Available Cards</h2>
        <ul className={styles.products}>
          {products.map(product => {
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