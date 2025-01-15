<script lang="ts" setup>
import { effect, onMounted, provide, ref, watch, watchEffect } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import server from "@/api/server";

const page = ref("about");
interface Activity {
  id: number;
  title: string;
  content: string;
  img: string;
  add_time: string;
  address?: string;
}
const activities = ref<Activity[]>();
onMounted(async () => {
  await server
    .get("/api/get/news", { pagenum: 1, pagesize: 10 })
    .then((res: any) => {
      activities.value = res.list;
    })
    .catch((err: any) => {
      console.log(err);
    });
});
</script>

<template>
  <Header :page="page" />
  <div class="about-banner">
    <div class="hidden md:block">
      <img src="@/assets/images/history_bg_pc.png" />
    </div>
    <div class="md:hidden">
      <img src="@/assets/images/history_bg_mb.png" />
    </div>
  </div>
  <div class="w-full my-6 px-10">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :class="activity.id % 2 === 0 ? 'timeline-left' : 'timeline-right'"
        :timestamp="activity.add_time"
        :center="true"
        class="align-top"
        placement="top"
      >
        <el-card class="">
          <template #header>
            <div
              :class="
                activity.id % 2 === 0 ? 'card-header-left' : 'card-header-right'
              "
            >
              <div
                class="w-full"
                :class="activity.id % 2 === 0 ? 'text-right' : 'text-left'"
              >
                <img
                  class="inline-block"
                  :src="activity.img"
                  :alt="activity.title"
                  :title="activity.title"
                />
              </div>
            </div>
          </template>
          <div>{{ activity.content }}</div>
          <template #footer>{{ activity.address }}</template>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>

  <Footer></Footer>
</template>
<style scoped>
.timeline-right {
  left: 50%;
  width: 50%;
}

/* 左侧`el-timeline-item`的样式，同上，仅是为了方便下面的CSS样式修改 */
.timeline-left {
  left: 50%;
  width: 50%;
}

/* 针对左侧内容修改样式，注意这里使用的scss */
.timeline-left :deep(.el-timeline-item__wrapper) {
  right: 100%;
  padding: 0 19px 0 0;
  text-align: right;
}
</style>
