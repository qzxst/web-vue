<template>
  <div class="my-8 px-6 md:px-16">
    <div
      class="flex justify-between justify-items-center items-center mb-4 h-[2rem] py-1"
    >
      <img
        class="h-full md:visible invisible w-[80%]"
        src="@/assets/images/GAME.png"
      />
      <router-link class="flex items-center justify-items-center" to="/game">
        <div>更多</div>
        <i class="triangle"></i>
      </router-link>
    </div>
    <div class="grid md:grid-flow-col md:gap-[10rem]">
      <div
        v-for="item in topic_games"
        class="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <div class="">
          <img :alt="item.title" :src="item.img" class="rounded-t-lg w-full" />
          <div class="p-4">
            <h2 class="text-xl font-semibold">{{ item.title }}</h2>
            <p class="text-gray-600">{{ item.desc }}</p>
            <div class="flex justify-between items-center mt-4">
              <router-link
                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                to="/game"
              >
                了解更多
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(["topic_games"]);
</script>

<style scoped>
.triangle {
  @apply w-0 h-0 border-t-[0.8rem] border-b-[0.8rem] border-l-[0.8rem] border-r-[0.8rem] border-solid border-transparent border-l-red-600  translate-x-[0.8rem];
}
</style>
