import { APIRequestContext } from "@playwright/test";

export class BaseApi {
  constructor(protected request: APIRequestContext) {}

  get(url: string, options: any = {}) {
    return this.request.get(url, {
      ...options,
    });
  }

  post(url: string, payload: any, options: any = {}) {
    return this.request.post(url, {
      data: payload,
      ...options,
    });
  }
}
