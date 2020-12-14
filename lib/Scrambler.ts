import * as geocoding from "./geocoding";
import { Location, near, within, nearbyEstablishment } from "./utils";
import to from "await-to-js";

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

  /**
   * Getter for the X coordinate
   *
   * @readonly
   * @memberof Scrambler
   */
  get x() {
    return this.initial.x;
  }
  /**
   * Getter for the Y coordinate
   *
   * @readonly
   * @memberof Scrambler
   */
  get y() {
    return this.initial.y;
  }
  /**
   * Alternative getter for the X coordinate
   *
   * @readonly
   * @memberof Scrambler
   */
  get 0() {
    return this.initial.x;
  }
  /**
   * Alternative getter for the Y coordinate
   *
   * @readonly
   * @memberof Scrambler
   */
  get 1() {
    return this.initial.y;
  }

  /**
   * Returns a point near the initial point
   * @name near
   * @returns {Location} returns location object
   */
  public near() {
    return near(this.initial);
  }

  /**
   * Returns a point within a specified distance from the initial point
   * @name within
   * @param {number} distance - distance from given initial point
   * @param {string} unit - distance unit
   * @returns {Location} returns location object
   */
  public within(distance: number, unit: string) {
    return within(this.initial, distance, unit);
  }
}
