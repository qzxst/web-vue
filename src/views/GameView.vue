<script lang="ts" setup>
import Header from "@/components/Header.vue";
import { onMounted, provide, ref } from "vue";
import Footer from "@/components/Footer.vue";
import server from "@/api/server";

const page = ref("game");
provide("msg", "game");
const games = ref<any>([]);

onMounted(async () => {
  await server.get("/api/game.json").then((res) => {
    games.value = res.res;
  });
});
</script>

<template>
  <Header :page="page" />
  <!-- props传值 -->
  <!-- <Banner></Banner> -->
  <!-- <div  >{{}}</div> -->
  <div class="game-banner">
    <div class="hidden md:block">
      <img src="@/assets/images/ourgame_bg_pc.png" />
    </div>
    <div class="md:hidden">
      <img src="@/assets/images/ourgame_bg_mb.png" />
    </div>
  </div>
  <div class="game-list my-8 px-6 md:px-16">
    <div class="grid md:grid-rows-2 md:grid-flow-col gap-10 md:gap-[4rem]">
      <!-- 使用grid -->
      <div
        v-for="game in games.lists"
        class="p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <img :alt="game.title" :src="game.img" class="w-full rounded-t-lg" />
        <div class="p-4">
          <h2 class="text-xl font-semibold">{{ game.title }}</h2>
          <p class="text-gray-600">
            {{ game.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped></style>
