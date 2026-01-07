import { test, expect } from "@playwright/test";
import { AuthApi } from "../../src/api/auth.api";
import {
  expectSuccess,
  expectUnauthorized,
} from "../../src/helper/assert.helper";

test.describe("Auth API - Login", () => {
  test("POST /login - valid credentials", async ({ request }) => {
    const authApi = new AuthApi(request);

    const response = await authApi.login({
      username: "admin",
      password: "admin",
    });

    const body = await response.json();
    expectSuccess(response, body);
    expect(body).toHaveProperty("token");
  });

  test("POST /login - invalid credentials", async ({ request }) => {
    const authApi = new AuthApi(request);

    const response = await authApi.login({
      username: "admin",
      password: "adminxxx",
    });

    const body = await response.json();

    expectUnauthorized(response, body);
    expect(body.message).toContain("Invalid username or password!");
  });
});
