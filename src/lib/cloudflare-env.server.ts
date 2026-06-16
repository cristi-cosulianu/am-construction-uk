// Cloudflare Workers bindings (SEND_EMAIL, KV, D1, etc.) are not accessible
// via process.env — they're only available as properties on the env object
// passed to the Workers fetch handler. We capture that reference here once
// per isolate startup so server functions can reach bindings without needing
// vinxi/h3 internals (which are not importable from user code in this setup).
//
// Concurrency note: Cloudflare Workers run in a single-threaded isolate and
// the env object is the same for every request in that isolate, so a
// module-level reference is safe.

// Use globalThis so the reference is shared even if Rollup inlines this module
// into multiple chunks — unlike a module-level variable, globalThis is a single
// object for the entire Workers isolate.
const KEY = "__cf_env__";

export function setCloudflareEnv(env: Record<string, unknown>) {
  (globalThis as Record<string, unknown>)[KEY] = env;
}

export function getCloudflareEnv(): Record<string, unknown> {
  return ((globalThis as Record<string, unknown>)[KEY] as Record<string, unknown>) ?? {};
}
