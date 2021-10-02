import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const user = await new CreateUserUseCase().execute({
      email,
      name,
      password,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
