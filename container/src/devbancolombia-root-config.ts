import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@devbancolombia/mf-header",
  app: () => System.import("@devbancolombia/mf-header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@devbancolombia/mf-card1",
  app: () => System.import("@devbancolombia/mf-card1"),
  activeWhen: (location) => location.pathname == "/",
});

registerApplication({
  name: "@devbancolombia/mf-card2",
  app: () => System.import("@devbancolombia/mf-card2"),
  activeWhen: (location) => location.pathname == "/",
});

registerApplication({
  name: "@devbancolombia/mf-login",
  app: () => System.import("@devbancolombia/mf-login"),
  activeWhen: ["/login"],
});

// registerApplication({
//   name: "@devbancolombia/mf-footer",
//   app: () => System.import("@devbancolombia/mf-footer"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
