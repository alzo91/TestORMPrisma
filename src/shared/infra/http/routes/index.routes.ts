import { Router } from "express";
import { todosRouter } from "./todos.routes";
import { usersRoute } from "./users.routes";

const router = Router();

router.use("/users", usersRoute);
router.use("/todos", todosRouter);
export { router };
