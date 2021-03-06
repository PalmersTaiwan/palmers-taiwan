import Link from 'next/link'
import ReviewStars from '@/components/product/review-stars'
import { CMS_URL } from '@/lib/constants'

export default function ProductDescriptions({ product }) {
  let collection = product?.collections[0].name;
  let sku = product?.sku;

  let w_url = '/where-to-buy' //'/collections/' + collection + '/' + sku + '/where-to-buy';
  return (
    <div className="flex-wrap">
      <div className="text-pmbrown-800 font-bold text-5xl p-2 mt-2">{product.name}</div>
      <div className="text-gray-600 text-2xl px-2">{product.name_en}</div>
      <div className="text-2xl font-bold p-2 mt-4">商品簡介</div>
      <div className="text-pmbrown-700 text-xl p-2">{product.description}</div>
      <div className="text-pmbrown-700 p-2">
        <span className="">產品容量: </span>
        <span className="">{product.measurement}</span>
      </div>
      <div className="p-2 mt-2">
        <span>售價: </span>
        <span className="p-2">{product.price} NTD</span>
      </div>
      <div className="flex p-2">
        <ReviewStars rating={product?.rating} /><span className="text-sm px-2"> {product?.review} 評分</span>
      </div>
      <div className="px-2">
        <Link href={w_url} passHref>
          <button className="bg-pmbrown-300 text-gray-100 rounded-md p-2 m-2 cursor-pointer hover:bg-pmbrown-100 lg:mt-10">哪裡購買</button>
        </Link>
      </div>
    </div>
  )
}