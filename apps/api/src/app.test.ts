import { createServer } from "node:http";
import { afterEach, describe, expect, it } from "vitest";
import { createApiHandler } from "./app.js";

let server: ReturnType<typeof createServer> | undefined;

afterEach(async () => {
  if (!server) {
    return;
  }

  await new Promise<void>((resolve, reject) => {
    server?.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
  server = undefined;
});

async function request(path: string): Promise<Response> {
  server = createServer((incomingRequest, response) => {
    void createApiHandler(incomingRequest, response);
  });

  await new Promise<void>((resolve) => {
    server?.listen(0, resolve);
  });

  const address = server.address();

  if (!address || typeof address === "string") {
    throw new Error("Expected server to listen on a local port");
  }

  return fetch(`http://127.0.0.1:${address.port}${path}`);
}

describe("api app", () => {
  it("returns health status", async () => {
    const response = await request("/health");

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      service: "fitness-rag-api",
      status: "ok"
    });
  });

  it("returns JSON for missing routes", async () => {
    const response = await request("/missing");

    expect(response.status).toBe(404);
    await expect(response.json()).resolves.toEqual({
      error: {
        message: "Route not found",
        statusCode: 404
      }
    });
  });
});

