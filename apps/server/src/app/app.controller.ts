import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post} from '@nestjs/common';

import {AppService} from './app.service';
import {CreateTtDataDto, getGroupsObject, getSubjects, PatchTtDataDto} from "@utils";
import {GROUPS, TT_DATA, TT_DATA_FULL} from "../../../front/src/app/constants";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getSubjects() {
    return getSubjects();
  }

  @Get(GROUPS)
  getGroups() {
    return getGroupsObject();
  }

  @Get(TT_DATA)
  async getTtData() {
    const data = await this.appService.getTtData();
    if (data) {
      return data;
    }

    throw new HttpException('Нет данных', HttpStatus.NOT_FOUND);
  }

  @Get(TT_DATA_FULL)
  async getTtDataFull() {
    const data = await this.appService.getTtDataFull();
    if (data) {
      return data;
    }

    throw new HttpException('Нет данных', HttpStatus.NOT_FOUND);
  }

  @Post(TT_DATA)
  async createTtData(@Body() ttData: CreateTtDataDto) {
    return this.appService.addTtData(ttData);
  }

  @Patch(`${TT_DATA}/:id`)
  async patchTtData(@Param('id') id: string, @Body() ttData: PatchTtDataDto) {

    return this.appService.patchTtData(Number(id), ttData);
  }

  @Delete(`${TT_DATA}/:id`)
  async deleteById(@Param('id') id: string) {

    return this.appService.deleteById(Number(id));
  }
}
