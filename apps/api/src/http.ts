import type { IncomingMessage, ServerResponse } from "node:http";

export type JsonBody = Record<string, unknown> | readonly unknown[];

export type ApiRequest = IncomingMessage & {
  parsedUrl: URL;
};

export type ApiHandler = (request: ApiRequest, response: ServerResponse) => Promise<void> | void;

export function sendJson(response: ServerResponse, statusCode: number, body: JsonBody): void {
  response.writeHead(statusCode, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(body));
}

export function parseRequestUrl(request: IncomingMessage): URL {
  return new URL(request.url ?? "/", "http://localhost");
}

