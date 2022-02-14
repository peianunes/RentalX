import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificaitonRepository = null;
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificaitonRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
