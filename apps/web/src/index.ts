import { createServer } from "node:http";

export const webAppName = "fitness-rag-web";
export const webAppPort = Number.parseInt(process.env.WEB_PORT ?? "3000", 10);

export function createWebAppPlaceholder(): string {
  return webAppName;
}

const server = createServer((_request, response) => {
  response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  response.end(`${webAppName} placeholder\n`);
});

server.listen(webAppPort, () => {
  console.log(`${webAppName} listening on http://localhost:${webAppPort}`);
});
