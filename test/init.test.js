let { Scrambler } = require("../");
test("Scrambler resolves locations", () => {
  console.log(new Scrambler("Times Square"));
  return;
});

test("Scrambler resolves coordinates", () => {
  console.log(new Scrambler(40.758, -73.9855));
  return;
});
