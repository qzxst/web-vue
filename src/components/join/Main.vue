<template>
  <section class="mt-[2rem]">
    <div class="px-[2rem] md:px-[4rem]">
      <h1 class="text-center text-3xl font-bold">社会招聘</h1>
      <div class="relative flex items-center justify-items-center">
        <div class="h-[2px] bg-red-500 w-full" />
        <div class="text-red-500 text-2xl font-bold">RECRUIT</div>
        <div class="h-[2px] bg-red-500 w-full" />
      </div>
    </div>
    <ol
      v-if="RECRUIT.length > 0"
      class="grid grid-cols-2 gap-2 p-[2rem] md:p-[4rem] md:grid-cols-4 md:gap-4"
    >
      <li
        v-for="item in RECRUIT"
        class="p-1 grid justify-items-center text-center"
      >
        <a :href="item.href" :target="item.target">
          <img :src="item.icon" alt="" class="" />
          <p>{{ item.title }}</p>
          <p>{{ item.content }}</p>
        </a>
      </li>
    </ol>
    <div
      class="text-center text-red-500 text-2xl font-bold flex justify-center items-center"
      v-else
    >
      暂无数据
    </div>
    <div class="px-[2rem] md:px-[4rem]">
      <h1 class="text-center text-3xl font-bold">联系我们</h1>
      <div class="w-full relative flex items-center justify-items-center">
        <div class="h-[2px] w-full bg-red-500" />
        <div class="text-red-500 text-2xl font-bold">COOPERATION</div>
        <div class="w-full h-[2px] bg-red-500" />
      </div>
    </div>
    <ol
      v-if="COOPERATION.length > 0"
      class="grid grid-cols-2 gap-2 p-[2rem] md:p-[4rem] md:grid-cols-3 md:gap-4"
    >
      <li
        v-for="item in COOPERATION"
        class="grid justify-items-center text-center gap-4"
      >
        <img :src="item.icon" alt="" class="" />
        <p>{{ item.title }}</p>
        <p>{{ item.CONTACT }}</p>
        <p>{{ item.QQ }}</p>
      </li>
    </ol>
    <div
      class="min-h-[100px] text-center text-red-500 text-2xl font-bold flex justify-center items-center"
      v-else
    >
      暂无数据
    </div>
  </section>
</template>

<script lang="ts" setup>
const COOPERATION = [
  {
    QQ: "QQ：3492825144",
    title: "产品合作",
    icon: "https://www.shunchenkj.com/static/imgs/产品合作.png",
    CONTACT: "联系人：JR",
  },
  {
    QQ: "QQ：3492825144",
    title: "渠道合作",
    icon: "https://www.shunchenkj.com/static/imgs/渠道合作.png",
    CONTACT: "联系人：LY",
  },
  {
    QQ: "QQ：2881309227",
    title: "官方客服",
    icon: "https://www.shunchenkj.com/static/imgs/官方客服.png",
    CONTACT: "",
  },
];
const RECRUIT = [
  {
    title: "运营",
    icon: "https://www.shunchenkj.com/static/imgs/运营.png",
    content: "运营",
    target: "_blank",
    href: "https://www.zhipin.com/gongsi/job/f1d45f8c0200c26f1XR-3d65F1M~.html",
  },
  {
    title: "商务",
    icon: "https://www.shunchenkj.com/static/imgs/商务.png",
    target: "_blank",
    content: "商务",
    href: "https://www.zhipin.com/gongsi/job/f1d45f8c0200c26f1XR-3d65F1M~.html",
  },
  {
    title: "技术",
    icon: "https://www.shunchenkj.com/static/imgs/技术.png",
    target: "_blank",
    content: "技术",
    href: "https://www.zhipin.com/gongsi/job/f1d45f8c0200c26f1XR-3d65F1M~.html",
  },
  {
    title: "传媒",
    icon: "https://www.shunchenkj.com/static/imgs/传媒.png",
    target: "_blank",
    content: "传媒",
    href: "https://www.zhipin.com/gongsi/job/f1d45f8c0200c26f1XR-3d65F1M~.html",
  },
  {
    title: "设计",
    icon: "https://www.shunchenkj.com/static/imgs/设计.png",
    target: "_blank",
    content: "设计",
    href: "https://www.zhipin.com/gongsi/job/f1d45f8c0200c26f1XR-3d65F1M~.html",
  },
  {
    title: "美术",
    icon: "https://www.shunchenkj.com/static/imgs/美术.png",
    target: "_blank",
    content: "美术",
    href: "https://www.zhipin.com/gongsi/job/f1d45f8c0200c26f1XR-3d65F1M~.html",
  },
  {
    title: "商务",
    icon: "https://www.shunchenkj.com/static/imgs/商务.png",
    content: "商务",
    target: "_blank",
    href: "https://www.zhipin.com/gongsi/job/f1d45f8c0200c26f1XR-3d65F1M~.html",
  },
  {
    title: "海外",
    icon: "https://www.shunchenkj.com/static/imgs/海外.png",
    target: "_blank",
    content: "海外",
    href: "https://www.zhipin.com/gongsi/job/f1d45f8c0200c26f1XR-3d65F1M~.html",
  },
];
</script>

<style scoped></style>
