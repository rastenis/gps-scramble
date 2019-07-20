import dotenv from "dotenv";
dotenv.config();

/**
 * @class: gps-scramble main class object.
 * @param {string | object} location - A string loaction name OR coordinate array [2]
 */
export class Scrambler {
  initial: any;
  simpleMode: boolean = true;

  constructor(location: string | Array<number>) {
    if (typeof location === "string") {
      // using geocoding
      this.simpleMode = false;
      console.log("Looking up ", location);
    } else if (typeof location === "object" && location.length === 2) {
      console.log("Working with coords ", location);
    } else {
      throw "Incorrect initial location type.";
    }
  }
}
