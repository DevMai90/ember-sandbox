import Component from "@ember/component";
import Ember from "ember";
import { inject as service } from "@ember/service";

export default Component.extend({
  bookmark: null,
  // router: Ember.inject.service("-routing"),
  router: service(),
  actions: {
    save(bookmark) {
      Ember.Logger.info("save called");
      bookmark
        .save()
        .then(value => {
          Ember.Logger.info(value);
          // this.get("router").transitionTo("bookmarks");
          this.get("router").transitionTo("bookmarks");
        })
        .catch(() => {
          Ember.Logger.info("failure to save");
        });
    },
    cancel() {
      Ember.Logger.info("cancel called");
    },
    delete(bookmark) {
      bookmark.destroyRecord();
      this.get("router").transitionTo("bookmarks");
    }
  }
});
