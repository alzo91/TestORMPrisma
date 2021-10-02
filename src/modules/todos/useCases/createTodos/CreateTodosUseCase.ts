import { Todos } from ".prisma/client";
import { prismaConn } from "@database/ConnPrisma";
import { AppError } from "@utils/error/AppError";

interface IRequest {
  title: string;
  deadline: Date;
  user_id: number;
}

class CreateTodosUseCase {
  async execute({ title, deadline, user_id }: IRequest): Promise<Todos> {
    const user = await prismaConn.users.findFirst({ where: { id: user_id } });

    if (!user) {
      throw new AppError("User does not exist!");
    }

    const todo = await prismaConn.todos.create({
      data: { userId: user_id, title, deadLine: deadline },
    });

    return todo;
  }
}

export { CreateTodosUseCase };
