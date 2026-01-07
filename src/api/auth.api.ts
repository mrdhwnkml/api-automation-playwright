import { BaseApi } from "./base.api";

export class AuthApi extends BaseApi {
  token?: string;

  async login(
    payload: { username: string; password: string },
    options: any = {}
  ) {
    const API_BASE = process.env.API_BASE_URL || "";
    const path = API_BASE ? `${API_BASE.replace(/\/$/, "")}/login` : "/login";

    const response = await this.post(path, payload, options);
    const body = await response.json();

    // simpan token
    this.token = body.token;

    return response;
  }
}
