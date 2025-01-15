<template>
  <div class="swiper-wrap">
    <swiper
      :autoplay="swiper_config.autoplay"
      centeredSlides
      :modules="modules"
      :slidesPerView="swiper_config.slidesPerView"
      :spaceBetween="swiper_config.spaceBetween"
      grabCursor
      navigation
    >
      <swiper-slide v-for="item in swiper_games">
        <div class="hidden md:block">
          <img :src="item.shiling" class="w-10 absolute top-2 right-2" />
          <img :src="item.imgPc" class="" />
          <div class="absolute bottom-[3.6rem] text-center left-[10%]">
            <router-link
              class="w-[18rem] inline-flex justify-center rounded-lg text-lg font-semibold py-3 px-4 bg-red-500 text-white hover:bg-slate-700"
              to="/game"
            >
              <span>更多详情</span>
            </router-link>
          </div>
        </div>
        <div class="md:hidden">
          <img :src="item.shiling" class="w-6 absolute top-2 right-2" />
          <img :src="item.imgMb" class="" />
          <div class="absolute text-center bottom-[2rem] inset-x-0 h-4">
            <router-link
              class="w-[18rem] inline-flex justify-center rounded-sm text-sm font-semibold py-2 px-3 bg-red-500 text-white hover:bg-slate-700"
              to="/game"
            >
              <span>更多详情</span>
            </router-link>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/a11y";
import type { home_type, home_config } from "@/type/home";

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];
defineProps({
  swiper_games: {
    type: Array as () => home_type[],
    default: () => [],
  },
  swiper_config: {
    type: Object as () => home_config,
    default: {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        clickable: true,
      },
    },
  },
});
</script>

<style scoped></style>
