import Component from "@ember/component";
import Ember from "ember";

// export default Component.extend({
//   imgClass: "avatar"
// });

// Make static to pass in positional parameters. What we've allowed is passing in properties as a constant component
const UsersListComponent = Component.extend({
  imgClass: "avatar",
  click() {
    Ember.Logger.info("users-list was clicked");
    return false;
  }
});

UsersListComponent.reopenClass({
  positionalParams: ["avatarUrl", "email"]
});

export default UsersListComponent;
