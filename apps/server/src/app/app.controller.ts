import {Controller, Get, HttpException, HttpStatus} from '@nestjs/common';

import { AppService } from './app.service';
import {getSubjects} from "@utils";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSubjects() {
    return getSubjects();
  }

  @Get('TtData')
  getTtData() {
    const data = await this.appService.getTtData();
    if(data) {
      return data;
    }

    throw new HttpException('Нет данных', HttpStatus.NOT_FOUND);
  }
}
