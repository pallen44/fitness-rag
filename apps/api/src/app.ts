import type { IncomingMessage, ServerResponse } from "node:http";
import { isHttpError } from "./errors.js";
import { parseRequestUrl, sendJson } from "./http.js";
import { resolveRoute } from "./routes/index.js";

export async function createApiHandler(request: IncomingMessage, response: ServerResponse): Promise<void> {
  try {
    const apiRequest = Object.assign(request, {
      parsedUrl: parseRequestUrl(request)
    });
    const handler = resolveRoute(apiRequest);

    await handler(apiRequest, response);
  } catch (error) {
    if (response.headersSent) {
      response.end();
      return;
    }

    if (isHttpError(error)) {
      sendJson(response, error.statusCode, {
        error: {
          message: error.message,
          statusCode: error.statusCode
        }
      });
      return;
    }

    sendJson(response, 500, {
      error: {
        message: "Internal server error",
        statusCode: 500
      }
    });
  }
}

