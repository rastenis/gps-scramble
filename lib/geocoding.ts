import axios from "axios";

/**
 * Bing API base URL
 */
const API_BASE = "http://dev.virtualearth.net/REST/v1/";

/**
 * Function to resolve geo string via Bing Maps' API
 * @param {string} query - Location to query
 * @returns {Promise<any>}  - Bing response object wrapped in a promise
 *
 * @example
 *     resolve('Times Square')
 */
export function resolveLocation(query: string): Promise<any> {
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

/**
 *  Function to retreive nearby establishments from BING's api
 * @export
 * @param {string} query - preformatted query string
 * @param {number} [radius=2] - radius in kilometers for the lookup (Bing's upper limit is 2km.)
 * @returns {Promise<any>} - Bing's response object wrapped in a promise
 */
export function resolveEstablishments(
  query: string,
  radius: number = 2
): Promise<any> {
  return new Promise((res, rej) => {
    if (!process.env.BING_API_KEY) {
      return rej(
        "Cannot use geocoding without an API key. Refer to readme.md for help with setting it up."
      );
    }

    return axios
      .get(
        `${API_BASE}LocationRecog/${query}?radius=${radius}&top=5&distanceunit=km&key=${process.env.BING_API_KEY}`
      )
      .then(r => {
        return res(r.data);
      })
      .catch(e => {
        return rej(e);
      });
  });
}
