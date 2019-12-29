import DS from "ember-data";
// import attr from "ember-data/attr";

export default DS.Model.extend({
  // Define each attribute that is available
  // We have 4 types that we can set our attributes as. The data gets transformed into that JS type
  link: DS.attr("string"),
  title: DS.attr("string"),
  about: DS.attr("string"),
  public: DS.attr("boolean"),
  // second argument is a default value
  created: DS.attr("date", {
    defaultValue() {
      return new Date();
    }
  }),
  user: DS.belongsTo("user")
});
