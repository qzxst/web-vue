import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import type { LoginCredentials, LoginResponse } from "@/type/auth";

export const useAuth = () => {
  const router = useRouter();
  const authStore = useAuthStore();
  const loading = ref(false);
  const error = ref<string | null>(null);

  const login = async (credentials: LoginCredentials) => {
    loading.value = true;
    error.value = null;

    try {
      // 这里可以替换为实际的HTTP登录API调用
      // const response = await api.post('/login', credentials);

      // 模拟WebSocket登录（根据之前的Hyperf后端设计）
      const ws = new WebSocket("ws://localhost:9502");

      ws.onopen = () => {
        ws.send(
          JSON.stringify({
            action: "login",
            username: credentials.username,
            password: credentials.password,
          })
        );
      };

      ws.onmessage = (event) => {
        const data: LoginResponse = JSON.parse(event.data);

        if (data.type === "login_success" && data.token && data.user) {
          authStore.loginSuccess(data.user, data.token);
          router.push("/dashboard");
        } else {
          error.value = data.message || "登录失败";
        }

        loading.value = false;
        ws.close();
      };

      ws.onerror = () => {
        error.value = "连接服务器失败";
        loading.value = false;
      };
    } catch (err) {
      error.value = "登录过程中发生错误";
      loading.value = false;
    }
  };

  const logout = () => {
    authStore.logout();
    router.push("/login");
  };

  return {
    loading,
    error,
    login,
    logout,
  };
};
