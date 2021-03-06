
import Link from 'next/link'
import ReviewStars from '@/components/product/review-stars'
import { CMS_URL } from '@/lib/constants'

export default function ProductReview({ product }) {
  return (
    <div className="">
      <div className="flex py-2">
        <div className="px-4">
          <label htmlFor="full_name" className="sr-only">full name</label>
          <input type="text" name="full_name" id="full_name" autoComplete="name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="暱稱" />
        </div>
        <div className="px-4">
          <label htmlFor="email" className="sr-only">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Email" />
        </div>
      </div>
      <div className="p-2 m-2">
        <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" name="message" rows="4" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="評論"></textarea>
          </div>
      </div>
      <div className="px-2 m-2">
        <button className="bg-pmbrown-300 text-gray-100 rounded-md p-2 px-4 cursor-pointer hover:bg-pmbrown-100 lg:mt-10">送出</button>
      </div>
    </div>
  )
}