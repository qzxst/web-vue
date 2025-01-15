<template>
  <header class="min-h-full">
    <Disclosure
      v-slot="{ open }"
      as="nav"
      class="bg-transparent md:bg-gray-800"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                alt="顺晨网络科技公司"
                class="h-[2.4rem]"
                src="../assets/images/web_logo.png"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-baseline space-x-4">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :aria-current="item.current ? 'page' : undefined"
                  :class="[
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-base font-medium',
                  ]"
                  :to="item.href"
                  >{{ item.name }}
                </router-link>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">打开菜单</span>
              <Bars3Icon
                v-if="!open"
                aria-hidden="true"
                class="block h-6 w-6"
              />
              <XMarkIcon v-else aria-hidden="true" class="block h-6 w-6" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-gray-800">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            :aria-current="item.current ? 'page' : undefined"
            :class="[
              item.current
                ? 'bg-gray-900 text-white border-b-2 border-slate-400'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white border-b-2 border-slate-400',
              'block  px-3 py-2 text-sm font-medium ',
            ]"
            as="a"
          >
            <router-link :to="item.href">{{ item.name }}</router-link>
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
  <!-- top-[4rem] absolute w-full -->
</template>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { inject } from "vue";

const props = defineProps({
  // 写法一
  // msg: String
  //写法二
  page: {
    type: String,
    default: "",
  },
  msg: {
    type: String,
    default: "",
  },
});
// console.log(msg);
const navigation = [
  {
    name: "首页",
    href: "/",
    current: props.page == "home",
  },
  { name: "游戏", href: "/game", current: props.page == "game" },
  { name: "了解我们", href: "/about", current: props.page == "about" },
  { name: "加入我们", href: "/join", current: props.page == "join" },
  { name: "动态", href: "/dynamic", current: props.page == "dynamic" },
];
</script>

<style scoped lang="scss"></style>
