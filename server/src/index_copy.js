import express from "express";
import http from "http";
import ora from "ora";
import chalk from "chalk";
import {HOST_PORT, HOST_URL} from "./core/constant";
import routes from "./core/routes";

const app = express();
const httpServer = http.createServer(app);

const spinner = ora();

routes.forEach(route => {
    app.get(route.path, (req, res) => {
        res.send(route.controller(req, res));
    });
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