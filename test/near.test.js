let { Scrambler, ScramblerAsync } = require("../dist");

test("Scrambler produces a point near a given point", () => {
  let scrambler = new Scrambler([40.758, -73.985]);
  let location = scrambler.near();

  expect(location.x).toBeCloseTo(scrambler.x, 1);
  expect(location.y).toBeCloseTo(scrambler.y, 1);
});

test("ScramblerAsync produces a point near a given point", async () => {
  if (!process.env.BING_API_KEY) {
    return;
  }
  let scrambler = new ScramblerAsync("Times Square");
  let location = await scrambler.near();

  expect(location.x).toBeCloseTo(scrambler.x, 1);
  expect(location.y).toBeCloseTo(scrambler.y, 1);
});
