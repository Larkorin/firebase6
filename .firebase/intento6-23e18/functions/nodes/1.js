

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.49727ae8.js","_app/immutable/chunks/scheduler.4b94184d.js","_app/immutable/chunks/index.53cef206.js","_app/immutable/chunks/stores.2b2d0c24.js","_app/immutable/chunks/singletons.eea9b1e0.js","_app/immutable/chunks/index.5ebb6b47.js"];
export const stylesheets = [];
export const fonts = [];
