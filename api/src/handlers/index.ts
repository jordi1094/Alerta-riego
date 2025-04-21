import { RequestHandler } from "express";
import registerUserHandler from "./registerUserHandler";

type routerHandlerMap = {
    registerUserHandler : RequestHandler
}
const routerHandler: routerHandlerMap = {
    registerUserHandler
}

export default routerHandler