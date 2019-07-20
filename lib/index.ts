import dotenv from "dotenv";
import * as geocoding from "./geocoding";
import { Location, near, within } from "./utils";
import to from "await-to-js";

dotenv.config();

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
      this.initial = new Location(location[0], location[1], null);
    } else {
      throw "Incorrect initial location type.";
    }
  }

  get x() {
    return this.initial.x;
  }

  get y() {
    return this.initial.y;
  }

  get 0() {
    return this.initial.x;
  }

  get 1() {
    return this.initial.y;
  }

  /**
   * @name near
   * @returns {Location} returns location object
   */
  public near() {
    return near(this.initial);
  }

  /**
   * @name within
   * @param {number} distance - distance from given initial point
   * @param {string} unit - distance unit
   * @returns {Location} returns location object
   */
  public within(distance: number, unit: string) {
    return within(this.initial, distance, unit);
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
      this.initial = new Location(-1, -1, location);
    } else if (typeof location === "object" && location.length === 2) {
      this.initial = new Location(location[0], location[1], null);
    } else {
      throw "Incorrect initial location type.";
    }
  }

  public async init() {
    if (this.initial.x === -1) {
      // resolve location first
      let [err, data] = await to(geocoding.resolve(this.initial.data));
      if (err) {
        throw err;
      }

      this.initial = new Location(
        data.resourceSets[0].resources[0].geocodePoints[0].coordinates[0],
        data.resourceSets[0].resources[0].geocodePoints[0].coordinates[1],
        null
      );
    }
  }

  get x() {
    return this.initial.x;
  }

  get y() {
    return this.initial.y;
  }

  get 0() {
    return this.initial.x;
  }

  get 1() {
    return this.initial.y;
  }

  public near() {
    return new Promise(async (res, rej) => {
      // initializing if not initialized
      if (this.initial.x === -1) {
        await this.init();
      }
      // resolving with adjusted coords
      return res(near(this.initial));
    });
  }
}
