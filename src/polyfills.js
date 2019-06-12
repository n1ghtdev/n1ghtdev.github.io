const polyfills = [];

if (!window.Symbol) {
  polyfills.push(
    import(/* webpackChunkName: "polyfills" */ 'core-js/modules/es.symbol'),
  );
}

if (!window.Array.from) {
  polyfills.push(
    import(/* webpackChunkName: "polyfills" */ 'core-js/modules/es.array.from'),
  );
}

if (!window.Array.find) {
  polyfills.push(
    import(/* webpackChunkName: "polyfills" */ 'core-js/modules/es.array.find'),
  );
}

if (!window.fetch) {
  polyfills.push(import(/* webpackChunkName: "polyfills" */ 'whatwg-fetch'));
}

export default polyfills;
