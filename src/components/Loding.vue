<template>
  <div class="loading">
    <div class="loading__spinner"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.loading {
  @apply flex justify-center items-center  z-50  bg-black h-[100vh];
  &__spinner {
    @apply w-12 h-12 border-2 border-t-[#3498db] border-solid rounded-full animate-[spin_2s_linear_infinite];
  }
}
</style>
