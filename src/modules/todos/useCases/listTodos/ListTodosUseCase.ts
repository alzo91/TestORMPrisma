import { Todos } from ".prisma/client";
import { prismaConn } from "@database/ConnPrisma";

interface IRequest {
  user_id: number;
  done?: string;
}

class ListTodosUseCase {
  async execute({ user_id, done }: IRequest): Promise<Todos[]> {
    const where =
      done === undefined
        ? { userId: user_id }
        : { userId: user_id, done: done === "false" ? false : true };
    const todos = await prismaConn.todos.findMany({
      where: { ...where },
      select: {
        user: { select: { id: true, email: true } },
        id: true,
        title: true,
        deadLine: true,
        done: true,
        userId: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return todos;
  }
}

export { ListTodosUseCase };
