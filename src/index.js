// Source middleware 4 ( changes event name )
var smw4 = function ({ payload, next, integrations }) {
    payload.obj.event += " SM";
    next(payload);
  };

  window.addMiddlewares = function () {
    window.analytics.addSourceMiddleware(smw4);
  };