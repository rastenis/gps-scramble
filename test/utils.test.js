let { Location, normalizeDistance, getRandomInt } = require("../dist/utils");

const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules(); // this is important - it clears the cache
  process.env = { ...OLD_ENV };
  delete process.env.NODE_ENV;
});

afterEach(() => {
  process.env = OLD_ENV;
});

test("Location object constructs properly", () => {
  let loc = new Location(1, 2);
  expect(loc.x).toBe(1);
  expect(loc.y).toBe(2);
  expect(loc[0]).toBe(1);
  expect(loc[1]).toBe(2);
});

test("normalizeDistance", () => {
  expect(normalizeDistance(2, "mm")).toBe(0.002);
  expect(normalizeDistance(2, "cm")).toBe(0.02);
  expect(normalizeDistance(2, "m")).toBe(2);
  expect(normalizeDistance(2, "dm")).toBe(20);
  expect(normalizeDistance(2, "km")).toBe(2000);
});

test("getRandomInt", () => {
  let r = getRandomInt(1, 10);
  expect(r).toBeGreaterThanOrEqual(1);
  expect(r).toBeLessThan(10);
});

test("nearbyEstablishment fails", async () => {
  process.env.BING_API_KEY = false;

  let {
    nearbyEstablishment: resolveEstablishmentNoAPIKey
  } = require("../dist/utils");

  let msg = false;
  try {
    let r = await resolveEstablishmentNoAPIKey(new Location(40.758, -73.985));
  } catch (e) {
    msg = e;
  }
  expect(msg).toBeTruthy();
});
