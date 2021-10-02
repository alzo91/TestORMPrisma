import { prismaConn } from "@database/ConnPrisma";
import { Users } from "@prisma/client";
import { AppError } from "@utils/error/AppError";

interface IRequestUser {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  async execute({ name, email, password }: IRequestUser): Promise<Users> {
    const userAlreadyExist = await prismaConn.users.findFirst({
      where: { email },
    });

    if (!!userAlreadyExist) {
      throw new AppError(`e-mail ${email} belongs to another user!`, 400);
    }

    const user = await prismaConn.users.create({
      data: { name, email, password },
    });

    return user;
  }
}

export { CreateUserUseCase };
