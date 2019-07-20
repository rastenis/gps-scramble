import axios from "axios";

const API_BASE = "http://dev.virtualearth.net/REST/v1/";

/**
 * Function to resolve geo string via Bing Maps' API
 * @param {string} query - Location to query
 * @return {Promise<any>} Bing response object wrapped in a promise
 *
 * @example
 *     resolve('Times Square')
 */
export function resolve(query: string): Promise<any> {
  return new Promise((res, rej) => {
    if (!process.env.BING_API_KEY) {
      return rej(
        "Cannot use geocoding without an API key. Refer to readme.md for help with setting it up."
      );
    }

    return axios
      .get(`${API_BASE}Locations/${query}?key=${process.env.BING_API_KEY}`)
      .then(r => {
        return res(r.data);
      })
      .catch(e => {
        return rej(e);
      });
  });
}
