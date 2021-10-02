import { Router } from "express";
import { CreateTodosController } from "@modules/todos/useCases/createTodos/CreateTodosController";
import { ListTodosController } from "@modules/todos/useCases/listTodos/ListTodosController";
import { DoneTodosController } from "@modules/todos/useCases/doneTodos/DoneTodosController";

const todosRouter = Router();

const todosCreateController = new CreateTodosController();
const listTodosController = new ListTodosController();
const doneTodosController = new DoneTodosController();

todosRouter.post("/", todosCreateController.handler);

todosRouter.get("/:user_id", listTodosController.handler);

todosRouter.post("/:user_id/done/:todo_id", doneTodosController.handler);

export { todosRouter };
