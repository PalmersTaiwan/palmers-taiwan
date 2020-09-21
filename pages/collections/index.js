import Container from '@/components/container'
// import { getAllPostsForHome } from '@/lib/api_products'
import { getAllCollections } from '@/lib/api_collections'
import Head from 'next/head'
import CardCollection from '@/components/collection/card-collection'
import Link from 'next/link'

export default function Collections({ allCollections }) {
  
  return (
    <>
      <img className="" src="https://placehold.it/1920x550" alt=""></img>
      <Container>
        <div className="p-2">
        {allCollections.map((collection, i) => (<CardCollection key={i} i={i} collection={collection} />))}
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allCollections = (await getAllCollections(preview)) || []

  return {
    props: { allCollections }
  }
}
