import { getHealthStatus } from "../modules/health/index.js";
import type { ApiHandler } from "../http.js";
import { sendJson } from "../http.js";

export const healthRoute: ApiHandler = (_request, response) => {
  sendJson(response, 200, getHealthStatus());
};

