import Head from 'next/head';
import Image from 'next/image';

import Layout from '@components/Layout';
import Header from '@components/Header';
import Container from '@components/Container';
import Button from '@components/Button';

import products from '@data/products.json';

import styles from '@styles/Product.module.scss'

export default function Product({ product }) {
  return (
    <Layout>
      <Head>
        <title>{ product.title }</title>
        <meta name="description" content={`Find ${product.title} at Hyper Bros Trading`} />
      </Head>

      <Container>
        <div className={styles.productWrapper}>
          <div className={styles.productImage}>
            <Image width="864" height="1200" src={product.image} alt={product.title} />
          </div>
          <div className={styles.productContent}>
            <h1>{ product.title }</h1>
            <p className={styles.price}>
              ${ product.price }
            </p>
            <p>
              <Button
                className="snipcart-add-item"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-url="/"
                data-item-image={product.image}
                data-item-name={product.title}
              >
                Add to Cart
              </Button>
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const product = products.find(product => product.id === params.productId);

  return {
    props: {
      product
    }
  }
}

export async function getStaticPaths() {
  const paths = products.map(product => {
    return {
      params: {
        productId: product.id
      }
    };
  });

  return {
    paths,
    fallback: false
  }
}