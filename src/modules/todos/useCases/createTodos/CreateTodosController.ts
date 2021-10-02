import { Request, Response } from "express";
import { CreateTodosUseCase } from "./CreateTodosUseCase";

interface IRequest {
  title: string;
  deadline: Date;
  user_id: number;
}

class CreateTodosController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { user_id, title, deadline } = request.body as IRequest;
    const createTodo = new CreateTodosUseCase();
    const todo = await createTodo.execute({ user_id, title, deadline });
    return response.status(201).json(todo);
  }
}

export { CreateTodosController };
