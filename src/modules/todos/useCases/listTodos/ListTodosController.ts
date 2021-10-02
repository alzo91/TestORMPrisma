import { Todos } from ".prisma/client";
import { Request, Response } from "express";
import { ListTodosUseCase } from "./ListTodosUseCase";

class ListTodosController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const { done } = request.query;
    const listTodosUseCase = new ListTodosUseCase();
    let todos = await listTodosUseCase.execute({
      user_id: Number(user_id),
      done: done as string,
    });

    return response.status(200).json(todos);
  }
}

export { ListTodosController };
