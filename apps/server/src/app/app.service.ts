import {Injectable, Logger} from '@nestjs/common';
import {TtDataService} from "./ttData/ttData.service";
import {mapTtData} from "./utils";
import {TtDataEntity} from "./ttData/ttData.entity";

@Injectable()
export class AppService {
  constructor(private ttDataService: TtDataService) {
  }

  getTtDataFull() {
    return this.ttDataService.getAll();
  }

  async getTtData() {
    const ttdata = await this.ttDataService.getAll();
    if (!ttdata) {
      return;
    }

    return mapTtData(ttdata);
  }

  async addTtData(values: TtDataEntity) {
    return this.ttDataService.add(values);
  }

  async patchTtData(id: number, values: Partial<TtDataEntity>) {
    return this.ttDataService.patch(id, values);
  }

  async deleteById(id:number) {
    return this.ttDataService.deleteById(id);
  }

}
