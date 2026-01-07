import { expect } from "@playwright/test";

export function expectUnauthorized(response: any, body: any) {
  expect([401]).toContain(response.status());
}

export function expectSuccess(response: any, body: any) {
  expect([200]).toContain(response.status());
}

export function expectNoToken(response: any, body: any) {
  expect([403]).toContain(response.status());
}
