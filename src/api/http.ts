import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios";
import { ElMessage } from "element-plus";

const baseURL = import.meta.env.VITE_API_BASE_URL || "";

const http: AxiosInstance = axios.create({
  baseURL,
  timeout: 12_000,
  headers: { "Content-Type": "application/json" },
});

let unauthorizedHandler: (() => void) | null = null;

export function setUnauthorizedHandler(handler: () => void) {
  unauthorizedHandler = handler;
}

export function setBaseURL(url: string) {
  http.defaults.baseURL = url;
}

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      (config.headers as any).Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    // 兼容后端返回 { code, data, msg } 的格式
    if (res && typeof res === "object" && "code" in res) {
      if (res.code === 401 || res.code === 600) {
        if (unauthorizedHandler) unauthorizedHandler();
        return Promise.reject(res);
      }
      if (res.code && res.code !== 0 && res.code !== 200) {
        ElMessage.error(res.msg || "请求失败");
        return Promise.reject(res);
      }
      return res;
    }
    // 非规范 data，直接返回
    return res;
  },
  (error) => {
    const message = error?.response?.data?.message || error?.message || "网络错误";
    ElMessage.error(message);
    if (error?.response?.status === 401 && unauthorizedHandler) {
      unauthorizedHandler();
    }
    return Promise.reject(error);
  }
);

export async function request<T = any>(config: AxiosRequestConfig): Promise<T> {
  const res = await http.request(config);
  // 如果返回格式是 { code, data, msg }，取 data
  if (res && typeof res === "object" && "data" in res) {
    return res.data as T;
  }
  return res as T;
}

export default http;
