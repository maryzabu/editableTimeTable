import {HttpException, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {TtDataEntity} from "./ttData.entity";
import {Repository} from "typeorm";

@Injectable()
export class TtDataService {
  constructor(@InjectRepository(TtDataEntity) private repository: Repository<TtDataEntity>) {
  }

  getAll() {
    return this.repository.find();
  }

  getById(id: number) {
    return this.repository.findOneBy({id});
  }

  getBy(values: Partial<TtDataEntity>) {
    return this.repository.findOneBy(values);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }

  private async addItem(values: TtDataEntity) {
    const newTtData = await this.repository.create(values);
    await this.repository.save(newTtData);
    return newTtData;
  }

  async update(id: number, values: Partial<TtDataEntity>) {
    await this.repository.update({id}, values);
    return this.getById(id);
  }

  async add(values: TtDataEntity) {
    const data = await this.getBy(values);

    if (!data) {
      return this.addItem(values);
    }

    return this.update(data.id, values);
  }
}
