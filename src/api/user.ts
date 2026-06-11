import { request } from "./http";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResp {
  token: string;
  user?: any;
}

export const login = (payload: LoginPayload) =>
  request<LoginResp>({ url: "/v1/api/login", method: "POST", data: payload });

export const getProfile = () => request<any>({ url: "/v1/api/profile", method: "GET" });
