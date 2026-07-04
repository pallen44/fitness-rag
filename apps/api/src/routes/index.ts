import { HttpError } from "../errors.js";
import type { ApiHandler, ApiRequest } from "../http.js";
import { healthRoute } from "./health.route.js";

type RouteDefinition = {
  method: string;
  path: string;
  handler: ApiHandler;
};

const routes: RouteDefinition[] = [
  {
    method: "GET",
    path: "/health",
    handler: healthRoute
  }
];

export function resolveRoute(request: ApiRequest): ApiHandler {
  const route = routes.find((candidate) => {
    return candidate.method === request.method && candidate.path === request.parsedUrl.pathname;
  });

  if (!route) {
    throw new HttpError(404, "Route not found");
  }

  return route.handler;
}

