<template>
  <div class="my-8 px-6 md:px-16">
    <div
      class="flex justify-between justify-items-center items-center mb-4 h-[2rem] py-3"
    >
      <img
        class="h-[40px] md:block hidden"
        src="@/assets/images/DYNAMIC.png"
      />
      <router-link class="flex items-center justify-items-center" to="/dynamic">
        <div>更多</div>
        <div class="triangle"></div>
      </router-link>
    </div>
    <div class="grid md:grid-flow-col grid-cols-auto gap-4">
      <div
        v-for="item in topic_news"
        class="bg-white rounded-lg shadow-md cursor-pointer"
      >
        <router-link to="/dynamic">
          <img :alt="item.title" :src="item.img" class="w-full rounded-t-lg" />
          <div class="p-2 h-[6rem] bg-gray-700 text-white">
            <h2 class="text-xl font-semibold">{{ item.title }}</h2>
            <div class="text-gray-400 text-sm mt-2">
              <p>顺晨网络</p>
              <p>
                {{ item.ctime }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(["topic_news"]);
</script>

<style scoped>
.triangle {
  @apply w-0 h-0 border-t-[0.8rem] border-b-[0.8rem] border-l-[0.8rem] border-r-[0.8rem] border-solid border-transparent border-l-red-600  translate-x-[0.8rem];
}
</style>
