let { ScramblerAsync } = require("../dist");
let { to } = require("await-to-js");

test("ScramblerAsync finds coordinates of an establishment that is near the given location", async () => {
  if (!process.env.BING_API_KEY) {
    return;
  }
  let scrambler = new ScramblerAsync("Times Square");
  let location = await scrambler.nearbyEstablishment();

  // testing already intitated nearbyEstablishment
  let anotherLocation = await scrambler.nearbyEstablishment();

  expect(location.x).toBeCloseTo(scrambler.x, 1);
  expect(location.y).toBeCloseTo(scrambler.y, 1);
  expect(anotherLocation.x).toBeCloseTo(scrambler.x, 1);
  expect(anotherLocation.y).toBeCloseTo(scrambler.y, 1);
});

test("ScramblerAsync fails to resolve coords for an establishment in a restricted location", async () => {
  if (!process.env.BING_API_KEY) {
    return;
  }

  let scrambler = new ScramblerAsync("p3erf-91384hf-1394fh7813-49fh7");
  let [err, location] = await to(scrambler.nearbyEstablishment());
  expect(err).toBe("Could not resolve nearby establishments: no results.");
});
