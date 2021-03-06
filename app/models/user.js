import DS from "ember-data";
// Import computed module
import { computed } from "@ember/object";

export default DS.Model.extend({
  username: DS.attr("string"),
  email: DS.attr("string"),
  firstName: DS.attr("string"),
  lastName: DS.attr("string"),
  avatar: DS.attr("string"),
  isAdmin: DS.attr("boolean", {
    // Default value
    defaultValue: false
  }),
  created: DS.attr("date", {
    defaultValue() {
      return new Date();
    }
  }),
  bookmarks: DS.hasMany("bookmark"),
  // takes properties to be used and a callback
  fullName: computed("firstName", "lastName", function() {
    return `${this.get("firstName")} ${this.get("lastName")}`;
  })
});
