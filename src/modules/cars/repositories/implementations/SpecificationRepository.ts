import Specification from "../../models/Specification";
import ISpecificationRepository, {
  ICreateSpecificationDTO,
} from "../ISpecificationRepository";

export default class SpecificationRepository
  implements ISpecificationRepository
{
  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = await Specification.create({ name, description });
    return specification.save();
  }

  async findByName(name: string): Promise<Specification> {
    return Specification.findOne({
      where: {
        name,
      },
    });
  }
}
