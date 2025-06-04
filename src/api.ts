import { request } from "@umijs/max";

export async function login(body: API.LoginParams) {
  return request<API.LoginResult>("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      body,
    },
  });
}

export async function register(body: API.RegisterParms) {
  return request<API.LoginResult>("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      body,
    },
  });
}
