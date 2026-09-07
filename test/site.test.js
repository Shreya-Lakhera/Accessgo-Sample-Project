const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

test("index.html includes accessibility-focused transport content", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /AccessGo Transport/);
  assert.match(html, /Skip to main content/);
  assert.match(html, /Book a ride/);
  assert.match(html, /Wheelchair-accessible vehicles/);
});

test("script.js includes booking confirmation and high contrast toggle", () => {
  const script = fs.readFileSync(path.join(root, "script.js"), "utf8");
  assert.match(script, /high-contrast/);
  assert.match(script, /Booking request submitted/);
});
