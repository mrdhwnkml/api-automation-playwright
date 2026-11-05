import { APIRequestContext } from "@playwright/test";
import { AuthApi } from "../api/auth.api";

export async function loginAsAdmin(
  request: APIRequestContext
): Promise<string> {
  const authApi = new AuthApi(request);

  await authApi.login({
    username: "belajarbareng",
    password: "belajarbareng",
  });

  return authApi.token!;
}
