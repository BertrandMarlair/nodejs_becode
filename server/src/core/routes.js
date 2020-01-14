import getUsers from "../controller/getUsers";
import getTest from "../controller/getTest";

const routes = [
    {path: "/", controller: getUsers},
    {path: "/test", controller: getTest},
];

export default routes;
