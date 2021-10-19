import { Repository, getRepository } from "typeorm";

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../../../repositories/ISpecificationsRepository";
import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  public constructor() {
    this.repository = getRepository(Specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });
    return specification;
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = await this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }
}

export { SpecificationsRepository };
