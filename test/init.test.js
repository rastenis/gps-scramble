let { Scrambler } = require("../");

test("Scrambler parses coordinates", () => {
  let scrambler = new Scrambler([40.758, -73.985]);
  expect(scrambler.x).toBe(40.758);
  expect(scrambler.y).toBe(-73.985);
  expect(scrambler[0]).toBe(40.758);
  expect(scrambler[1]).toBe(-73.985);
});

test("Scrambler fails to parse string query without API key", () => {
  let msg = false;
  try {
    let s = new Scrambler("Eiffel Tower");
  } catch (e) {
    msg = e;
  }
  expect(msg).toBeTruthy();
});

test("Scrambler fails to parse unsupported types", () => {
  let msg = false;
  try {
    let s = new Scrambler(0);
  } catch (e) {
    msg = e;
  }
  expect(msg).toBeTruthy();
});
