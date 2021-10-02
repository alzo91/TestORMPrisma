import { CreateUserController } from "@modules/users/useCases/createUsers/CreateUsersController";
import { Router } from "express";

const usersRoute = Router();

// Controllers abstraem a requisição e repassam para o service.
// Service retornam e devolvemos o valor
const createUserController = new CreateUserController();

// Rota de criação
usersRoute.post("/", createUserController.handler);

export { usersRoute };
