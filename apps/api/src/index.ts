import { createServer } from "node:http";

export const apiAppName = "fitness-rag-api";
export const apiAppPort = Number.parseInt(process.env.API_PORT ?? "4000", 10);

export function createApiAppPlaceholder(): string {
  return apiAppName;
}

const server = createServer((_request, response) => {
  response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify({ app: apiAppName, status: "placeholder" }));
});

server.listen(apiAppPort, () => {
  console.log(`${apiAppName} listening on http://localhost:${apiAppPort}`);
});
