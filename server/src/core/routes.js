import getUsers from "../controller/getUsers";

const routes = [
    {path: "/", controller: getUsers},
    {path: "/test", controller: getUsers},
];

export default routes;
