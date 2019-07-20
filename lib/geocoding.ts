import { fetch } from "whatwg-fetch";

const API_BASE = "http://dev.virtualearth.net/REST/v1/";

/**
 * Function to resolve geo string via Bing Maps' API
 * @param {string} query - Location to query
 * @return {object} Bing response object
 *
 * @example
 *     resolve('Times Square')
 */
export function resolve(query: string) {
  if (!process.env.API_KEY) {
    throw "Cannot use geocoding without an API key. Refer to readme.md for help with setting it up.";
  }
  return;
}
