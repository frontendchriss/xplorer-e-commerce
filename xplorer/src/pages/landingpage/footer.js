import React from "react";

const Footer = () => {
  return (
    <footer class="prtransparent dark:bg-gray-900 p-4">
      <div class="container px-6 py-12 mx-auto">
        <div class="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 class="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl dark:text-white">
            Subscribe our newsletter to get update.
          </h1>

          <div class="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <div class="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              <span>Sign Up Now</span>

              {/* <p>Button goes here</p> */}
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p class="font-semibold text-gray-800 dark:text-white">
              Quick Link
            </p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Home
              </p>
              <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Who We Are
              </p>
              <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Our Philosophy
              </p>
            </div>
          </div>

          <div>
            <p class="font-semibold text-gray-800 dark:text-white">
              Industries
            </p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Retail & E-Commerce
              </p>
              <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Information Technology
              </p>
              <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Finance & Insurance
              </p>
            </div>
          </div>

          <div>
            <p class="font-semibold text-gray-800 dark:text-white">Services</p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Translation
              </p>
              <div class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Proofreading & Editing
              </div>
              <div class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                Content Creation
              </div>
            </div>
          </div>

          <div>
            <p class="font-semibold text-gray-800 dark:text-white">
              Contact Us
            </p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <div class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                +1 728 723 3562
              </div>
              <div class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                info@xplorer.com
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
        <div class="flex flex-col items-center justify-between sm:flex-row">
          <div>
            <h2 className="text-2xl font-semibold">Xplorer</h2>
          </div>

          <p class="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
            © Copyright 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
