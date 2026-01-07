import { test, expect } from "@playwright/test";
import { loginAsAdmin } from "../../src/helper/auth.helper";
import { UserApi } from "../../src/api/user.api";
import {
  expectSuccess,
  expectUnauthorized,
  expectNoToken,
} from "../../src/helper/assert.helper";

test.describe("GET Users API", () => {
  let token: string;

  test.beforeEach(async ({ request }) => {
    token = await loginAsAdmin(request);
  });

  test("GET /users - success", async ({ request }) => {
    const userApi = new UserApi(request);

    const response = await userApi.getUsers(token);
    const body = await response.json();

    expectSuccess(response, body);
    expect(body.users[0]).toHaveProperty("username");
    expect(body.users[0]).toHaveProperty("age");
  });

  test("GET /users - unauthorized", async ({ request }) => {
    const userApi = new UserApi(request);

    const response = await userApi.getUsers("invalid_token");
    const body = await response.json();

    expectNoToken(response, body);
    expect(body.message).toContain("Invalid or expired token, please login!");
  });

  test("GET /users - without token", async ({ request }) => {
    const userApi = new UserApi(request);

    const response = await userApi.getUsers("");
    const body = await response.json();

    expectUnauthorized(response, body);
    expect(body.message).toContain("Token required!");
  });
});
