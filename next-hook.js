const express = require("express");
const { existsSync } = require("fs");
const next = require("next");
const { join } = require("path");
const waitOn = require("wait-on");

const port = process.env.PORT ? parseInt(process.env.PORT, 10) || 3000 : 3000;
const dev = process.env.NODE_ENV !== "production";

const server = express();

(async () => {
  if (!dev) {
    if (!existsSync(join(__dirname, ".next"))) {
      console.log("Waiting on next build to finish");

      server.use((_req, res) => res.send("Loading..."));
      server.listen(port, err => {
        if (err) throw err;

        process.send("ready");
      });
      return;
    }
  }
  const app = next({ dev });
  const handle = app.getRequestHandler();

  await app.prepare();

  server.use((req, res) => handle(req, res));

  console.log("Waiting on port 4000");
  await waitOn({
    resources: ["tcp:4000"],
  });
  server.listen(port, err => {
    if (err) throw err;

    process.send("ready");
    console.log(`> Ready on http://localhost:${port}`);
  });
})();
