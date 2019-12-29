import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    // Ember data query. Look into store.
    // Pass in name of model that we want to find. Then id of the record. findRecord returns a SINGLE record
    return this.get("store").findRecord("bookmark", 1);
    // Another way... second argument is a JS object that gets converted to a query parameter
    // this.get("store").queryRecord("bookmark", { aboutIsNull: true });
  }
});
