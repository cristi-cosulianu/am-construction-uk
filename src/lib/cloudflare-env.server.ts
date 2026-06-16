// Cloudflare Workers bindings (SEND_EMAIL, KV, D1, etc.) are not accessible
// via process.env — they're only available as properties on the env object
// passed to the Workers fetch handler. We capture that reference here once
// per isolate startup so server functions can reach bindings without needing
// vinxi/h3 internals (which are not importable from user code in this setup).
//
// Concurrency note: Cloudflare Workers run in a single-threaded isolate and
// the env object is the same for every request in that isolate, so a
// module-level reference is safe.

let _env: Record<string, unknown> = {};

export function setCloudflareEnv(env: Record<string, unknown>) {
  _env = env;
}

export function getCloudflareEnv() {
  return _env;
}
