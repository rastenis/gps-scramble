import dotenv from "dotenv";
import { resolve } from "./geocoding";
import { getRandomArbitrary } from "./utils";

dotenv.config();

/**
 * configuration for near functions of both Scrambler and ScramblerAsync
 */
const minNear: number = 10;
const maxNear: number = 100;

const earthRadius: number = 6.3781e6;

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
    let distance = this.normalizeDistance(
      getRandomArbitrary(minNear, maxNear),
      "m"
    );
    return new Location(
      this.initial.x + (distance / earthRadius) * (180 / Math.PI),
      this.initial.y +
        ((distance / earthRadius) * (180 / Math.PI)) /
          Math.cos((this.initial.x * Math.PI) / 180),
      null
    );
  }

  /**
   * @name within
   * @param {number} distance - distance from given initial point
   * @param {string} unit - distance unit
   * @returns {Location} returns location object
   */
  public within(distance: number, unit: string) {
    distance = this.normalizeDistance(distance, unit);
    return new Location(
      this.initial.x + (distance / earthRadius) * (180 / Math.PI),
      this.initial.y +
        ((distance / earthRadius) * (180 / Math.PI)) /
          Math.cos((this.initial.x * Math.PI) / 180),
      null
    );
  }

  /**
   * @name normalizeDistance
   * @param {number} distance - distance from given initial point
   * @param {string} unit - distance unit
   * @returns {number} returns distance normalized to meters
   */
  public normalizeDistance(distance: number, unit: string): number {
    switch (unit) {
      case "mm":
        distance = distance * 0.001;
        break;
      case "cm":
        distance = distance * 0.01;
        break;
      case "m":
        distance = distance;
        break;
      case "dm":
        distance = distance * 10;
        break;
      case "km":
        distance = distance * 1000;
        break;
    }

    return distance;
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
      this.initial = new Location(0, 0, location);
    } else if (typeof location === "object" && location.length === 2) {
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
