import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// Manages our routes!
Router.map(function() {
  this.route("about");
  // May also use alias
  // this.route("about", { path: "/aboutus" });
  this.route("bookmarks", function() {
    this.route("new");

    this.route("edit", {
      path: "/edit/:bookmark_id"
    });
  });
  // All routes not controlled by Ember will default to this path
  this.route("page-not-found", {
    path: "/*wildcard"
  });
});

export default Router;
