let { ScramblerAsync } = require("../dist");

test("ScramblerAsync locates a place", () => {
  if (!process.env.BING_API_KEY) {
    return;
  }
  let location = new ScramblerAsync("Times Square");
  await location.init();

  // is near Times Square
  expect(location.x).toBeCloseTo(40.758, 1);
  expect(location.y).toBeCloseTo(-73.985, 1);
});
