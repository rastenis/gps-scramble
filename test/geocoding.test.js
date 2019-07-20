let { ScramblerAsync } = require("../dist");

test("Scrambler locates a place", () => {
  let location = new ScramblerAsync("Times Square");
  location.near().then(r => {
    console.log(r);
  });
});
