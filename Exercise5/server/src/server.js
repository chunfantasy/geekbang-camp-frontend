const express = require("express");
const cors = require("cors");
const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;
let cmd;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/run", (req, res) => {
  console.log("Run");
  cmd = cp.spawn("npm", ["run", "serve", "--", "--port", "3001"]);

  cmd.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
    if (data.includes('http://localhost')) {
      res.send("Done!");
    }
  });

  cmd.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  cmd.on("error", (err) => {
    console.log(`child process exited with err ${err}`);
  });

  cmd.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
});

app.post("/kill", (req, res) => {
  console.log("Run");
  res.send("POST request to the homepage");
});

app.post("/update", (req, res) => {
  console.log("Update");
  console.log(req.body);
  const data = new Uint8Array(
    Buffer.from("/* eslint-disable */\n" + req.body.content)
  );
  fs.writeFile(path.resolve("src", "views", "Demo.vue"), data, console.log);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
