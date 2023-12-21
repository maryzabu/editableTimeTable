import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {TtDataEntity} from "./ttData.entity";
import {Repository} from "typeorm";

@Injectable()
export class TtDataService {
  constructor(@InjectRepository(TtDataEntity) private repository: Repository<TtDataEntity>) {
  }

  getAll() {
    return this.repository.find({order: {dayId: 'ASC', timeId: 'ASC', groupId: 'ASC'}});
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

  async patch(id: number, values: Partial<TtDataEntity>) {
    await this.repository.update({id}, values);
    return this.getById(id);
  }

  async add(values: TtDataEntity) {
    const data = await this.getBy(values);

    if (!data) {
      return this.addItem(values);
    }

    return this.patch(data.id, values);
  }

  async deleteById(id: number) {
    const deleteResponse = await this.repository.delete(id);

    if (!deleteResponse.affected) {
      throw new HttpException(`Не найдены данные для удаления, с идентификатором id=${id}`, HttpStatus.NOT_FOUND);
    }
    return {data: `Данные с идентификатором id=${id}, успешно удалены`};
  }
}
