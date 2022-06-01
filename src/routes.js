import { Router } from "express";
import AdminController from "./controllers/AdminController.js";
import LoginController from "./controllers/LoginController.js";
import UserController from "./controllers/UserController.js";

const routes = Router();

routes.post("/create/user", UserController.createUser);
routes.get("/users", UserController.getUsers);
routes.delete("/delete/users", UserController.deleteUsers);
routes.delete("/delete/user", UserController.deleteOneUser);
routes.post("/login", LoginController.signIn);

routes.post("/create/rule", AdminController.createRule);
routes.get("/rules", AdminController.getRules);
routes.delete("/delete/rules", AdminController.deleteRules);

export default routes;
