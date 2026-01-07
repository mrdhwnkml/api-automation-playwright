import { BaseApi } from "./base.api";

export class UserApi extends BaseApi {
  getUsers(token: string, options: any = {}) {
    const API_BASE = process.env.API_BASE_URL || "";
    const path = API_BASE ? `${API_BASE.replace(/\/$/, "")}/users` : "/users";

    return this.get(path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      ...options,
    });
  }
}
