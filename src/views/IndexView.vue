<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="username">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="password">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
  <!--  登录-->
</template>

<script setup>
import { reactive } from "vue";
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
  username: "",
  password: "",
});
const onSubmit = () => {
  
};
</script>

<style lang="scss" scoped></style>
