let { ScramblerAsync } = require("../dist");

test("ScramblerAsync locates a place", () => {
  if (!process.env.BING_API_KEY) {
    return;
  }

  let location = new ScramblerAsync("Times Square");
  location.near().then(r => {
    expect(r.x).toBeCloseTo(location.x, 1);
    expect(r.y).toBeCloseTo(location.y, 1);
  });
});
