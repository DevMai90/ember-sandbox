import { helper } from "@ember/component/helper";

export function bookmarkTitle([title, about] /*, hash*/) {
  // title and about is passed in as an array
  if (about !== null) return `${title} - ${about}`;
  else return title;
}

export default helper(bookmarkTitle);
