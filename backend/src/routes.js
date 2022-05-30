import { Router } from "express";
import LoginController from "./controllers/LoginController.js";
import UserController from "./controllers/UserController.js";

const routes = Router()

routes.post("/create/user", UserController.createUser)
routes.get("/users", UserController.getUsers)
routes.delete("/delete/users", UserController.deleteUsers)
routes.delete("/delete/user", UserController.deleteOneUser)
routes.post("/login", LoginController.signIn)

export default routes