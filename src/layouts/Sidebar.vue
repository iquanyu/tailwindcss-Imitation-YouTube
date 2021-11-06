<template>
  <!--aside-->
  <div :class="open ? 'w-60' : 'w-18'"
       class="h-screen bg-white flex items-center flex-col text-gray-600 flex-shrink-0">
    <!-- <div class="w-18 h-screen bg-white flex items-center flex-col text-gray-600 flex-shrink-0"> -->
    <!-- <button class="mt-4">
      <svg xmlns="http://www.w3.org/2000/svg"
           class="h-6 w-6"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button> -->

    <div class="w-full">
      <router-link :to="{ name: 'home' }"
                   :class="open ? 'pl-6' : 'flex-col justify-center'"
                   class="flex items-center hover:bg-gray-100 py-4 w-full">
        <svg xmlns="http://www.w3.org/2000/svg"
             class="h-6 w-6"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span class="text-xs mt-1"
              :class="open ? 'pl-7' : ''">首页</span>
      </router-link>

      <router-link :to="{ name: 'explore' }"
                   :class="open ? 'pl-6' : 'flex-col justify-center'"
                   class="flex items-center hover:bg-gray-100 py-4 w-full">
        <svg xmlns="http://www.w3.org/2000/svg"
             class="h-6 w-6"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span class="text-xs mt-1"
              :class="open ? 'pl-7' : ''">探索</span>
      </router-link>

      <!-- <button class="flex items-center justify-center flex-col hover:bg-gray-100 py-4 w-full">
        <svg xmlns="http://www.w3.org/2000/svg"
             class="h-6 w-6"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
        <span class="text-xs mt-1">消息</span>
      </button>
      <button class="flex items-center justify-center flex-col hover:bg-gray-100 py-4 w-full">
        <svg xmlns="http://www.w3.org/2000/svg"
             class="h-6 w-6"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <span class="text-xs mt-1">媒体库</span>
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: Boolean
  }
}
</script>