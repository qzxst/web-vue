<template>
  <div
    class="footer min-h-[14rem] bg-gray-700 text-center p-4 text-white text-sm md:text-base"
  >
    <img :src="imgUrl" alt="" class="h-8 m-auto mt-2 mb-2" />
    <ul class="flex justify-items-center justify-center items-center gap-2">
      <li>
        <router-link to="/dispute">纠纷处理</router-link>
      </li>
      <li class="">|</li>
      <li>
        <router-link to="/agreement">用户协议</router-link>
      </li>
      <li class="">|</li>
      <li>
        <router-link to="/technical">技术安全保障措施</router-link>
      </li>
      <li class="">|</li>
      <li>
        <router-link to="/privacy">隐私协议</router-link>
      </li>
    </ul>
    <p>{{ foot.notice }}</p>
    <p>{{ foot.notice1 }}</p>
    <p>{{ foot.notice2 }}</p>
    <p>{{ foot.Copyright }}</p>
    <p>{{ foot.tel }} {{ foot.email }}</p>
    <p>{{ foot.address }}</p>
    <p>{{ foot.icp }}</p>
    <!--    <el-button @click="cl">点击</el-button>-->
    <!-- <p v-for="(item, index) in foot" :key="index">{{ item }}</p> -->
  </div>
</template>

<script lang="ts" setup>
import server from "@/api/server";
import "../api/mockjs";
import { onMounted, ref, watch, watchEffect } from "vue";

// const counter = useCounterStore();
// //定义响应式数据
// counter.count++;
// counter.$patch({count: counter.count + 1});
// counter.increment();
// counter.increment();

//定义方法

type FooterProps = {
  Copyright: string;
  address: string;
  tel: string;
  email: string;
  icp: string;
  record: string;
  logo: string;
  qrcode: string;
  notice: string;
  notice1: string;
  notice2: string;
};
const imgUrl = ref("");
const foot = ref<FooterProps>({
  Copyright: "",
  notice: "",
  address: "",
  tel: "",
  email: "",
  icp: "",
  record: "",
  logo: "",
  qrcode: "",
  notice1: "",
  notice2: "",
});
onMounted(async () => {
  await server.post("/api/get/footer").then((res: any) => {
    foot.value = res.data;
    imgUrl.value = new URL(foot.value.logo, import.meta.url).href;
  });
});

// watch(
//   () => foot.value,
//   (newVal) => {
//     console.log("---------", newVal);
//   }
// );
// watchEffect(() => {
//   console.log("--------", foot.value, imgUrl.value);
// });
</script>

<style scoped lang="scss">
.footer {
}
</style>
