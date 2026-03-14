<template>
  <div class="login-form">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">用户名</label>
        <input
          id="username"
          v-model="credentials.username"
          type="text"
          required
          :disabled="loading"
          placeholder="请输入用户名"
        />
      </div>

      <div class="form-group">
        <label for="password">密码</label>
        <input
          id="password"
          v-model="credentials.password"
          type="password"
          required
          :disabled="loading"
          placeholder="请输入密码"
        />
      </div>

      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <button 
        type="submit" 
        :disabled="loading"
        class="login-button"
      >
        <span v-if="loading">登录中...</span>
        <span v-else>登录</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useAuth } from '@/composables/useAuth';
import type { LoginCredentials } from '@/type/auth';

const { login, loading, error } = useAuth();

const credentials = reactive<LoginCredentials>({
  username: '',
  password: ''
});

const handleSubmit = async () => {
  await login(credentials);
};
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #007bff;
}

input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.error-message {
  color: #dc3545;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover:not(:disabled) {
  background-color: #0056b3;
}

.login-button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
</style>