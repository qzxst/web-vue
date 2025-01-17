<script lang="ts" setup>
import Header from "@/components/Header.vue";
import { onMounted, provide, ref } from "vue";
import Footer from "@/components/Footer.vue";
import server from "@/api/server";

const page = ref("game");
interface gamesType {
  data: [
    {
      title: string;
      img: string;
      order: number;
      desc: string;
    }
  ];
}
const games = ref<gamesType>();

provide("msg", "game");

onMounted(async () => {
  await server.get("/api/game.json").then((res) => {
    games.value = res.res;
    visibleSections.value = games.value?.data.map(() => false);
  });
});
const visibleSections = ref<any>([]);
const toggle = (index: number) => {
  visibleSections.value[index] = !visibleSections.value[index];
};
const download = (game: gamesType["data"][number]) => {
  console.log(`下载 ${game.title} 的程序包`);
};
</script>

<template>
  <Header :page="page" />
  <div class="game-banner">
    <div class="hidden md:block">
      <img src="@/assets/images/ourgame_bg_pc.png" />
    </div>
    <div class="md:hidden">
      <img src="@/assets/images/ourgame_bg_mb.png" />
    </div>
  </div>
  <div class="game-list my-8 px-6 md:px-16 relative">
    <div
      class="grid grid-rows-1 grid-flow-row md:grid-rows-2 md:grid-flow-col gap-y-16 gap-x-10"
    >
      <!-- 使用grid -->
      <div
        v-for="(game, index) in games?.data"
        :key="index"
        class="relative rounded-md shadow-md text-[10px] md:text-xl"
      >
        <img :alt="game.title" :src="game.img" class="w-full rounded-md" />
        <div
          class="px-6 w-[39%] absolute flex flex-col md:space-y-4 space-y-2 bottom-[12%]"
        >
          <button @click="toggle(index)" class="bg-gray-500/60 rounded-md">
            礼包码
          </button>
          <button @click="download(game)" class="bg-red-500 rounded-md">
            下载
          </button>
        </div>
        <section
          v-if="visibleSections[index]"
          class="absolute w-[38%] h-full left-[39%] bg-gray-500/90 d top-0"
        >
          <div
            class="flex flex-col justify-center justify-items-center items-center text-center h-full md:space-y-4 space-y-2"
          >
            <span class="text-white font-bold w-[80%]"
              >{{ game.title }}礼包码</span
            >
            <div
              class="bg-white text-gray-800 font-bold py-1 rounded-full px-2 w-[80%]"
            >
              {{ game.desc }}
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped></style>
