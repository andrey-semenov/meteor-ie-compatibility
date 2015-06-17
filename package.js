Package.describe({
  name: "asemenov:meteor-ie-compatibility",
  summary: "Internet explorer compatibility hacks",
  version: "0.0.1"
});

Package.onUse(function (api) {
  api.addFiles('ie.js', ['client']);
  if (api.export !== undefined) {
    api.export('console', ['client']);
  }
});
