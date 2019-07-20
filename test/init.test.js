let { Scrambler, ScramblerAsync } = require("../");

test("Scrambler parses coordinates", () => {
  let scrambler = new Scrambler([40.758, -73.9855]);
  expect(scrambler.x).toBe(40.758);
  expect(scrambler.y).toBe(-73.9855);
  expect(scrambler[0]).toBe(40.758);
  expect(scrambler[1]).toBe(-73.9855);
});

test("Scrambler parses locations", () => {
  console.log(new ScramblerAsync("Times Square"));
  return;
});
