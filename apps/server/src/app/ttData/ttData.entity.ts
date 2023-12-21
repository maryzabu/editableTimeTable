import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class TtDataEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public timeId: number;

  @Column()
  public dayId: number;

  @Column()
  public groupId: number;

  @Column()
  public subjectId: number;
}
