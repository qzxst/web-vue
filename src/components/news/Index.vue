<script setup lang="ts"></script>

<template>
  <div class="news">
    <section class="">
      <h1 class="text-4xl font-bold">News</h1>
      <p class="text-xl">This is the news page</p>
      <!--      上一页 下一页-->
      <div class="flex flex-row items-center justify-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          上一篇
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
        >
          下一篇
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.news {
  @apply flex flex-col items-center justify-center h-screen;
}
</style>
