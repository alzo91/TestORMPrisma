import { Request, Response } from "express";
import { DoneTodosUsesCase } from "./DoneTodosUseCase";

class DoneTodosController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { user_id, todo_id } = request.params;
    const doneTodoUseCase = new DoneTodosUsesCase();
    const todo = await doneTodoUseCase.execute({
      todo_id,
      user_id: Number(user_id),
    });
    return response.status(200).json({ ok: true, ...todo });
  }
}

export { DoneTodosController };
