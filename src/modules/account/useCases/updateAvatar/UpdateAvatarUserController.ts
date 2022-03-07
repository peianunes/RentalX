import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./UpdateAvatarUserUseCase";

class UpdateAvatarUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user; // from ensureAuthenticated middleware
    const avatar_file = request.file.filename; // from uploadConfig middleware

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    await updateUserAvatarUseCase.execute({ user_id: id, avatar_file });

    return response.status(204).send();
  }
}
export { UpdateAvatarUserController };
