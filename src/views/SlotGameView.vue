<template>
  <div>
    <header>
      <h1>SlotGame</h1>
    </header>
    <main>
      <RoomSelector />
      <SlotMachine />
    </main>
  </div>
</template>

<script lang="ts" setup>
import RoomSelector from "@/components/RoomSelector.vue";
import SlotMachine from "@/components/SlotMachine.vue";
</script>

<style lang="scss" scoped></style>
