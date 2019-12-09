import express from "express";
import http from "http";
import ora from "ora";
import chalk from "chalk";
import {HOST_PORT, HOST_URL} from "./core/constant";

const app = express();
const httpServer = http.createServer(app);

const spinner = ora();

app.get("/", (req, res) => {
    res.send("running node api");
});

httpServer.listen(HOST_PORT, () => {
    spinner.succeed();
    console.log(
        chalk.green("✓"),
        `Server ready. -> start on ${HOST_URL}:${HOST_PORT}/`,
    );
});

httpServer.on("error", error => {
    spinner.fail();
    console.log(error);
    console.log("💣", chalk.red("error:"), error.message);
});
