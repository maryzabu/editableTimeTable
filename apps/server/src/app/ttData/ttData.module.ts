import {TypeOrmModule} from "@nestjs/typeorm";
import {TtDataEntity} from "./ttData.entity";
import {TtDataService} from "./ttData.service";
import {Module} from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([TtDataEntity])],
  providers: [TtDataService],
  exports: [TtDataService]
})
export class TtDataModule {
}
