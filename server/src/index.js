import express from "express";
import http from "http";
import ora from "ora";
import chalk from "chalk";
import {HOST_PORT, HOST_URL} from "./core/constant";
import routes from "./core/routes";
import mongo from "./core/mongo";

const app = express();
const httpServer = http.createServer(app);

const spinner = ora();

routes.forEach(route => {
    app.get(route.path, (req, res) => {
        route.controller(req, res);
    });
});

httpServer.listen(HOST_PORT, async () => {
    spinner.succeed();
    const db = await mongo();

    if (db) {
        console.log(
            chalk.green("✓"),
            `Server and database ready. -> start on ${HOST_URL}:${HOST_PORT}/`,
        );
    } else {
        console.log(
            console.log(
                "💣",
                chalk.red("error:"),
                "failed to connect to the database",
            ),
        );
    }
});

httpServer.on("error", error => {
    spinner.fail();
    console.log(error);
    console.log("💣", chalk.red("error:"), error.message);
});
