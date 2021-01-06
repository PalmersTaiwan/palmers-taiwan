import Link from 'next/link'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function CardRelatedProduct({ product }) {
  let images = product?.images[0];
  let imgUrl = images ? CMS_URL + images.formats.medium.url.replace("", "") : "https://via.placeholder.com/550x550"

  let collection = product?.collections[0].name;
  let name = product?.name;
  let name_en = product?.name_en;
  let sku = product?.sku;

  let c_url = '/collections/' + collection;
  let p_url = '/collections/' + collection + '/' + sku;
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 my-3 px-3">
      <div className="relative w-72 shadow-lg bg-white">
        <picture className="block cursor-pointer bg-gray-200">
          <Link href={p_url} passHref>
            <img className="block" src={imgUrl} alt=""></img>
          </Link>
        </picture>
        <div className="p-4 mt-2 text-center">
          <Link href={p_url} passHref>
            <h2 className="text-lg font-bold cursor-pointer text-pmbrown-500 truncate">{name}</h2>
          </Link>
          <Link href={p_url} passHref>
            <div className="text-gray-500 mt-1 text-xs cursor-pointer truncate">{name_en}</div>
          </Link>
          <Link href={c_url} passHref>
            <h3 className="text-pmbrown-400 font-bold mt-2 text-base cursor-pointer truncate">{collection}</h3>
          </Link>
          <Link href={p_url} passHref>
            <button className="bg-pmbrown-200 text-white rounded-md p-1 px-2 mt-4 m-2 hover:bg-pmbrown-100">Learn More</button>
          </Link>

          <div className="mt-4 flex justify-between item-baseline">
            <div className="">
              <span className="text-pmbrown-700 text-xs">NTD$ </span>
              <span className="text-pmbrown-500">{product?.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


/*
<div className="m-2 cursor-default shadow-lg border-1 bg-white overflow-hidden">
      <div className="relative" style={{ paddingBottom: "114%" }}>
        <Link href={p_url} passHref>
          <img className="absolute p-6 cursor-pointer md:p-0 object-cover" src={imgUrl} alt=""></img>
        </Link>
      </div>
      <div className="p-4 mt-4">
        <Link href={p_url} passHref>
          <h2 className="text-lg font-bold cursor-pointer text-pmbrown-500 truncate">{name}</h2>
        </Link>
        <Link href={p_url} passHref>
          <div className="text-gray-500 mt-1 text-xs cursor-pointer truncate">{name_en}</div>
        </Link>
        <Link href={c_url} passHref>
          <h3 className="text-pmbrown-400 font-bold mt-2 text-base cursor-pointer truncate">{collection}</h3>
        </Link>
        <Link href={p_url} passHref>
          <button className="bg-pmbrown-200 text-white rounded-md p-1 px-2 mt-4 m-2 hover:bg-pmbrown-100">Learn More</button>
        </Link>

        <div className="mt-4 flex justify-between item-baseline">
          <div className="">
            <span className="text-pmbrown-700 text-xs">NTD$ </span>
            <span className="text-pmbrown-500">{product?.price}</span>
          </div>
          <div className="">

          </div>
        </div>
      </div>
    </div>

*/