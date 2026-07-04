import { describe, expect, it } from "vitest";

import { renderWebShell, shellRoutes } from "./index.js";

describe("web shell routes", () => {
  it("renders every navigation placeholder route", () => {
    for (const route of shellRoutes) {
      const rendered = renderWebShell(route.path);

      expect(rendered.statusCode).toBe(200);
      expect(rendered.html).toContain(`<h1 id="page-title">${route.title}</h1>`);
      expect(rendered.html).toContain(`href="${route.path}"`);
    }
  });

  it("returns a clear 404 placeholder for unknown routes", () => {
    const rendered = renderWebShell("/missing");

    expect(rendered.statusCode).toBe(404);
    expect(rendered.html).toContain("Page not found");
  });
});
