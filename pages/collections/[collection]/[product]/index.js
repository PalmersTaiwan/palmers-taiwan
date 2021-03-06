import Container from '@/components/container'
import Layout from '@/components/layout'
import { getAppData } from '@/graphql/api_app'
import { getAllProductPaths } from '@/graphql/api_collections'
import { getOneProductDetails, getRelatedProduct } from '@/graphql/api_products'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import CardRelatedProduct from '@/components/product/card-related-product'
import ProductReview from '@/components/product/product-review'
import SectionSeparator from '@/components/section-separator'
import markdownToHtml from '@/lib/markdownToHtml'
import Head from 'next/head'

import CarouselProductImages from '@/components/product/carousel-product-images'
import ProductDescriptions from '@/components/product/product-descriptions'

import Link from 'next/link'


export default function Product({ product, appData }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  const router = useRouter()
  let product_suggestions = product?.product_suggestions;

  if (router.isFallback) {
    return <div className="text-center text-6xl">Loading...</div>
  }

  let imgPlaceholder = {
    url: "https://via.placeholder.com/600",
    alternativeText: "",
    caption: ""
  }
  let [mainImage, setMainImage] = useState(product.images[0] ? product.images[0] : imgPlaceholder);

  useEffect(() => {
    setMainImage(product.images[0])
  })

  return (
    <Layout appData={appData}>
      <Container>
        <Head>
          <title>Palmer's {product.name}</title>
          <meta name="description" content={product.metaDescription}></meta>
        </Head>
        <div className="block bg-white mt-4 md:grid md:grid-cols-2">
          <div className="w-full md:p-2">
            <CarouselProductImages mainImage={mainImage}></CarouselProductImages>
          </div>
          <div className="w-full md:p-2">
            <ProductDescriptions product={product}></ProductDescriptions>
          </div>
        </div>
        <div className="p-4 m-4"></div>
        <div className="text-pmbrown-700 font-bold text-2xl">產品特點</div>
        <hr className="border-accent-2 mt-2 mb-4" />
        <div className="p-2 mb-4">
          {product.feature}
        </div>
        <div className="text-pmbrown-700 font-bold text-2xl">使用方法</div>
        <hr className="border-accent-2 mt-2 mb-4" />
        <div className="p-2">
          {product.uses}
        </div>
        <div className="p-2">
          {product.direction}
        </div>
        <div className="p-2">
          {product.skin_type}
        </div>
        <div className="p-2">
          產地: {product.origin}
        </div>
        <div className="p-2">
          保存期限: {product.expiration}
        </div>
        <div className="p-2 mb-4">
          {product.storage}
        </div>
        <div className="text-pmbrown-700 font-bold text-2xl">注意事項</div>
        <hr className="border-accent-2 mt-2 mb-4" />
        <div className="p-2 mb-4">
          {product.warning}
        </div>

        <div className="text-pmbrown-700 mt-24 font-bold text-2xl">其他展品推薦</div>
        <hr className="border-accent-2 mt-2 mb-4" />
        <div className="flex overflow-x-scroll -mx-2 my-4">
          {
            product_suggestions.map((p, i) => (
              <CardRelatedProduct product={p} key={i} />
            ))
          }
        </div>
        <div className="text-pmbrown-700 mt-24 font-bold text-2xl">產品評價</div>
        <hr className="border-accent-2 mt-2 mb-4" />
        <ProductReview />
      </Container>
    </Layout>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get collections
  const allProductPaths = (await getAllProductPaths()) || []

  // Get the paths we want to pre-render based on collections
  const paths = allProductPaths.map((path) => {
    var p = path?.product;
    var c = path?.collections[0];
    c = c?.name;

    if (p.length > 0 && c !== undefined) {
      return {
        params: {
          product: p,
          collection: c
        }
      }
    }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const appData = (await getAppData()) || []
  let product = (await getOneProductDetails(params)) || {}

  // Pass post data to the page via props
  return {
    props: { appData, product }
  }
}
