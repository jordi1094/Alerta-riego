import { RequestHandler } from "express";
import registerUserHandler from "./registerUserHandler.js";

type routerHandlerMap = {
    registerUserHandler : RequestHandler
}
const routerHandler: routerHandlerMap = {
    registerUserHandler
}

export default routerHandler