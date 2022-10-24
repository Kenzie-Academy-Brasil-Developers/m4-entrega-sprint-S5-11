import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

import { User } from "./user.entities";

import { Property } from "./properties.entities";

@Entity("schedules_user_property")
class Schedules {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  date: Date;

  @Column("time")
  hour: Date;

  @ManyToOne(() => User)
  userid: User;

  @ManyToOne(() => Property)
  propertieId: Property;
}

export { Schedules };
