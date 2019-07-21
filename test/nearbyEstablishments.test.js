let { ScramblerAsync } = require("../dist");

test("ScramblerAsync finds coordinates of an establishment that is near the given location", async () => {
  if (!process.env.BING_API_KEY) {
    return;
  }
  let scrambler = new ScramblerAsync("Times Square");
  let location = await scrambler.nearbyEstablishment();

  expect(location.x).toBeCloseTo(scrambler.x, 1);
  expect(location.y).toBeCloseTo(scrambler.y, 1);
});
