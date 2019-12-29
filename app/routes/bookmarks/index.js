import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.get("store").findAll("bookmark");
  },
  renderTemplate() {
    // Tells Ember to render this certain template instead
    this.render("about");
  }
});
