import { registerApplication, start } from "single-spa";
import {EventBusService} from "./services/event.bus.service"

var EventBus= new EventBusService;


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
  customProps: {
    EventBus
  }
});

registerApplication({
  name: "@devbancolombia/mf-card1",
  app: () => System.import("@devbancolombia/mf-card1"),
  activeWhen: (location) => location.pathname == "/",
  customProps: {
    EventBus
  }
});

registerApplication({
  name: "@devbancolombia/mf-card2",
  app: () => System.import("@devbancolombia/mf-card2"),
  activeWhen: (location) => location.pathname == "/",
  customProps: {
    EventBus
  }
});

registerApplication({
  name: "@devbancolombia/mf-login",
  app: () => System.import("@devbancolombia/mf-login"),
  activeWhen: ["/login"],
  customProps: {
    EventBus
  }
});

// registerApplication({
//   name: "@devbancolombia/mf-footer",
//   app: () => System.import("@devbancolombia/mf-footer"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
