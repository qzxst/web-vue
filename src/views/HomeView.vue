<script lang="ts" setup>
import Header from "@/components/Header.vue";
import Swiper from "@/components/home/Swiper.vue";
import Game from "@/components/home/Game.vue";
import News from "@/components/home/News.vue";
import Footer from "@/components/Footer.vue";
import { onMounted, provide, reactive, ref } from "vue";
import server from "@/api/server";
import "@/api/home";
import type {
  swiper_games_type,
  topic_games_type,
  topic_news_type,
} from "@/type/home";

const page = ref("home");

provide("msg", "home");
interface Infos {
  swiper_games: swiper_games_type[];
  topic_games: topic_games_type[];
  topic_news: topic_news_type[];
  abc?: "abc" | "cdb";
}
const infos = reactive<Infos>({
  swiper_games: [
    {
      imgPc: new URL("@/assets/images/default-pc.png", import.meta.url).href,
      imgMb: new URL("@/assets/images/default-mb.png", import.meta.url).href,
      name: "test",
      shiling: new URL("@/assets/images/16.png", import.meta.url).href,
    },
  ],
  topic_games: [],
  topic_news: [],
});

const loading = ref(true);
onMounted(async () => {
  await server
    .post("/v1/api/home")
    .then((res: any) => {
      setTimeout(() => {
        loading.value = false;
        infos.swiper_games = res.data.banner;
        infos.topic_games = res.data.games;
        infos.topic_news = res.data.news;
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
<template>
  <Loding v-if="loading" />
  <div v-else>
    <Header :page="page" />
    <Swiper :swiper_games="infos.swiper_games" />
    <Game :topic_games="infos.topic_games" />
    <News :topic_news="infos.topic_news" />
    <Footer></Footer>
  </div>
</template>
<style scoped>
/* body{
  @apply md:min-w-[600px] min-w-[300px]
} */
</style>
