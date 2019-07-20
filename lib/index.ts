import dotenv from "dotenv";
import { resolve } from "./geocoding";
dotenv.config();

/**
 * configuration for near functions of both Scrambler and ScramblerAsync
 */
let minNear: number = 10;
let maxNear: number = 100;

class Location {
  0: number;
  1: number;
  x: number;
  y: number;
  data: any;
  constructor(x: number, y: number, data: any | undefined) {
    this[0] = x;
    this[1] = y;
    this.x = x;
    this.y = y;
    this.data = data;
  }
}

/**
 * @class: gps-scramble main synchronous class object.
 * @param {string | object} location - A string loaction name OR coordinate array [2]
 */
export class Scrambler {
  initial: Location;

  constructor(location: string | Array<number>) {
    if (typeof location === "string") {
      throw "To use geocoding, use ScramblerAsync.";
    } else if (typeof location === "object" && location.length === 2) {
      console.log("Working with coords ", location);
      this.initial = new Location(location[0], location[1], null);
    } else {
      throw "Incorrect initial location type.";
    }
  }

  /**
   * @name near
   * @returns {Location} returns location object
   */
  public near() {
    return this.initial;
  }
}

/**
 * @class: gps-scramble geocode-enabled asynchronous class object.
 * @param {string | object} location - A string loaction name OR coordinate array [2]
 */
export class ScramblerAsync {
  initial: Location;

  constructor(location: string | Array<number>) {
    if (typeof location === "string") {
      // using geocoding
      console.log("Looking up ", location);
      this.initial = new Location(0, 0, location);
    } else if (typeof location === "object" && location.length === 2) {
      console.log("Working with coords ", location);
      this.initial = new Location(location[0], location[1], null);
    } else {
      throw "Incorrect initial location type.";
    }
  }

  public near() {
    return new Promise((res, rej) => {
      // fetch
      return res(this.initial);
    });
  }
}
