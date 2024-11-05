// import { loadEnvConfig } from "@next/env";
import "@testing-library/jest-dom/vitest";
import { configure } from "@testing-library/react";
import { beforeAll, vi } from "vitest";
// import { mswServer } from "@/libs/msw/mswServer";
// todo msw をコメントアウト外すと、消えてしまう。。

// loadEnvConfig(process.cwd());

configure({
  testIdAttribute: "data-test",
});
/** @see https://github.com/jsdom/jsdom/issues/1695 */
Element.prototype.scrollIntoView = vi.fn();
Element.prototype.scrollBy = vi.fn().mockReturnValue(undefined);

/** @see https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom */
beforeAll(() => {
  Object.defineProperty(window, "ResizeObserver", {
    writable: true,
    value: vi.fn().mockImplementation(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      unobserve: vi.fn(),
    })),
  });
  // 他にも
});
// Setup MSW
// beforeAll(() => mswServer.listen());
// afterEach(() => mswServer.resetHandlers());
// afterAll(() => mswServer.close());