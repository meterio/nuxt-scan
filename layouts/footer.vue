<template>
  <footer class="text-gray-600 body-font">
    <div class="container px-5 py-12 mx-auto">
      <div class="flex flex-wrap md:text-left order-first">
        <div class="lg:w-1/2 md:w-1/2 w-full px-4">
          <div
            class="flex-col xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap items-end md:justify-start"
          >
            <a
              class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <img class="h-10 p2" src="~/assets/img/logo.png" />
            </a>
            <p class="text-sm text-gray-500 sm:mt-0 mt-4">
              © 2019 Decentralized Finance Labs inc.
            </p>

            <p class="text-indigo-600">Dowanload Meter Wallet</p>
            <button
              class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Desktop Wallet
            </button>
          </div>
        </div>

        <div class="md:w-1/2 px-4 w-full text-right">
          <div class="flex w-full">
            <div class="md:w-1/2 w-full">
              <nav class="list-none mb-10 space-y-4">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Dashboard</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Blocks</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Transactions</a>
                </li>
              </nav>
            </div>
            <div class="md:w-1/2 w-full">
              <nav class="list-none mb-10 space-y-4">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Validators</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Auctions</a>
                </li>
              </nav>
            </div>
          </div>

          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start md:float-right"
          >
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>