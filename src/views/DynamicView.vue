<script lang="ts" setup>
import Header from "@/components/Header.vue";
import { provide, ref } from "vue";
import Footer from "@/components/Footer.vue";
import News from "@/components/news/Index.vue";

const page = ref("dynamic");
provide("msg", "dynamic");
</script>

<template>
  <Header :page="page" />
  <div class="news-banner">
    <div class="hidden md:block">
      <img src="@/assets/images/banner_jdtf_pc.png" />
    </div>
    <div class="md:hidden">
      <img src="@/assets/images/banner_jdtf_mb.png" />
    </div>
  </div>

  <News></News>
  <Footer></Footer>
</template>
