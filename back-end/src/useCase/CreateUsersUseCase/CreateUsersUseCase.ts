import { UsersRepository } from "../../repositories/UsersRepository";
import { hash } from "bcryptjs";
import { AppError } from "../../error/AppError";
import { ICreateUsersDTO } from "../../repositories/dtos/ICreateUsersDTO";

class CreateUsersUseCase {
  public async execute({ name, email, password }: ICreateUsersDTO) {
    const usersRepository = new UsersRepository();

    const userAlreadyExists = await usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already existing with this email.");
    }

    const hashedPassword = await hash(password, 8);

    const user = await usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export { CreateUsersUseCase };
