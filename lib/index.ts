/**
 * @class: gps-scramble main class object.
 */
export default class scrambler {
  init(location: string | object) {
    if (typeof location === "string") {
      // using geocoding
      console.log("Looking up ", location);
    } else if (typeof location === "object") {
      console.log("Woorking with coords ", location);
    } else {
      throw "Incorrect initial location type.";
    }
  }
}
