import { HttpError } from "./errors.js";

export function assertJsonRequest(contentType: string | undefined): void {
  if (!contentType?.includes("application/json")) {
    throw new HttpError(415, "Expected application/json request body");
  }
}

