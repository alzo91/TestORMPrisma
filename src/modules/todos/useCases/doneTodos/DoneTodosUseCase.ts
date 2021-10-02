import { Todos } from ".prisma/client";
import { prismaConn } from "@database/ConnPrisma";
import { AppError } from "@utils/error/AppError";

interface IRequest {
  user_id: number;
  todo_id: string;
}

class DoneTodosUsesCase {
  async execute({ todo_id, user_id }: IRequest): Promise<Todos> {
    const user = await prismaConn.users.findFirst({ where: { id: user_id } });

    if (!user) {
      throw new AppError("User doesn't find", 404);
    }

    const todo = await prismaConn.todos.findFirst({ where: { id: todo_id } });

    if (!todo) {
      throw new AppError("TODO doesn't find", 404);
    }

    const updatedTodo = await prismaConn.todos.update({
      data: { done: true },
      where: { id: todo_id },
    });

    return updatedTodo;
  }
}
export { DoneTodosUsesCase };
