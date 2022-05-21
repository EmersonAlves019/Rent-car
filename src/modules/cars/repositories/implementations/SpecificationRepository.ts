import Specification from "../../model/Specification";
import ISpecificationRepository, {
  ICreateSpecificationDTO,
} from "../ISpecificationRepository";

export default class SpecificationRepository
  implements ISpecificationRepository
{
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
    this.specification.push(specification);
  }

  findByName(name: string): Specification {
    return this.specification.find((each) => each.name === name);
  }
}
