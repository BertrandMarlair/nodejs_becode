import express from "express";
import http from "http";
import ora from "ora";
import chalk from "chalk";
import {HOST_PORT, HOST_URL} from "./core/constant";

const app = express();
const httpServer = http.createServer(app);
const spinner = ora();

spinner.start();

app.get("/", (req, res) => {
    res.send([{name: "Jean", lastname: "paul"}]);
});

app.get("/test", (req, res) => {
    res.send([{name: "Jean", lastname: "paul"}]);
});

httpServer.listen(HOST_PORT, () => {
    spinner.succeed();
    console.log(`${chalk.blue(" Started -> ")} on ${HOST_URL}:${HOST_PORT}`);
});

httpServer.on("error", error => {
    console.log(error);
    spinner.fail();
    console.log(`💣 ${error}`);
});
