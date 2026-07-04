import { createServer, type Server } from "node:http";
import { fileURLToPath } from "node:url";

export const webAppName = "fitness-rag-web";
export const webAppPort = Number.parseInt(process.env.WEB_PORT ?? "3000", 10);

type ShellRoute = {
  path: string;
  label: string;
  title: string;
  description: string;
};

export const shellRoutes: ShellRoute[] = [
  {
    path: "/",
    label: "Home",
    title: "Fitness RAG",
    description:
      "A local-first coaching and adventure planning app shell. Product features will land in later work packets."
  },
  {
    path: "/dashboard",
    label: "Dashboard",
    title: "Dashboard",
    description:
      "Placeholder for recent training, activity trends, recommendations, and next useful actions."
  },
  {
    path: "/profile",
    label: "Profile",
    title: "Profile",
    description:
      "Placeholder for fitness level, goals, preferences, location, and adventure settings."
  },
  {
    path: "/activities",
    label: "Activities",
    title: "Activities",
    description:
      "Placeholder for manually entered workouts, imported activity history, and recent training details."
  },
  {
    path: "/imports",
    label: "Imports",
    title: "Imports",
    description:
      "Placeholder for Garmin-like and Strava-like JSON import workflows."
  },
  {
    path: "/training",
    label: "Training",
    title: "Training",
    description:
      "Placeholder for training questions, recovery guidance, and plan recommendations."
  },
  {
    path: "/adventures",
    label: "Adventures",
    title: "Adventures",
    description:
      "Placeholder for weather-aware hike, route, race, and outdoor adventure planning."
  },
  {
    path: "/recommendations",
    label: "Recommendations",
    title: "Recommendations",
    description:
      "Placeholder for saved coaching and adventure recommendations once the AI flow exists."
  }
];

export function createWebAppPlaceholder(): string {
  return webAppName;
}

export function findShellRoute(pathname: string): ShellRoute | undefined {
  return shellRoutes.find((route) => route.path === pathname);
}

export function renderWebShell(pathname: string): { statusCode: number; html: string } {
  const route = findShellRoute(pathname);

  if (!route) {
    return {
      statusCode: 404,
      html: renderPage({
        path: pathname,
        label: "Not found",
        title: "Page not found",
        description: "This placeholder route does not exist yet."
      })
    };
  }

  return {
    statusCode: 200,
    html: renderPage(route)
  };
}

function renderPage(route: ShellRoute): string {
  const navItems = shellRoutes
    .map((item) => {
      const activeClass = item.path === route.path ? " active" : "";

      return `<a class="nav-link${activeClass}" href="${item.path}">${item.label}</a>`;
    })
    .join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${route.title} | Fitness RAG</title>
    <style>
      :root {
        color-scheme: light;
        --background: #f7f8f4;
        --surface: #ffffff;
        --text: #1d2522;
        --muted: #65716c;
        --line: #d9dfd7;
        --accent: #0f766e;
        --accent-soft: #dff3ef;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        font-family:
          Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          "Segoe UI", sans-serif;
        background: var(--background);
        color: var(--text);
      }

      .app-shell {
        min-height: 100vh;
        display: grid;
        grid-template-columns: 260px 1fr;
      }

      .sidebar {
        border-right: 1px solid var(--line);
        background: var(--surface);
        padding: 28px 20px;
      }

      .brand {
        display: grid;
        gap: 4px;
        margin-bottom: 28px;
      }

      .brand strong {
        font-size: 1.05rem;
      }

      .brand span {
        color: var(--muted);
        font-size: 0.9rem;
      }

      nav {
        display: grid;
        gap: 6px;
      }

      .nav-link {
        color: var(--text);
        border-radius: 8px;
        padding: 10px 12px;
        text-decoration: none;
      }

      .nav-link:hover,
      .nav-link.active {
        background: var(--accent-soft);
        color: var(--accent);
      }

      main {
        padding: 44px;
      }

      .page {
        max-width: 820px;
      }

      .eyebrow {
        color: var(--accent);
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0;
        text-transform: uppercase;
      }

      h1 {
        margin: 10px 0 14px;
        font-size: clamp(2rem, 4vw, 3.75rem);
        line-height: 1;
      }

      p {
        margin: 0;
        max-width: 660px;
        color: var(--muted);
        font-size: 1.08rem;
        line-height: 1.65;
      }

      .placeholder {
        margin-top: 36px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: var(--surface);
        padding: 22px;
      }

      .placeholder h2 {
        margin: 0 0 8px;
        font-size: 1rem;
      }

      @media (max-width: 760px) {
        .app-shell {
          grid-template-columns: 1fr;
        }

        .sidebar {
          border-right: 0;
          border-bottom: 1px solid var(--line);
          padding: 18px;
        }

        nav {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        main {
          padding: 28px 20px;
        }
      }
    </style>
  </head>
  <body>
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <strong>Fitness RAG</strong>
          <span>Coaching + adventure shell</span>
        </div>
        <nav aria-label="Primary navigation">${navItems}</nav>
      </aside>
      <main>
        <section class="page" aria-labelledby="page-title">
          <div class="eyebrow">Milestone 0 shell</div>
          <h1 id="page-title">${route.title}</h1>
          <p>${route.description}</p>
          <div class="placeholder">
            <h2>What belongs here later</h2>
            <p>This page is intentionally a clear placeholder. It has no backend, RAG, or AI dependency yet.</p>
          </div>
        </section>
      </main>
    </div>
  </body>
</html>`;
}

export function createWebServer(): Server {
  return createServer((request, response) => {
    const requestUrl = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`);
    const { html, statusCode } = renderWebShell(requestUrl.pathname);

    response.writeHead(statusCode, { "content-type": "text/html; charset=utf-8" });
    response.end(html);
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const server = createWebServer();

  server.listen(webAppPort, () => {
    console.log(`${webAppName} listening on http://localhost:${webAppPort}`);
  });
}
