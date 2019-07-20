let { Scrambler } = require("../dist");

test("Scrambler produces a point near a given point", () => {
  let scrambler = new Scrambler([40.758, -73.9855]);
  let location = scrambler.near();

  expect(location.x).toBeCloseTo(scrambler.x, 1);
  expect(location.y).toBeCloseTo(scrambler.y, 1);
});
