import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { AuthState, User } from '@/type/auth';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>(localStorage.getItem('token'));
  const isAuthenticated = computed(() => !!token.value && !!user.value);

  // 登录成功处理
  const loginSuccess = (userData: User, authToken: string) => {
    user.value = userData;
    token.value = authToken;
    localStorage.setItem('token', authToken);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // 登出处理
  const logout = () => {
    user.value = null;
    token.value = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  // 初始化用户状态
  const initializeAuth = () => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      token.value = storedToken;
      user.value = JSON.parse(storedUser);
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    loginSuccess,
    logout,
    initializeAuth
  };
});