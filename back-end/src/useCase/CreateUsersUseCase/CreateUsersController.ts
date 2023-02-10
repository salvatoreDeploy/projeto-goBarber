import { Request, Response } from "express";
import { CreateUsersUseCase } from "./CreateUsersUseCase";

class CreateUsersController {
  public async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUsersUseCase = new CreateUsersUseCase();

    const result = await createUsersUseCase.execute({
      name,
      email,
      password,
    });

    return response.status(201).json(result);
  }
}

export { CreateUsersController };
