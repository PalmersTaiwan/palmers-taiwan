import Link from 'next/link'
import { useState } from 'react'

export default function DropdownMore({ categories, collections }) {
  let [menu, setMenu] = useState(false);

  let menuClass = (menu ? "transition ease-in duration-150 opacity-100 translate-y-0 " : "transition ease-out duration-200 opacity-0 translate-y-1 ")
  return (
    <>
      <div class="relative">
        <button type="button" onClick={() => setMenu(menu = !menu)} class="group text-gray-500 focus:text-gray-900 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
          <span>More</span>
          <svg class="text-gray-400 focus:text-gray-600 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <button onClick={() => setMenu(false)} className={(menu ? " " : "hidden ") + "fixed top-0 right-0 bottom-0 left-0 h-full w-full focus:outline-none"}></button>
        {/* <!--
        'More' flyout menu, show/hide based on flyout menu state.

        Entering: "transition ease-out duration-200"
          From: "opacity-0 translate-y-1"
          To: "opacity-100 translate-y-0"
        Leaving: "transition ease-in duration-150"
          From: "opacity-100 translate-y-0"
          To: "opacity-0 translate-y-1"
      --> */}
        <div class={menuClass + "absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"}>
          <div class="rounded-lg shadow-lg">
            <div class="rounded-lg shadow-xs overflow-hidden">
              <div class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a href="#" class="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                  <p class="text-base leading-6 font-medium text-gray-900">
                    Blog
                        </p>
                  <p class="text-sm leading-5 text-gray-500">
                    Learn about tips, product updates and company culture.
                        </p>
                </a>
                <a href="#" class="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                  <p class="text-base leading-6 font-medium text-gray-900">
                    Help Center
                        </p>
                  <p class="text-sm leading-5 text-gray-500">
                    Get all of your questions answered in our forums of contact support.
                        </p>
                </a>
                <a href="#" class="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                  <p class="text-base leading-6 font-medium text-gray-900">
                    Guides
                        </p>
                  <p class="text-sm leading-5 text-gray-500">
                    Learn how to maximize our platform to get the most out of it.
                        </p>
                </a>
                <a href="#" class="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                  <p class="text-base leading-6 font-medium text-gray-900">
                    Events
                        </p>
                  <p class="text-sm leading-5 text-gray-500">
                    Check out webinars with experts and learn about our annual conference.
                        </p>
                </a>
                <a href="#" class="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                  <p class="text-base leading-6 font-medium text-gray-900">
                    Security
                        </p>
                  <p class="text-sm leading-5 text-gray-500">
                    Understand how we take your privacy seriously.
                        </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
