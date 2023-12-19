import {Injectable} from '@nestjs/common';
import {TtDataService} from "./ttData/ttData.service";
import {mapTtData} from "./utils";

@Injectable()
export class AppService {
  constructor(private ttDataService: TtDataService) {
  }

  getData(): { message: string } {
    return {message: 'Hello API'};
  }

  async getTtData() {
    const ttdata = await this.ttDataService.getAll();
    if (!ttdata) {
      return;
    }

    return mapTtData(ttdata);
  }

}
