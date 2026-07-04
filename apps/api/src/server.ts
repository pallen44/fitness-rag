import { createServer } from "node:http";
import { apiAppName, apiAppPort } from "./config.js";
import { createApiHandler } from "./app.js";

export function startApiServer(port = apiAppPort): ReturnType<typeof createServer> {
  const server = createServer((request, response) => {
    void createApiHandler(request, response);
  });

  server.listen(port, () => {
    console.log(`${apiAppName} listening on http://localhost:${port}`);
  });

  return server;
}

