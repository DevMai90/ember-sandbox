import Route from "@ember/routing/route";

export default Route.extend({
  // query returns any number of matching records
  model() {
    return this.get("store").query("user", { isAdmin: false });
  }
});
