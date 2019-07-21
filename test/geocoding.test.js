let { resolveLocation, resolveEstablishments } = require("../dist/geocoding");
const { to } = require("await-to-js");
const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules(); // this is important - it clears the cache
  process.env = { ...OLD_ENV };
  delete process.env.NODE_ENV;
});

afterEach(() => {
  process.env = OLD_ENV;
});

test("Location resolving", async () => {
  if (!process.env.BING_API_KEY) {
    return;
  }
  let result = await resolveLocation("Eiffel Tower");

  expect(
    result.resourceSets[0].resources[0].geocodePoints[0].coordinates[0]
  ).toBeCloseTo(48.8584, 1);
  expect(
    result.resourceSets[0].resources[0].geocodePoints[0].coordinates[1]
  ).toBeCloseTo(2.2945, 1);
});

test("Nearby establishment resolving", async () => {
  if (!process.env.BING_API_KEY) {
    return;
  }
  let result = await resolveEstablishments("Eiffel Tower");

  expect(
    result.resourceSets[0].resources[0].businessesAtLocation[0].businessAddress
      .latitude
  ).toBeCloseTo(48.8584, 1);
  expect(
    result.resourceSets[0].resources[0].businessesAtLocation[0].businessAddress
      .longitude
  ).toBeCloseTo(2.2945, 1);
});

test("Location resolving failure without API key", async () => {
  process.env.BING_API_KEY = false;

  let {
    resolveLocation: resolveLocationNoAPIKey
  } = require("../dist/geocoding");

  let [err, result] = await to(resolveLocationNoAPIKey("Eiffel Tower"));
  expect(err).toBeTruthy();
});

test("Nearby establishment resolving failure without API key", async () => {
  process.env.BING_API_KEY = false;

  let {
    resolveEstablishments: resolveEstablishmentsNoAPIKey
  } = require("../dist/geocoding");

  let [err, result] = await to(resolveEstablishmentsNoAPIKey("Eiffel Tower"));
  expect(err).toBeTruthy();
});

test("Location resolving failure without valid API key", async () => {
  process.env.BING_API_KEY = "invalidKey";

  let {
    resolveLocation: resolveLocationNoAPIKey
  } = require("../dist/geocoding");

  let [err, result] = await to(resolveLocationNoAPIKey("Eiffel Tower"));
  expect(err).toBeTruthy();
});

test("Nearby establishment resolving failure without valid API key", async () => {
  process.env.BING_API_KEY = "invalidKey";

  let {
    resolveEstablishments: resolveEstablishmentsNoAPIKey
  } = require("../dist/geocoding");

  let [err, result] = await to(resolveEstablishmentsNoAPIKey("Eiffel Tower"));
  expect(err).toBeTruthy();
});
