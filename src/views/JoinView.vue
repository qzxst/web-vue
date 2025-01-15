<script lang="ts" setup>
import Header from "@/components/Header.vue";
import { provide, ref } from "vue";
import Main from "@/components/join/Main.vue";
import Footer from "@/components/Footer.vue";

const page = ref("join");
provide("msg", "join");
</script>

<template>
  <Header :page="page" />
  <div class="join-banner">
    <div class="hidden md:block">
      <img src="@/assets/images/joinus_bg_pc.png" />
    </div>
    <div class="md:hidden">
      <img src="@/assets/images/joinus_bg_mb.png" />
    </div>
  </div>
  <Main></Main>
  <Footer></Footer>
</template>
