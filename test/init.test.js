let { Scrambler, ScramblerAsync } = require("../");

test("Scrambler resolves coordinates", () => {
  console.log(new Scrambler([40.758, -73.9855]));
  return;
});

test("Scrambler resolves locations", () => {
  console.log(new ScramblerAsync("Times Square"));
  return;
});
